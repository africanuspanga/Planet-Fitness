import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-orange overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase opacity-90">PLANET FITNESS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif leading-tight">
                Transform
                <br />
                Your Life
              </h1>
            </div>

            <span className="text-base sm:text-lg lg:text-xl opacity-90 max-w-lg leading-relaxed block mx-auto lg:mx-0">
              Join Planet Fitness and discover world-class equipment, expert guidance, and a supportive community
              dedicated to your fitness journey.
            </span>

            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-brand-gray hover:bg-brand-gray/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg btn-hover transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact">GET STARTED</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              <div className="w-full h-64 sm:h-80 lg:h-[500px] relative rounded-3xl overflow-hidden">
                <img
                  src="/images/hero-gym-woman.png"
                  alt="Woman training with gym equipment"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
