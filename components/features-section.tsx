import { Dumbbell, Apple, Brain, Heart } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Dumbbell,
      title: "Physical Exercises",
      description: "Fitness is the condition of being physically fit and healthy and involves attributes.",
    },
    {
      icon: Apple,
      title: "Healthy Diet",
      description:
        "Physically fit and healthy and involves attributes that include, but are not limited to mental acuity, cardiorespiratory.",
    },
    {
      icon: Brain,
      title: "Mental Benefits",
      description:
        "Healthy and involves attributes that include, but are not limited to mental acuity, cardiorespiratory endurance.",
    },
    {
      icon: Heart,
      title: "Prolongs Your Life",
      description: "Endurance, muscular strength, muscular endurance, body composition, and flexibility.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-brand-navy relative overflow-hidden">
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L1440,32L1440,120L0,120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">FEATURES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif">
            Improve Your
            <br />
            Health
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white space-y-6">
              <div className="w-16 h-16 bg-brand-orange rounded-2xl mx-auto flex items-center justify-center">
                <feature.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold font-serif">{feature.title}</h3>

              <p className="text-sm opacity-90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
