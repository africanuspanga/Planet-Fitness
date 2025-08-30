import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-brand-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-brand-orange/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col items-center text-center space-y-6 lg:hidden">
          <div className="text-white space-y-4 max-w-4xl">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif leading-tight text-brand-orange">
                WELCOME TO PLANET FITNESS
              </h1>
              <p className="text-base sm:text-lg opacity-90 max-w-xl leading-relaxed mx-auto italic">
                All progress takes place outside the comfort zone
              </p>
              <p className="text-sm sm:text-base opacity-80 max-w-2xl leading-relaxed mx-auto mt-2">
                Push your limits, embrace the challenge, and discover the strength you never knew you had.
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
              >
                <a href="https://wa.me/255684433363" target="_blank" rel="noopener noreferrer">
                  BOOK NOW
                </a>
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="relative z-10">
              <div className="w-full h-64 sm:h-72 relative">
                <img
                  src="/images/hero-gym-athlete.jpeg"
                  alt="Strong athlete training in gym"
                  className="w-full h-full object-cover object-center rounded-lg"
                />

                {/* Fitness Stats Overlays */}
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
                    <span className="text-brand-orange font-bold text-sm">96 BPM</span>
                  </div>
                  <p className="text-xs text-gray-600">Training</p>
                </div>

                <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                  <div className="text-center">
                    <p className="text-gray-600 text-xs">Calories</p>
                    <p className="text-lg font-bold text-brand-gray">1020</p>
                    <div className="flex space-x-0.5 mt-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-0.5 rounded-full ${i < 4 ? "bg-brand-orange h-3" : "bg-gray-300 h-2"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="text-white space-y-8">
            <div className="space-y-3">
              <h1 className="text-6xl xl:text-7xl font-bold font-serif leading-tight text-brand-orange">
                WELCOME TO PLANET FITNESS
              </h1>
              <p className="text-xl opacity-90 leading-relaxed italic">
                All progress takes place outside the comfort zone
              </p>
              <p className="text-lg opacity-80 leading-relaxed mt-3">
                Push your limits, embrace the challenge, and discover the strength you never knew you had.
              </p>
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <a href="https://wa.me/255684433363" target="_blank" rel="noopener noreferrer">
                  BOOK NOW
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-[600px] relative">
                <img
                  src="/images/hero-gym-athlete.jpeg"
                  alt="Strong athlete training in gym"
                  className="w-full h-full object-cover object-center rounded-lg"
                />

                {/* Fitness Stats Overlays */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-brand-orange rounded-full animate-pulse"></div>
                    <span className="text-brand-orange font-bold text-lg">96 BPM</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">This Minute Training</p>
                </div>

                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Calories Burn</p>
                    <p className="text-2xl font-bold text-brand-gray">1020 Cal</p>
                    <div className="flex space-x-1 mt-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full ${i < 6 ? "bg-brand-orange h-6" : "bg-gray-300 h-3"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
