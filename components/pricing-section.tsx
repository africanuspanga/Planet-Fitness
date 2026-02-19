import Image from "next/image"

export default function PricingSection() {
  const plans = [
    {
      title: "Day Pass",
      subtitle: "Perfect for Visitors",
      description: "Try our facilities for a day and experience what we offer.",
      price: "29,500/= TZS",
      image: "/images/pricing-1.png",
      popular: false,
    },
    {
      title: "1 Month PF - Bronze",
      subtitle: "Most Popular",
      description: "Get started with our bronze membership plan.",
      price: "218,300/= TZS",
      image: "/images/pricing-2.png",
      popular: true,
    },
    {
      title: "3 Month PF - Silver",
      subtitle: "Best Value",
      description: "Commit to your fitness journey with our silver plan.",
      price: "619,500/= TZS",
      image: "/images/pricing-7months.png",
      popular: false,
    },
    {
      title: "6 Month PF - Gold",
      subtitle: "Long-term Commitment",
      description: "Achieve lasting results with our gold membership.",
      price: "1,132,800/= TZS",
      image: "/images/pricing-6month-new.png",
      popular: false,
    },
    {
      title: "1 Year PF - Platinum",
      subtitle: "Ultimate Plan",
      description: "Our premium annual membership with all benefits.",
      price: "2,124,800/= TZS",
      image: "/images/pricing-1year-new.png",
      popular: false,
    },
    {
      title: "Personal Training",
      subtitle: "One-on-One",
      description: "Individual training session with expert guidance.",
      price: "29,500/= TZS",
      image: "/images/pricing-personal-new.png",
      popular: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">PRICING</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif">
            Planet Fitness Club
            <br />
            Rate Card 2026
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-brand-navy rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                plan.popular ? "ring-2 ring-brand-orange" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}

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
                    <div className="bg-gradient-to-r from-brand-orange to-orange-500 text-white text-center rounded-2xl py-3 sm:py-4 px-4 sm:px-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-2xl blur-sm"></div>
                      <div className="relative z-10">
                        <div className="text-lg sm:text-xl font-bold break-words">{plan.price}</div>
                        
                      </div>
                    </div>
                    {/* Floating shadow effect */}
                    <div className="absolute inset-0 bg-brand-orange/30 rounded-2xl blur-xl transform translate-y-2 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional pricing info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All prices are in TZS and VAT inclusive</p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>Senior Discount (&gt;60yrs): 177,000 TZS monthly</p>
            <p>Diet & Workout Plan: 118,000 TZS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
