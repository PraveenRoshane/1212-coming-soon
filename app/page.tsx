import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent} from "@/components/ui/card";
import {Instagram, Facebook, Music} from "lucide-react";
import Image from "next/image";
import Snowfall from "@/components/Snowfall";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden sm:pt-5">
            {/* Snowfall background */}
            <div className="absolute inset-0 z-0">
                <Snowfall/>
            </div>

            {/* Foreground content */}
            <div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 min-h-screen flex flex-col items-center justify-center text-center">
                {/* Logo / Brand */}
                <div className="mb-8">
                    <div
                        className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[var(--color-gold)] to-amber-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-[var(--color-gold)]">
                        <Image src="/logo.svg" alt="Logo" width={32} height={32} className="animate-pulse"/>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-gold)] mb-2 tracking-wide px-4 font-playfair">
                        TWELVE
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-gold)] mb-2 tracking-wide px-4 font-playfair">
                        TWELVE
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-amber-300 mb-4 tracking-wide font-playfair">
                        CANDLE CO.
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Coming-Soon message */}
                <div className="mb-8 sm:mb-12 max-w-2xl px-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--color-gold)] mb-4 leading-relaxed font-playfair">
                        A new chapter is about to glow.
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-amber-100 leading-relaxed font-sans">
                        We’re shaping a digital space with the same care and intention we pour into every candle. Soon,
                        you’ll be able to explore our luminous world—where timeless fragrance, handcrafted beauty, and
                        thoughtful design come together.
                    </p>
                </div>

                {/* Newsletter signup */}
                <Card className="w-full max-w-md mb-12 bg-neutral-900/80 backdrop-blur-sm border-[var(--color-gold)]">
                    <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-[var(--color-gold)] mb-3 font-sans">Be the First to Know</h4>
                        <p className="text-amber-200 mb-4 font-sans">
                            Because beauty this intentional deserves to be shared first—with you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-black border-[var(--color-gold)] text-yellow-300 placeholder:text-[var(--color-gold)] focus:border-yellow-400"
                            />
                            <Button className="bg-[var(--color-gold)] text-black hover:bg-amber-500 font-medium">
                                Notify Me
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Social links */}
                <div className="mb-8">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-4">Follow Our Journey</h4>
                    <div className="flex gap-4 justify-center">
                        {[
                            {
                                icon: Instagram,
                                label: "Instagram",
                                href: "https://www.instagram.com/twelvetwelve_candle_co/",
                            },
                            {
                                icon: Facebook,
                                label: "Facebook",
                                href: "https://www.facebook.com/share/19PqB6ATVP/",
                            },
                            {
                                icon: Music,
                                label: "TikTok",
                                href: "https://www.tiktok.com/@1212candleco",
                            },
                        ].map(({icon: Icon, label, href}) => (
                            <Button
                                key={label}
                                variant="outline"
                                size="lg"
                                className="backdrop-blur-sm md:w-36 border-[var(--color-gold)] hover:bg-yellow-400 hover:text-black hover:border-yellow-400 bg-transparent text-yellow-400 transition-all duration-300"
                                asChild
                            >
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5"/>
                                    <span className="hidden sm:inline">{label}</span>
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-amber-200 text-sm">
                    <p>© 2024 TwelveTwelve Candle Co. All rights reserved.</p>
                    <p className="mt-1">Handcrafted with love, coming to you soon.</p>
                </div>
            </div>
        </div>
    );
}