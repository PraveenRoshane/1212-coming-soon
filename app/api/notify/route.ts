import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
    const { email } = await req.json();
    if (!email?.includes('@'))
        return new Response('Invalid email', { status: 400 });

    const file = path.join('/tmp', 'emails.txt');   // <— use /tmp

    try {
        await fs.access(file);
    } catch {
        await fs.writeFile(file, '');
    }

    await fs.appendFile(file, email + '\n');
    return Response.json({ ok: true });
}