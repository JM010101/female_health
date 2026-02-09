import { NextRequest, NextResponse } from 'next/server';
import { generateEmailTemplate, generatePlainTextEmail } from '@/lib/email';
import { EmailData } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, stage, summary, recommendations } = body;

    // Validate required fields
    if (!email || !stage || !summary || !recommendations) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const emailData: EmailData = {
      email,
      stage,
      summary,
      recommendations: Array.isArray(recommendations) ? recommendations : [],
    };

    // Generate email templates
    const htmlEmail = generateEmailTemplate(emailData);
    const plainTextEmail = generatePlainTextEmail(emailData);

    // Mock email sending - in production, this would integrate with SendGrid, Resend, etc.
    console.log('=== MOCK EMAIL SENT ===');
    console.log('To:', email);
    console.log('Subject: Your Menopause Stage Assessment Results');
    console.log('\n--- HTML Email ---');
    console.log(htmlEmail);
    console.log('\n--- Plain Text Email ---');
    console.log(plainTextEmail);
    console.log('===================');

    // In a real implementation, you would:
    // 1. Use SendGrid: await sgMail.send({ to: email, subject: '...', html: htmlEmail, text: plainTextEmail })
    // 2. Use Resend: await resend.emails.send({ from: '...', to: email, subject: '...', html: htmlEmail })
    // 3. Use Nodemailer: await transporter.sendMail({ to: email, subject: '...', html: htmlEmail, text: plainTextEmail })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully (mocked)',
      // In production, you might return the email service response ID here
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
