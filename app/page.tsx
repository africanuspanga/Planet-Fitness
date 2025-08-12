import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import FacilitiesSection from "@/components/facilities-section"
import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planet Fitness Tanzania - Transform Your Life | Premium Gym & Fitness Center",
  description:
    "Join Planet Fitness Tanzania for world-class equipment, expert trainers, and a supportive community. Transform your life with our premium fitness facilities in Dar es Salaam.",
  keywords:
    "Planet Fitness Tanzania, gym Dar es Salaam, fitness center, personal training, workout, health club, exercise equipment",
  openGraph: {
    title: "Planet Fitness Tanzania - Transform Your Life",
    description: "Premium fitness center with world-class equipment and expert guidance in Dar es Salaam, Tanzania.",
    images: ["/images/logo.png"],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FacilitiesSection />
      <ContactSection />
    </main>
  )
}
