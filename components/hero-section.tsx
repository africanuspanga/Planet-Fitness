"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-brand-gray overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,165,0,0.06),transparent_60%)]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:py-0 lg:min-h-[100svh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">
                {"Dar es Salaam's Premier Gym"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold font-serif leading-[1.1] mb-6 text-balance">
              <span className="text-white">Transform</span>
              <br />
              <span className="text-brand-orange">Your Body,</span>
              <br />
              <span className="text-white">Your Life</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              World-class equipment, expert trainers, and a community that pushes you beyond your limits. Your fitness journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg min-h-[48px] touch-manipulation"
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

            {/* Stats */}
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

          {/* Owner Image - simple clean container */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <img
                src="/images/hero-gym-athlete.jpeg"
                alt="Founder of Planet Fitness Tanzania"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
