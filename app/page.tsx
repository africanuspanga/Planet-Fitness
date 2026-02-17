import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ClassesSection from "@/components/classes-section"
import FeaturesSection from "@/components/features-section"
import PricingHighlightSection from "@/components/pricing-highlight-section"
import TestimonialsSection from "@/components/testimonials-section"
import FacilitiesSection from "@/components/facilities-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planet Fitness Tanzania - Transform Your Life | Premium Gym & Fitness Center in Dar es Salaam",
  description:
    "Join Planet Fitness Tanzania for world-class equipment, expert trainers, and a supportive community. Transform your life with our premium fitness facilities at Gymkhana Ground, Dar es Salaam.",
  keywords:
    "Planet Fitness Tanzania, gym Dar es Salaam, fitness center, personal training, workout, health club, exercise equipment, group classes, spinning, yoga, crossfit",
  openGraph: {
    title: "Planet Fitness Tanzania - Transform Your Life",
    description:
      "Premium fitness center with world-class equipment, expert trainers, and group fitness classes in Dar es Salaam, Tanzania.",
    url: "https://planetfitness.co.tz",
    images: ["/images/new-logo.png"],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <FeaturesSection />
      <PricingHighlightSection />
      <TestimonialsSection />
      <FacilitiesSection />
    </main>
  )
}
