import Navigation from "@/components/navigation"
import Image from "next/image"
import { Droplets, Zap, Heart, Shield, Sparkles, Apple } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fuel Station - Post-Workout Nutrition | Planet Fitness Tanzania",
  description:
    "Refuel your body at Planet Fitness Fuel Station. Fresh juices, protein shakes, supplements, and healthy snacks for optimal post-workout recovery in Dar es Salaam.",
  keywords:
    "Fuel Station Planet Fitness, protein shakes Tanzania, post-workout nutrition, fresh juices Dar es Salaam, gym supplements, healthy snacks",
  openGraph: {
    title: "Fuel Station - Planet Fitness Tanzania",
    description:
      "Premium post-workout nutrition with fresh juices, protein shakes, and supplements at Planet Fitness Fuel Station.",
    images: ["/images/fuel-station-logo.png"],
  },
}

export default function FuelStationPage() {
  const supplements = [
    {
      name: "Whey Protein",
      description: "Premium quality whey protein for muscle building and recovery",
      benefits: ["Muscle Growth", "Fast Absorption", "Post-Workout Recovery"],
    },
    {
      name: "BCAA",
      description: "Branched-chain amino acids for enhanced performance",
      benefits: ["Muscle Preservation", "Reduced Fatigue", "Better Endurance"],
    },
    {
      name: "Hydro Whey",
      description: "Hydrolyzed whey protein for rapid absorption",
      benefits: ["Quick Recovery", "Easy Digestion", "Lean Muscle Support"],
    },
  ]

  const fruits = [
    {
      name: "Bananas",
      image: "/images/bananas.jpeg",
      benefits: "High in carbohydrates for energy and potassium for muscle function",
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
    },
    {
      name: "Berries",
      image: "/images/berries.jpeg",
      benefits: "Packed with antioxidants that reduce muscle damage and inflammation",
      icon: <Shield className="w-6 h-6 text-brand-orange" />,
    },
    {
      name: "Apples",
      image: "/images/apple.jpeg",
      benefits: "Provide sustained energy with natural sugars and fiber",
      icon: <Apple className="w-6 h-6 text-brand-orange" />,
    },
    {
      name: "Watermelon",
      image: "/images/watermelon.jpeg",
      benefits: "Hydrating with citrulline that improves blood flow and reduces soreness",
      icon: <Droplets className="w-6 h-6 text-brand-orange" />,
    },
    {
      name: "Pineapple",
      image: "/images/pineapple.jpeg",
      benefits: "Contains bromelain enzyme that aids digestion and reduces inflammation",
      icon: <Sparkles className="w-6 h-6 text-brand-orange" />,
    },
    {
      name: "Oranges",
      image: "/images/oranges.jpeg",
      benefits: "High in vitamin C, supporting immune system and recovery",
      icon: <Heart className="w-6 h-6 text-brand-orange" />,
    },
  ]

  const beverages = [
    {
      name: "Fresh Fruit Juices",
      description: "Cold-pressed juices made from organic fruits",
      image: "/images/colorful-juices.jpeg",
    },
    {
      name: "Protein Shakes",
      description: "Delicious protein shakes in various flavors",
      image: "/images/protein-shakes.jpeg",
    },
    {
      name: "Custom Smoothies",
      description: "Personalized smoothie blends with your favorite fruits",
      image: "/images/custom-smoothies.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-orange to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/fuel-station-logo.png"
                alt="Fuel Station Logo"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Fuel Your Recovery</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Refresh, get strength back, and boost your health after a long workout with our premium selection of
              juices, protein shakes, and supplements.
            </p>
          </div>
        </div>
      </section>

      {/* Fresh Fruits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">Nature's Power Foods</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the incredible benefits of fresh fruits for your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fruits.map((fruit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 relative h-48">
                  <Image src={fruit.image || "/placeholder.svg"} alt={fruit.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {fruit.icon}
                    <h3 className="text-xl font-bold text-brand-gray">{fruit.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{fruit.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beverages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">Premium Beverages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quench your thirst and fuel your recovery with our signature drinks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beverages.map((beverage, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-20 relative h-80">
                  <Image
                    src={beverage.image || "/placeholder.svg"}
                    alt={beverage.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{beverage.name}</h3>
                  <p className="text-white/90">{beverage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplements Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Supplements</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional-grade supplements to maximize your fitness results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/supplements.jpeg"
                alt="Premium Supplements"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-8">
              {supplements.map((supplement, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{supplement.name}</h3>
                  <p className="text-gray-300 mb-4">{supplement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {supplement.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Fuel Your Fitness Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Visit our Fuel Station today and discover the perfect post-workout nutrition for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-brand-orange px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Visit Fuel Station
            </a>
            <a
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-brand-orange transition-colors duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
