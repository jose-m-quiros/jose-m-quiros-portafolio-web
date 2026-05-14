import { NextResponse } from 'next/server';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  const web3FormsKey =
    process.env.WEB3FORMS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim() ||
    '';

  if (!web3FormsKey) {
    console.error('WEB3FORMS_KEY is not configured on the server.');

    return NextResponse.json(
      {
        success: false,
        message: 'El formulario no esta disponible en este momento.',
      },
      { status: 500 }
    );
  }

  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Solicitud invalida.',
      },
      { status: 400 }
    );
  }

  const name = payload.name?.trim() || '';
  const email = payload.email?.trim() || '';
  const subject = payload.subject?.trim() || '';
  const message = payload.message?.trim() || '';
  const website = payload.website?.trim() || '';

  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !subject || !message || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Revisa los campos del formulario e intenta nuevamente.',
      },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        name,
        from_name: name,
        email,
        replyto: email,
        subject: `[Portafolio] ${subject}`,
        message,
        botcheck: '',
      }),
      cache: 'no-store',
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      console.error('Web3Forms submit failed.', {
        status: response.status,
        message: result.message,
      });

      return NextResponse.json(
        {
          success: false,
          message: result.message || 'No se pudo enviar el mensaje.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API submit error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'No se pudo enviar el mensaje.',
      },
      { status: 502 }
    );
  }
}