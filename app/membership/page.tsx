import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Membership Plans - Planet Fitness Tanzania",
  description:
    "Choose from our flexible membership plans including 6-month, 1-year, and personal training options at Planet Fitness Tanzania.",
}

export default function MembershipPage() {
  const plans = [
    {
      title: "Day Pass",
      subtitle: "Perfect for Visitors",
      description: "Try our facilities for a day and experience what we offer.",
      price: "29,500/= TZS",
      usdPrice: "$12.00",
      image: "/images/pricing-1.png",
      popular: false,
      features: ["Full gym access", "Locker room facilities", "Basic equipment orientation"],
    },
    {
      title: "1 Month PF - Bronze",
      subtitle: "Most Popular",
      description: "Get started with our bronze membership plan.",
      price: "218,300/= TZS",
      usdPrice: "$85.00",
      image: "/images/pricing-2.png",
      popular: true,
      features: ["Full gym access", "Group fitness classes", "Locker room facilities", "Basic nutrition guidance"],
    },
    {
      title: "3 Month PF - Silver",
      subtitle: "Best Value",
      description: "Commit to your fitness journey with our silver plan.",
      price: "619,500/= TZS",
      usdPrice: "$240.00",
      image: "/images/pricing-7months.png",
      popular: false,
      features: ["All Bronze benefits", "Personal training consultation", "Nutrition plan", "Progress tracking"],
    },
    {
      title: "6 Month PF - Gold",
      subtitle: "Long-term Commitment",
      description: "Achieve lasting results with our gold membership.",
      price: "1,132,800/= TZS",
      usdPrice: "$445.00",
      image: "/images/pricing-6month-new.png",
      popular: false,
      features: [
        "All Silver benefits",
        "2 personal training sessions",
        "Advanced nutrition coaching",
        "Priority class booking",
      ],
    },
    {
      title: "1 Year PF - Platinum",
      subtitle: "Ultimate Plan",
      description: "Our premium annual membership with all benefits.",
      price: "2,124,800/= TZS",
      usdPrice: "$835.00",
      image: "/images/pricing-1year-new.png",
      popular: false,
      features: [
        "All Gold benefits",
        "Monthly personal training",
        "VIP locker access",
        "Guest passes",
        "Supplement discounts",
      ],
    },
    {
      title: "Personal Training",
      subtitle: "One-on-One",
      description: "Individual training session with expert guidance.",
      price: "29,500/= TZS",
      usdPrice: "$12.00",
      image: "/images/pricing-personal-new.png",
      popular: false,
      features: ["1-on-1 training session", "Customized workout plan", "Form correction", "Goal-specific training"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Choose Your
              <span className="text-brand-orange"> Fitness Journey</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Select the perfect membership plan that fits your lifestyle and fitness goals at Planet Fitness Tanzania
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">MEMBERSHIP PLANS</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif">
                Planet Fitness Club
                <br />
                Rate Card 2025
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    plan.popular ? "border-brand-orange bg-gradient-to-br from-orange-50 to-white" : "border-gray-200"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="w-full h-40 sm:h-48 rounded-2xl mb-6 overflow-hidden relative">
                    <Image src={plan.image || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand-gray">{plan.title}</h3>
                    <p className="text-brand-orange font-medium">{plan.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{plan.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-brand-orange flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 sm:pt-6">
                      <div className="bg-gradient-to-r from-brand-orange to-orange-500 text-white text-center rounded-2xl py-3 sm:py-4 px-4 sm:px-6 shadow-lg mb-4">
                        <div className="text-lg sm:text-xl font-bold break-words">{plan.price}</div>
                        <div className="text-sm opacity-90">{plan.usdPrice}</div>
                      </div>

                      <Button asChild className="w-full bg-brand-gray hover:bg-brand-gray/90 text-white">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional pricing info */}
            <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-gray mb-4">Special Offers & Discounts</h3>
              <p className="text-gray-600 mb-4">Exchange Rate: 1 USD = 2,550 TZS | All prices are VAT inclusive</p>
              <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-orange mb-2">Senior Discount</h4>
                  <p>Age 60+: 177,000 TZS / $70.00 monthly</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-orange mb-2">Student Discount</h4>
                  <p>Age 18-25: 177,000 TZS / $70.00 monthly</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-orange mb-2">Diet & Workout Plan</h4>
                  <p>Personalized plan: 118,000 TZS / $45.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-orange text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of satisfied members who have transformed their lives at Planet Fitness Tanzania
            </p>
            <Button asChild size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
              <Link href="/contact">Book Your Free Trial Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
