import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Planet Fitness Tanzania",
  description:
    "Learn about Planet Fitness Tanzania's mission to provide world-class fitness equipment, expert trainers, and a supportive community in Dar es Salaam.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <AboutSection />

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray">Ready to Transform Your Life?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join thousands of members who have already started their fitness journey with us. Our state-of-the-art
                  facility, expert trainers, and supportive community are here to help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-700">Professional personal training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-700">Modern equipment & facilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-700">Flexible membership options</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://okfit.short.gy/pkaI38" target="_blank" rel="noopener noreferrer">
                      Start Your Journey Today
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/images/about-hero-athlete.jpeg"
                    alt="Athlete training with stability ball"
                    className="w-full h-[500px] object-cover object-center rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-orange/20 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-brand-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get in touch with our team to learn more about our facilities, memberships, and how we can help you achieve your fitness goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
