import { Button } from "@/components/ui/button"
import { Users, Heart, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - Expert Fitness Professionals | Planet Fitness Tanzania",
  description:
    "Meet the dedicated team of certified trainers and fitness professionals at Planet Fitness Tanzania. Expert guidance and personal support for your fitness journey in Dar es Salaam.",
  keywords:
    "Planet Fitness team, personal trainers Tanzania, fitness professionals Dar es Salaam, certified trainers, gym staff",
  openGraph: {
    title: "Our Team - Planet Fitness Tanzania",
    description: "Meet our dedicated team of fitness professionals ready to support your fitness journey.",
    images: ["/images/logo.png"],
  },
}

export default function TeamPage() {
  const teamMembers = [
    { id: 1, image: "/images/team-member-1.jpeg" },
    { id: 2, image: "/images/team-member-2.jpeg" },
    { id: 3, image: "/images/team-member-3.jpeg" },
    { id: 4, image: "/images/team-member-4.jpeg" },
    { id: 5, image: "/images/team-member-5.jpeg" },
    { id: 6, image: "/images/team-member-6.jpeg" },
    { id: 7, image: "/images/team-member-7.jpeg" },
    { id: 8, image: "/images/team-member-8.jpeg" },
    { id: 9, image: "/images/team-member-9.jpeg" },
    { id: 10, image: "/images/team-member-10.jpeg" },
    { id: 11, image: "/images/team-member-11.jpeg" },
    { id: 12, image: "/images/team-member-12.jpeg" },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-brand-orange py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold font-serif">Meet Our Team</h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Our dedicated team of fitness professionals is here to support you every step of your journey
            </p>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-gray">Expert Trainers</h3>
              <p className="text-gray-600">Certified professionals ready to guide you</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-gray">Personal Care</h3>
              <p className="text-gray-600">Individual attention for your unique goals</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-gray">Goal Focused</h3>
              <p className="text-gray-600">Customized programs for your success</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-gray">Proven Results</h3>
              <p className="text-gray-600">Track record of member transformations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white mb-6">Your Support System</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our team of fitness professionals, nutritionists, and wellness experts are here to ensure you have all the
              support you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-brand-gray/20 aspect-square">
                  {member.image ? (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`Team Member ${member.id}`}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-brand-orange/20 to-brand-gray/20 flex items-center justify-center">
                      <div className="text-center text-white/60">
                        <Users className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Team Member {member.id}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-brand-gray">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join Planet Fitness today and experience the difference our dedicated team makes in your fitness journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full text-lg btn-hover"
                >
                  JOIN NOW
                </Button>
              </Link>
              <Link href="/fuel-station">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 rounded-full btn-hover bg-transparent"
                >
                  VISIT FUEL STATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
