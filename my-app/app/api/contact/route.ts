import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, org, message, activeTags } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      // The 'from' email must be a domain you have verified in Resend.
      // Alternatively, for testing, you can use onboarding@resend.dev which can only send to your own registered email.
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
    return NextResponse.json({ error: 'Failed to send message. Please check your Resend configuration.' }, { status: 500 });
  }
}
