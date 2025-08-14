import { Button } from "@/components/ui/button"
import { Users, Dumbbell, ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/about-woman-treadmill.png"
                  alt="People working out"
                  className="w-full h-48 object-contain rounded-2xl"
                />
                <img
                  src="/images/about-man-row.png"
                  alt="Gym equipment"
                  className="w-full h-32 object-contain rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/about-man-curls.png"
                  alt="Personal training"
                  className="w-full h-32 object-contain rounded-2xl"
                />
                <img
                  src="/images/about-cardio-woman.png"
                  alt="Woman doing cardio exercise"
                  className="w-full h-48 object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Floating logo */}
            <div className="absolute -bottom-4 -left-4 bg-brand-orange p-6 rounded-2xl shadow-xl">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-brand-orange" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-brand-orange text-sm font-medium tracking-wider uppercase">ABOUT US</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight text-brand-gray">
                Get A Best Shape Of
                <br />
                Your Body
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Planet Fitness, we provide state-of-the-art equipment, professional training programs, and a welcoming
              environment where every member can achieve their fitness goals with confidence and support.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-brand-orange" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-brand-gray mb-2">1684</h3>
                <p className="text-gray-600">Trained People</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center">
                    <Dumbbell className="w-8 h-8 text-brand-orange" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-brand-gray mb-2">876</h3>
                <p className="text-gray-600">Modern Equipment</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full group"
            >
              Learn More
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
