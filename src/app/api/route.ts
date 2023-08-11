import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(
            {
                body: request.body,
                path: request.nextUrl.pathname,
                query: request.nextUrl.search,
                cookies: request.cookies.getAll(),
            },
            {
                status: 200,
            },
        );
    } catch (err) {
        return NextResponse.json(
            {},
            { status: 400 }
        );
    }
    
}