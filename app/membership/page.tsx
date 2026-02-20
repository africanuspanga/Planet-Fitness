import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, Trophy, Dumbbell, Clock } from "lucide-react"

const REGISTRATION_URL =
  "https://portal.okfit.in/members/add/form/get/96b095f5f5467e5e8465dceac5266b74b463d5237f6936814feaf443609bfad7"

export const metadata: Metadata = {
  title: "Membership Plans & Pricing - Planet Fitness Tanzania | Gym in Dar es Salaam",
  description:
    "Explore flexible membership plans at Planet Fitness Tanzania. From a free day pass to annual platinum membership. Join Dar es Salaam's premier fitness center today.",
  keywords:
    "Planet Fitness membership, gym pricing Tanzania, fitness membership Dar es Salaam, day pass gym, monthly gym membership",
  openGraph: {
    title: "Membership Plans - Planet Fitness Tanzania",
    description:
      "Choose from flexible membership plans at Planet Fitness Tanzania. Day pass, monthly, quarterly, and annual options available.",
    url: "https://planetfitness.co.tz/membership",
    images: ["/images/new-logo.png"],
  },
}

const plans = [
  {
    title: "One Free Day Pass",
    subtitle: "Try Us Out",
    description: "Experience our world-class facilities completely free for one day.",
    price: "FREE",
    image: "/images/pricing-1.png",
    popular: false,
    icon: Clock,
    tier: "free",
    features: ["Full gym access for 1 day", "Locker room facilities", "Basic equipment orientation"],
  },
  {
    title: "Day Pass",
    subtitle: "Drop In Anytime",
    description: "Perfect for visitors or those who want a single-day workout.",
    price: "29,500",
    image: "/images/day-pass-girl.jpg",
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
      card: "border-brand-orange ring-2 ring-brand-orange/20",
      badge: "bg-brand-orange text-white",
      button: "bg-brand-orange hover:bg-brand-orange/90 text-white",
    }
  return {
    card: "border-gray-200",
    badge: "",
    button: "bg-brand-gray hover:bg-brand-gray/90 text-white",
  }
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        {/* Hero */}
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
              From a free trial to our all-inclusive Platinum membership, we have the right option for every fitness
              journey.
            </p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">Rate Card 2026</h2>
              <p className="text-gray-500 text-sm">All prices are in TZS and VAT inclusive</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {plans.map((plan, index) => {
                const style = getTierStyle(plan.tier, plan.popular)
                return (
                  <div
                    key={index}
                    className={`relative rounded-2xl border bg-white overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md ${style.card}`}
                  >
                    {plan.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <span
                          className={`${style.badge} px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}
                        >
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-40 sm:h-44 overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-orange/90 flex items-center justify-center">
                          <plan.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium">{plan.subtitle}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold font-serif text-brand-gray leading-tight mb-1">{plan.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{plan.description}</p>

                      {/* Price */}
                      <div className="bg-gray-50 rounded-xl py-3 px-4 text-center mb-4">
                        {plan.price === "FREE" ? (
                          <span className="text-2xl font-bold text-brand-orange">FREE</span>
                        ) : (
                          <>
                            <span className="text-2xl font-bold text-brand-gray">{plan.price}</span>
                            <span className="text-sm font-medium text-gray-400"> TZS</span>
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
                        <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                          {plan.price === "FREE" ? "Claim Free Pass" : "Get Started"}
                        </a>
                      </Button>
                    </div>
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
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="p-6 text-center">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-brand-orange font-bold text-sm">60+</span>
                  </div>
                  <h4 className="font-semibold text-brand-gray mb-1">Senior Discount</h4>
                  <p className="text-sm text-gray-500">177,000 TZS monthly</p>
                </div>
                <div className="p-6 text-center">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Dumbbell className="w-4 h-4 text-brand-orange" />
                  </div>
                  <h4 className="font-semibold text-brand-gray mb-1">Diet & Workout Plan</h4>
                  <p className="text-sm text-gray-500">118,000 TZS</p>
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
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                Book Your Free Trial Today
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
