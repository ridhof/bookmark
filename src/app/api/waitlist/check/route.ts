import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(
            { message: "success" },
            { status: 200 },
        );
    } catch (err) {
        console.log("err: " + err);
        return NextResponse.json(
            { message: "error has occurred." },
            { status: 400 }
        );
    }
}