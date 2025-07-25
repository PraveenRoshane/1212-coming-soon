import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const file = path.join(process.cwd(), 'emails.txt');
    await fs.appendFile(file, email + '\n');
    return NextResponse.json({ ok: true });
}