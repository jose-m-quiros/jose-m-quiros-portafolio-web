import { contactSchema } from '@/lib/schemas';
import { NextRequest, NextResponse } from 'next/server';

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'anonymous'
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = attempts.get(key);

  if (!current || current.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  attempts.set(key, current);
  return current.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const accessKey = process.env.WEB3FORMS_KEY;

  if (!accessKey) {
    console.error('[contact] WEB3FORMS_KEY env var is not set.');
    return NextResponse.json({ message: 'Contact service is not configured.' }, { status: 503 });
  }

  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json({ message: 'Too many requests. Try again later.' }, { status: 429 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid contact payload.' }, { status: 400 });
  }

  const payload = parsed.data;

  if (payload.website) {
    return NextResponse.json({ message: 'Message accepted.' }, { status: 202 });
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      from_name: payload.name,
      email: payload.email,
      replyto: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      message: payload.message,
      botcheck: payload.website || '',
    }),
  });

  const result = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !result.success) {
    console.error('[contact] Web3Forms error:', {
      status: response.status,
      result,
    });
    return NextResponse.json({ message: 'Unable to send message.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'Message sent.' });
}
