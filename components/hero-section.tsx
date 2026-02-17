import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center bg-gray-900 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-gym-athlete.jpeg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/30" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-0">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">
              Dar es Salaam&apos;s Premier Gym
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-[1.1] mb-6">
            <span className="text-white">Transform</span>
            <br />
            <span className="text-brand-orange">Your Body,</span>
            <br />
            <span className="text-white">Your Life</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mb-8">
            World-class equipment, expert trainers, and a community that pushes you beyond your limits. Your fitness journey starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
            >
              <a href="https://okfit.short.gy/pkaI38" target="_blank" rel="noopener noreferrer">
                Join Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-base sm:text-lg font-semibold min-h-[48px] touch-manipulation bg-transparent"
            >
              <a href="/membership">
                View Plans
              </a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">1684+</p>
              <p className="text-xs sm:text-sm text-gray-400">Members Trained</p>
            </div>
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">876</p>
              <p className="text-xs sm:text-sm text-gray-400">Equipment Pieces</p>
            </div>
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-brand-orange">5+</p>
              <p className="text-xs sm:text-sm text-gray-400">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
