import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Main large circle - Woman on treadmill */}
              <div className="col-span-2 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-brand-orange">
                  <img
                    src="/images/about-woman-treadmill.png"
                    alt="Happy woman training on treadmill"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Two smaller circles - Men training */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-brand-orange">
                <img
                  src="/images/about-man-row.png"
                  alt="Man doing dumbbell row exercise"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-brand-orange">
                <img
                  src="/images/about-man-curls.png"
                  alt="Man doing bicep curls"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-brand-orange text-sm font-medium tracking-wider uppercase">ABOUT PLANET FITNESS</p>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight">
                Your Fitness
                <br />
                Destination
              </h2>
            </div>

            <p className="text-lg opacity-90 leading-relaxed">
              At Planet Fitness, we provide state-of-the-art equipment, professional training programs, and a welcoming
              environment where every member can achieve their fitness goals with confidence.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 rounded-full btn-hover bg-transparent"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
