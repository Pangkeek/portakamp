import { NextResponse } from 'next/server';

// Force this route to be dynamic (never pre-rendered at build time)
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set in environment variables.');
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
    }

    // Dynamic import to avoid build-time evaluation
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { name, email, phone, org, message, activeTags } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'info@portakamp.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Organization:</strong> ${org || 'N/A'}</p>
        <p><strong>Area of Interest:</strong> ${activeTags?.length > 0 ? activeTags.join(', ') : 'None selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
