import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook, Music } from "lucide-react"
import Image from "next/image";

export default function ComingSoonPage() {
  return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Shooting Stars Background */}
        <div className="absolute inset-0">
          {/* Shooting stars */}
          <div className="shooting-star shooting-star-1"></div>
          <div className="shooting-star shooting-star-2"></div>
          <div className="shooting-star shooting-star-3"></div>
          <div className="shooting-star shooting-star-4"></div>
          <div className="shooting-star shooting-star-5"></div>
          <div className="shooting-star shooting-star-6"></div>
          <div className="shooting-star shooting-star-7"></div>
          <div className="shooting-star shooting-star-8"></div>

          {/* Static stars for depth */}
          <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-32 right-20 w-0.5 h-0.5 bg-gray-300 rounded-full animate-twinkle-delay-1"></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle-delay-2"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-gray-400 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-white rounded-full animate-twinkle-delay-1"></div>
          <div className="absolute top-1/2 left-20 w-0.5 h-0.5 bg-gray-300 rounded-full animate-twinkle-delay-2"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-16 right-1/2 w-0.5 h-0.5 bg-gray-400 rounded-full animate-twinkle-delay-1"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center text-center">
          {/* Logo/Brand Section */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-200">
              {/*<div className="w-16 h-16 bg-black rounded-full relative">*/}
              {/*  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-600 rounded-full"></div>*/}
              {/*  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white rounded-full animate-flicker"></div>*/}
              {/*</div>*/}
              <Image src="/logo.png" alt="Logo" width={64} height={64} className="animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">TwelveTwelve</h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-4 tracking-wide">Candle Co</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Something Beautiful is Coming</h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We&#39;re crafting a new digital experience as carefully as we craft our candles. Our new website will be
              launching soon with an enhanced shopping experience, exclusive collections, and everything you love about
              our handcrafted candles.
            </p>
          </div>

          {/* Newsletter Signup */}
          <Card className="w-full max-w-md mb-12 bg-gray-900/80 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Be the First to Know</h4>
              <p className="text-gray-400 mb-4">Get notified when we launch and receive exclusive early access offers.</p>
              <div className="flex gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-black border-gray-600 text-white placeholder:text-gray-500 focus:border-white"
                />
                <Button className="bg-white text-black hover:bg-gray-200 font-medium">Notify Me</Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
            <div className="flex gap-4 justify-center">
              <Button
                  variant="outline"
                  size="lg"
                  className="w-36 border-gray-600 hover:bg-white hover:text-black hover:border-white bg-transparent text-white transition-all duration-300"
                  asChild
              >
                <a
                    href="https://www.instagram.com/twelvetwelve_candle_co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  className="w-36 border-gray-600 hover:bg-white hover:text-black hover:border-white bg-transparent text-white transition-all duration-300"
                  asChild
              >
                <a
                    href="https://www.facebook.com/share/19PqB6ATVP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  className="w-36 border-gray-600 hover:bg-white hover:text-black hover:border-white bg-transparent text-white transition-all duration-300"
                  asChild
              >
                <a
                    href="https://www.tiktok.com/@1212candleco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                  <Music className="w-5 h-5" />
                  TikTok
                </a>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 TwelveTwelve Candle Co. All rights reserved.</p>
            <p className="mt-1">Handcrafted with love, coming to you soon.</p>
          </div>
        </div>
      </div>
  )
}
