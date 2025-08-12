import Image from "next/image"

export default function PricingSection() {
  const plans = [
    {
      title: "2 Months Offer",
      subtitle: "Special Offer",
      description: "Our special offer to kickstart your journey.",
      price: "365,800/= TZS",
      image: "/images/pricing-1.png",
    },
    {
      title: "3 Months Offer",
      subtitle: "Next Step",
      description: "Take the next step towards a healthier you.",
      price: "531,000/= TZS",
      image: "/images/pricing-2.png",
    },
    {
      title: "7 Months Offer",
      subtitle: "Long-term Commitment",
      description: "Commit to a long-term lifestyle change.",
      price: "1,156,400/= TZS",
      image: "/images/pricing-7months.png",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">PRICING</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif">
            Long-term Health
            <br />
            Benefits
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-brand-navy rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-orange/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>

              <div className="w-full h-40 sm:h-48 rounded-2xl mb-6 overflow-hidden relative">
                <Image src={plan.image || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif">{plan.title}</h3>
                <p className="text-brand-orange font-medium">{plan.subtitle}</p>
                <p className="text-sm opacity-90 leading-relaxed">{plan.description}</p>

                <div className="pt-4 sm:pt-6">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-brand-orange to-orange-500 text-white text-lg sm:text-2xl font-bold text-center rounded-2xl py-3 sm:py-4 px-4 sm:px-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-2xl blur-sm"></div>
                      <div className="relative z-10 break-words">{plan.price}</div>
                    </div>
                    {/* Floating shadow effect */}
                    <div className="absolute inset-0 bg-brand-orange/30 rounded-2xl blur-xl transform translate-y-2 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
