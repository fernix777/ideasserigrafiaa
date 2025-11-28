import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasFrom: !!process.env.NEXT_PUBLIC_RESEND_FROM,
    hasTo: !!process.env.NEXT_PUBLIC_RESEND_TO,
    // Don't expose the actual key in the response
    resendKeyFirstChars: process.env.RESEND_API_KEY ? 
      `${process.env.RESEND_API_KEY.substring(0, 5)}...` : null,
    fromEmail: process.env.NEXT_PUBLIC_RESEND_FROM,
    toEmail: process.env.NEXT_PUBLIC_RESEND_TO,
  });
}
