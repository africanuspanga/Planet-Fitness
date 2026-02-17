import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, Trophy, Dumbbell, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Membership Plans - Planet Fitness Tanzania",
  description:
    "Choose from our flexible membership plans including day pass, monthly, quarterly, and annual options at Planet Fitness Tanzania.",
}

const plans = [
  {
    title: "One Free Day Pass",
    subtitle: "Try Us Out",
    description: "Experience our world-class facilities completely free for one day.",
    price: "FREE",
    usdPrice: "",
    image: "/images/pricing-1.png",
    popular: false,
    icon: Clock,
    tier: "free",
    features: ["Full gym access for 1 day", "Locker room facilities", "Basic equipment orientation"],
  },
  {
    title: "Day Pass",
    subtitle: "Drop In Anytime",
    description: "Perfect for visitors or those who want a single-day workout session.",
    price: "27,500",
    usdPrice: "$11",
    image: "/images/pricing-1.png",
    popular: false,
    icon: Zap,
    tier: "day",
    features: ["Full gym access for 1 day", "Locker room facilities", "Basic equipment orientation"],
  },
  {
    title: "1 Month - Bronze",
    subtitle: "Get Started",
    description: "Kickstart your fitness journey with our monthly membership.",
    price: "218,300",
    usdPrice: "$85",
    image: "/images/pricing-2.png",
    popular: true,
    icon: Star,
    tier: "bronze",
    features: ["Full gym access", "Group fitness classes", "Locker room facilities", "Basic nutrition guidance"],
  },
  {
    title: "3 Months - Silver",
    subtitle: "Best Value",
    description: "Commit to your goals and save with the quarterly plan.",
    price: "619,500",
    usdPrice: "$240",
    image: "/images/pricing-7months.png",
    popular: false,
    icon: Trophy,
    tier: "silver",
    features: ["All Bronze benefits", "Personal training consultation", "Nutrition plan", "Progress tracking"],
  },
  {
    title: "6 Months - Gold",
    subtitle: "Serious Results",
    description: "For those ready to make a lasting commitment to fitness.",
    price: "1,132,800",
    usdPrice: "$445",
    image: "/images/pricing-6month-new.png",
    popular: false,
    icon: Crown,
    tier: "gold",
    features: [
      "All Silver benefits",
      "2 personal training sessions",
      "Advanced nutrition coaching",
      "Priority class booking",
    ],
  },
  {
    title: "1 Year - Platinum",
    subtitle: "Ultimate Plan",
    description: "Our premium annual membership with every benefit included.",
    price: "2,124,800",
    usdPrice: "$835",
    image: "/images/pricing-1year-new.png",
    popular: false,
    icon: Crown,
    tier: "platinum",
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
    description: "Individual session with an expert trainer tailored to your goals.",
    price: "29,500",
    usdPrice: "$12",
    image: "/images/pricing-personal-new.png",
    popular: false,
    icon: Dumbbell,
    tier: "pt",
    features: ["1-on-1 training session", "Customized workout plan", "Form correction", "Goal-specific training"],
  },
]

function getTierStyle(tier: string, popular: boolean) {
  if (popular)
    return {
      card: "border-brand-orange ring-2 ring-brand-orange/20 bg-[#fffaf6]",
      badge: "bg-brand-orange text-white",
      priceBox: "bg-brand-orange text-white",
      button: "bg-brand-orange hover:bg-brand-orange/90 text-white",
    }
  if (tier === "free")
    return {
      card: "border-gray-200 bg-white",
      badge: "",
      priceBox: "bg-gray-900 text-white",
      button: "bg-gray-900 hover:bg-gray-800 text-white",
    }
  if (tier === "platinum" || tier === "gold")
    return {
      card: "border-gray-200 bg-white",
      badge: "",
      priceBox: "bg-brand-gray text-white",
      button: "bg-brand-gray hover:bg-brand-gray/90 text-white",
    }
  return {
    card: "border-gray-200 bg-white",
    badge: "",
    priceBox: "bg-brand-gray text-white",
    button: "bg-brand-gray hover:bg-brand-gray/90 text-white",
  }
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pricing-2.png')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">
              Membership Plans
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 text-balance">
              Find the Plan That
              <span className="text-brand-orange"> Fits You</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From a free trial to our all-inclusive Platinum membership, we have the right option for every fitness journey.
            </p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">
                Rate Card 2025
              </h2>
              <p className="text-gray-500 text-sm">Exchange Rate: 1 USD = 2,550 TZS &middot; All prices VAT inclusive</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {plans.map((plan, index) => {
                const style = getTierStyle(plan.tier, plan.popular)
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl border p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md ${style.card}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className={`${style.badge} px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}>
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-4 mt-1">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                        <plan.icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-serif text-brand-gray leading-tight">{plan.title}</h3>
                        <p className="text-xs text-brand-orange font-medium">{plan.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{plan.description}</p>

                    {/* Price */}
                    <div className={`rounded-xl py-3 px-4 text-center mb-4 ${style.priceBox}`}>
                      {plan.price === "FREE" ? (
                        <span className="text-2xl font-bold">FREE</span>
                      ) : (
                        <>
                          <span className="text-2xl font-bold">{plan.price}</span>
                          <span className="text-sm font-medium opacity-80"> TZS</span>
                          {plan.usdPrice && (
                            <span className="block text-xs opacity-70 mt-0.5">{plan.usdPrice} USD</span>
                          )}
                        </>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="flex-1 space-y-2 mb-5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button asChild className={`w-full rounded-xl font-semibold ${style.button}`}>
                      <a href="https://okfit.short.gy/pkaI38" target="_blank" rel="noopener noreferrer">
                        {plan.price === "FREE" ? "Claim Free Pass" : "Get Started"}
                      </a>
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Discounts */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-brand-gray px-6 py-4">
                <h3 className="text-lg font-bold text-white font-serif">Special Offers & Discounts</h3>
              </div>
              <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-6 text-center">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-brand-orange font-bold text-sm">60+</span>
                  </div>
                  <h4 className="font-semibold text-brand-gray mb-1">Senior Discount</h4>
                  <p className="text-sm text-gray-500">177,000 TZS / $70 monthly</p>
                </div>
                <div className="p-6 text-center">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-brand-orange font-bold text-xs">18-25</span>
                  </div>
                  <h4 className="font-semibold text-brand-gray mb-1">Student Discount</h4>
                  <p className="text-sm text-gray-500">177,000 TZS / $70 monthly</p>
                </div>
                <div className="p-6 text-center">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Dumbbell className="w-4 h-4 text-brand-orange" />
                  </div>
                  <h4 className="font-semibold text-brand-gray mb-1">Diet & Workout Plan</h4>
                  <p className="text-sm text-gray-500">118,000 TZS / $45</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand-orange text-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-balance">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of members who have transformed their lives at Planet Fitness Tanzania.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold"
            >
              <a href="https://okfit.short.gy/pkaI38" target="_blank" rel="noopener noreferrer">
                Book Your Free Trial Today
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
