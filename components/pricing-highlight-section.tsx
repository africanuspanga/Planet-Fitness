import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star, Trophy, Crown } from "lucide-react"
import Link from "next/link"

const highlightPlans = [
  {
    title: "1 Month",
    tier: "Bronze",
    price: "218,300",
    
    icon: Star,
    features: ["Full gym access", "Group fitness classes", "Locker room facilities"],
    accent: false,
  },
  {
    title: "3 Months",
    tier: "Silver",
    price: "619,500",
    
    icon: Trophy,
    features: ["All Bronze benefits", "Personal training consultation", "Nutrition plan"],
    accent: true,
  },
  {
    title: "6 Months",
    tier: "Gold",
    price: "1,132,800",
    
    icon: Crown,
    features: ["All Silver benefits", "2 personal training sessions", "Priority class booking"],
    accent: false,
  },
]

export default function PricingHighlightSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Choose the membership that fits your goals. All plans include full access to our world-class facilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlightPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.accent
                  ? "border-brand-orange ring-2 ring-brand-orange/20 bg-white shadow-lg"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              {plan.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                    Best Value
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-2 mt-1">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.accent ? "bg-brand-orange text-white" : "bg-brand-orange/10 text-brand-orange"
                  }`}
                >
                  <plan.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-brand-gray">{plan.title}</h3>
                  <p className="text-xs text-brand-orange font-medium">{plan.tier}</p>
                </div>
              </div>

              <div className="my-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-brand-gray">{plan.price}</span>
                  <span className="text-sm text-gray-400 font-medium">TZS</span>
                </div>
                
              </div>

              <ul className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-xl font-semibold ${
                  plan.accent
                    ? "bg-brand-orange hover:bg-brand-orange/90 text-white"
                    : "bg-brand-gray hover:bg-brand-gray/90 text-white"
                }`}
              >
                <a href="https://portal.okfit.in/members/add/form/get/96b095f5f5467e5e8465dceac5266b74b463d5237f6936814feaf443609bfad7" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline underline-offset-4 transition-all group"
          >
            View all membership plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
