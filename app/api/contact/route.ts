import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(4000),
  website: z.string().trim().max(200).optional().default(''),
});

export async function POST(request: Request) {
  const accessKey =
    process.env.WEB3FORMS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

  if (!accessKey) {
    console.error(
      'WEB3FORMS_KEY is not configured. Fallback NEXT_PUBLIC_WEB3FORMS_KEY is also missing.'
    );
    return NextResponse.json(
      { success: false, message: 'Contact service is unavailable.' },
      { status: 500 }
    );
  }

  if (!process.env.WEB3FORMS_KEY && process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
    console.warn(
      'Using legacy NEXT_PUBLIC_WEB3FORMS_KEY on the server. Configure WEB3FORMS_KEY in Vercel.'
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: 'Invalid form data.' },
      { status: 400 }
    );
  }

  const { name, email, subject, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        from_name: name,
        email,
        replyto: email,
        subject: `[Portafolio] ${subject}`,
        message,
      }),
    });

    const rawResponse = await response.text();

    let result: {
      success?: boolean;
      message?: string;
    } = {};

    if (rawResponse) {
      try {
        result = JSON.parse(rawResponse) as {
          success?: boolean;
          message?: string;
        };
      } catch {
        console.error('Web3Forms returned a non-JSON response.', {
          status: response.status,
          bodyPreview: rawResponse.slice(0, 300),
        });

        return NextResponse.json(
          { success: false, message: 'Unable to send message.' },
          { status: 502 }
        );
      }
    }

    if (!response.ok || !result.success) {
      console.error('Web3Forms rejected the contact request.', {
        status: response.status,
        message: result.message,
      });

      return NextResponse.json(
        { success: false, message: 'Unable to send message.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact submission failed.', error);
    return NextResponse.json(
      { success: false, message: 'Unable to send message.' },
      { status: 500 }
    );
  }
}