import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
    const { email } = await req.json();
    if (!email?.includes('@'))
        return new Response('Invalid email', { status: 400 });

    const file = path.join(process.cwd(), 'emails.txt');

    // make sure the file exists before we append
    try {
        await fs.access(file);          // throws if file is missing
    } catch {
        await fs.writeFile(file, '');   // create empty file once
    }

    await fs.appendFile(file, email + '\n');
    return new Response(JSON.stringify({ ok: true }));
}