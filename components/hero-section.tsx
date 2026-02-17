"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-brand-gray overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,165,0,0.08),transparent_60%)]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[100svh] py-24 lg:py-0">

          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">
                {"Dar es Salaam's Premier Gym"}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold font-serif leading-[1.1] mb-6">
              <span className="text-white">Transform</span>
              <br />
              <span className="text-brand-orange">Your Body,</span>
              <br />
              <span className="text-white">Your Life</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              World-class equipment, expert trainers, and a community that pushes you beyond your limits. Your fitness journey starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
              >
                <a
                  href="https://portal.okfit.in/members/add/form/get/96b095f5f5467e5e8465dceac5266b74b463d5237f6936814feaf443609bfad7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a href="/membership">View Plans</a>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-10 pt-8 border-t border-white/10">
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

          {/* Right: Owner Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Decorative ring behind the image */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border-2 border-brand-orange/20 rotate-3" />
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border-2 border-brand-orange/10 -rotate-2" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/hero-gym-athlete.jpeg"
                  alt="Ramadhan J Mdula - Founder of Planet Fitness Tanzania"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                {/* Orange gradient accent at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-gray/90 to-transparent" />

                {/* Name label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-base sm:text-lg font-serif">Ramadhan J Mdula</p>
                  <p className="text-brand-orange text-sm font-medium">Founder & CEO</p>
                </div>
              </div>

              {/* Decorative accent dot */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-orange rounded-full hidden lg:block" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-brand-orange/50 rounded-full hidden lg:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
