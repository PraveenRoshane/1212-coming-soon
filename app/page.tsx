import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent} from "@/components/ui/card";
import {Instagram, Facebook, Music} from "lucide-react";
import Image from "next/image";
import Snowfall from "@/components/Snowfall";

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Background"
                    fill
                    className="object-center object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/75"></div>
            </div>

            {/* Snowfall background */}
            <div className="absolute inset-0 z-0">
                <Snowfall/>
            </div>

            {/* Foreground content */}
            <div className="min-h-screen overflow-hidden relative z-10 container mx-auto px-5 flex flex-col items-center justify-center text-center">
                {/* Logo */}
                <div className="mb-5">
                    <div className="mx-auto flex items-center justify-center">
                        <Image src="/logo-full.svg" alt="Logo" width={800} height={800}/>
                    </div>
                </div>

                {/* Coming-Soon message */}
                <div className="mb-5 max-w-2xl">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gold mb-4 font-playfair">
                        A fresh new look is coming.
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gold-light leading-relaxed font-sans">
                        Think smoother shopping, exclusive drops, and all the scents you love—elevated.
                    </p>
                </div>

                {/* Newsletter signup */}
                <Card className="w-full max-w-md mb-5 bg-neutral-900/80 backdrop-blur-sm border-gold">
                    <CardContent>
                        <h4 className="text-xl font-semibold text-gold mb-3 font-sans">Be the First to Know</h4>
                        <p className="text-gold-light mb-4 font-sans">
                            Because beauty this intentional deserves to be shared first—with you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-black border-gold text-white placeholder:text-gold-light focus:border-yellow-400"
                            />
                            <Button className="bg-gold text-black hover:bg-gold-light font-medium">
                                Notify Me
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Social links */}
                <div>
                    <h4 className="text-lg font-semibold text-gold mb-4">Follow Our Journey</h4>
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
                                className="backdrop-blur-sm md:w-36 border-gold hover:bg-gold hover:text-black hover:border-gold bg-transparent text-gold-light transition-all duration-300"
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
                {/*<div className="text-center text-gold-light text-sm">*/}
                {/*    <p>© 2024 TwelveTwelve Candle Co. All rights reserved.</p>*/}
                {/*    <p className="mt-1">Handcrafted with love, coming to you soon.</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}