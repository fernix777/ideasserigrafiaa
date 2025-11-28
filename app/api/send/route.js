import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        console.log('Received request to /api/send');
        const { name, email, message } = await request.json();
        
        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios' },
                { status: 400 }
            );
        }

        console.log('Environment variables check:', {
            hasResendKey: !!process.env.RESEND_API_KEY,
            hasFrom: !!process.env.NEXT_PUBLIC_RESEND_FROM,
            hasTo: !!process.env.NEXT_PUBLIC_RESEND_TO
        });

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set in environment variables');
            return NextResponse.json(
                { error: 'Error de configuración del servidor: Falta RESEND_API_KEY' },
                { status: 500 }
            );
        }

        if (!process.env.NEXT_PUBLIC_RESEND_TO) {
            console.error('NEXT_PUBLIC_RESEND_TO is not set in environment variables');
            return NextResponse.json(
                { error: 'Error de configuración del servidor: Falta NEXT_PUBLIC_RESEND_TO' },
                { status: 500 }
            );
        }

        const fromEmail = process.env.NEXT_PUBLIC_RESEND_FROM || 'Ideas Serigrafía <onboarding@resend.dev>';
        const toEmail = process.env.NEXT_PUBLIC_RESEND_TO;

        console.log('Sending email with Resend...', {
            from: fromEmail,
            to: toEmail,
            subject: `Nuevo mensaje de contacto de ${name}`
        });

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `Nuevo mensaje de contacto de ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de Ideas Serigrafía.
          </p>
        </div>
      `,
        });

        console.log('Resend response:', { data, error });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json(
                { 
                    error: 'Error al enviar el correo',
                    details: error.message || 'Error desconocido de Resend',
                    type: 'resend_error'
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Correo enviado correctamente',
            data 
        });
        
    } catch (error) {
        console.error('Unexpected error in /api/send:', error);
        return NextResponse.json(
            { 
                error: 'Error interno del servidor',
                details: error.message,
                type: 'server_error'
            },
            { status: 500 }
        );
    }
}
