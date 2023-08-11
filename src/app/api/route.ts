import { kv } from "@vercel/kv";
import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { rows } = await sql`SELECT * FROM _prisma_migrations LIMIT 1;`;
        console.log(rows);
        const initialGetKV = await kv.get<{ message: string }[]>("test-bookmark");
        console.log("initial kv: " + initialGetKV);
        const setKV = await kv.set("test-bookmark", { message: "initial kv setup" }, { ex: 60 * 15 });
        console.log("set kv: " + setKV);
        const getKV = await kv.get<{ message: string }[]>("test-bookmark");
        console.log("get kv: " + getKV);
        return NextResponse.json(
            {
                body: request.body,
                path: request.nextUrl.pathname,
                query: request.nextUrl.search,
                cookies: request.cookies.getAll(),
                rows: rows,
                initial_kv: initialGetKV,
                set_kv: setKV,
                get_kv: getKV,
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