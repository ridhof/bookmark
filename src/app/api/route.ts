import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { rows } = await sql`SELECT * FROM _prisma_migrations LIMIT 1;`;
        console.log(rows);
        return NextResponse.json(
            {
                body: request.body,
                path: request.nextUrl.pathname,
                query: request.nextUrl.search,
                cookies: request.cookies.getAll(),
                rows: rows,
            },
            {
                status: 200,
            },
        );
    } catch (err) {
        console.log("err: " + err);
        return NextResponse.json(
            {},
            { status: 400 }
        );
    }
    
}