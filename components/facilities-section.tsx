import { Dumbbell, Heart, Zap, Users } from "lucide-react"

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Cardio Zone",
      description: "State-of-the-art Technogym treadmills and cardio equipment for optimal cardiovascular training",
      image: "/images/cardio-equipment.png",
      icon: Heart,
    },
    {
      title: "Spinning Studio",
      description: "Professional Technogym spinning bikes for high-intensity group cycling classes",
      image: "/images/spinning-bikes.jpeg",
      icon: Zap,
    },
    {
      title: "Strength Training",
      description: "Complete range of free weights, power racks, and strength equipment for all fitness levels",
      image: "/images/strength-equipment.png",
      icon: Dumbbell,
    },
    {
      title: "Functional Training",
      description: "Dedicated space with battle ropes, functional trainers, and specialized equipment",
      image: "/images/functional-training.png",
      icon: Users,
    },
  ]

  return (
    <section id="facilities" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">OUR FACILITIES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif mb-6">
            World-Class Equipment
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We have world-class training equipment for all your fitness needs. From cardio to strength training, our
            state-of-the-art facilities provide everything you need to achieve your fitness goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl bg-brand-navy">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif">{facility.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Section */}
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-center text-white">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">FOUNDER</p>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-6">Meet the Founder</h3>

          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 overflow-hidden">
            <img src="/images/founder.jpeg" alt="Ramadhan J Mdula - Founder" className="w-full h-full object-cover" />
          </div>

          <h4 className="text-lg sm:text-xl font-bold mb-2">Ramadhan J Mdula</h4>

          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The founder is an experienced fitness expert whose main goal is to have a healthy community and build a
            better and happy nation.
          </p>
        </div>
      </div>
    </section>
  )
}
