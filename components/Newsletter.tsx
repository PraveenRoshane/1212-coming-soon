'use client'

import React, {useState} from 'react'
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending…');
        const res = await fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        setStatus(res.ok ? 'Thanks!' : 'Try again');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full max-w-md mb-5 bg-neutral-900/80 backdrop-blur-sm border-gold">
                <CardContent>
                    <h4 className="text-xl font-semibold text-gold mb-3 font-sans">Be the First to Know</h4>
                    <p className="text-gold-light mb-4 font-sans">
                        Because beauty this intentional deserves to be shared first—with you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-black border-gold text-white placeholder:text-gold-light focus:border-yellow-400"
                            required
                        />
                        <Button className="bg-gold text-black hover:bg-gold-light font-medium" type="submit">
                            Notify Me
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
export default Newsletter
