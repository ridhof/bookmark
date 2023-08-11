import { Email } from '../../components/Email';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_MAIL_SERVICE);
        const data = await resend.emails.send({
            from: 'Ridho <ridho@fbrns.co>',
            to: ['hello@ridho.one'],
            subject: 'Hello world',
            react: Email({ userFirstname: 'Edo' }),
        });
        return NextResponse.json(
            {
                body: request.body,
                path: request.nextUrl.pathname,
                query: request.nextUrl.search,
                cookies: request.cookies.getAll(),
            },
            { status: 200 }
        );
    } catch (err) {
        console.log("err: " + err);
        return NextResponse.json(
            {},
            { status: 400 }
        );
    }
    
}