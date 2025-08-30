import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Users, Target, Dumbbell, Heart, Zap, Activity, Flame, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Fitness Classes - Planet Fitness Tanzania",
  description:
    "Discover our exciting fitness classes including cycling, yoga, martial arts, strength training, and more at Planet Fitness Tanzania in Dar es Salaam.",
}

export default function ClassesPage() {
  const classes = [
    {
      title: "Weight Loss Cycling",
      description:
        "High-intensity cycling sessions designed to burn calories and improve cardiovascular health with expert guidance.",
      image: "/images/class-cycling.jpeg",
      icon: <Zap className="w-6 h-6" />,
      duration: "45 mins",
      intensity: "High",
      maxParticipants: "20",
      schedule: ["Mon 6:00 AM", "Wed 6:00 PM", "Fri 6:00 AM", "Sat 8:00 AM"],
      benefits: [
        "Burns 400-600 calories",
        "Improves cardiovascular health",
        "Low impact on joints",
        "Builds leg strength",
      ],
    },
    {
      title: "Meditation & Yoga",
      description:
        "Find inner peace and flexibility through our guided meditation and yoga sessions for mind-body wellness.",
      image: "/images/class-yoga.jpeg",
      icon: <Heart className="w-6 h-6" />,
      duration: "60 mins",
      intensity: "Low",
      maxParticipants: "15",
      schedule: ["Tue 7:00 AM", "Thu 6:30 PM", "Sat 9:00 AM", "Sun 8:00 AM"],
      benefits: ["Reduces stress", "Improves flexibility", "Better sleep quality", "Mental clarity"],
    },
    {
      title: "Martial Arts & Boxing",
      description:
        "Learn self-defense techniques while building strength, discipline, and confidence in our martial arts classes.",
      image: "/images/class-boxing.avif",
      icon: <Shield className="w-6 h-6" />,
      duration: "50 mins",
      intensity: "High",
      maxParticipants: "12",
      schedule: ["Mon 7:00 PM", "Wed 7:00 PM", "Fri 7:00 PM", "Sat 10:00 AM"],
      benefits: ["Self-defense skills", "Full body workout", "Builds confidence", "Stress relief"],
    },
    {
      title: "Strength Training",
      description:
        "Build muscle mass and increase strength with our guided weight training sessions using proper form and technique.",
      image: "/images/pricing-personal-new.png",
      icon: <Dumbbell className="w-6 h-6" />,
      duration: "55 mins",
      intensity: "Medium-High",
      maxParticipants: "10",
      schedule: ["Mon 8:00 AM", "Wed 8:00 AM", "Fri 8:00 AM", "Sat 11:00 AM"],
      benefits: ["Builds muscle mass", "Increases bone density", "Boosts metabolism", "Improves posture"],
    },
    {
      title: "HIIT Training",
      description:
        "High-Intensity Interval Training that combines cardio and strength exercises for maximum calorie burn.",
      image: "/images/pricing-6month-new.png",
      icon: <Flame className="w-6 h-6" />,
      duration: "30 mins",
      intensity: "Very High",
      maxParticipants: "15",
      schedule: ["Tue 6:00 AM", "Thu 6:00 AM", "Sat 7:00 AM", "Sun 9:00 AM"],
      benefits: ["Maximum calorie burn", "Improves endurance", "Time efficient", "Afterburn effect"],
    },
    {
      title: "Functional Fitness",
      description:
        "Improve everyday movement patterns with exercises that enhance your daily life activities and prevent injuries.",
      image: "/images/pricing-1year-new.png",
      icon: <Activity className="w-6 h-6" />,
      duration: "45 mins",
      intensity: "Medium",
      maxParticipants: "12",
      schedule: ["Tue 7:00 PM", "Thu 7:00 PM", "Sun 10:00 AM"],
      benefits: ["Better daily movement", "Injury prevention", "Core stability", "Balance improvement"],
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
              Energizing
              <span className="text-brand-orange"> Fitness Classes</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our diverse range of group fitness classes led by certified trainers in a motivating environment
            </p>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">OUR CLASSES</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif">
                Classes We Provide
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((classItem, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={classItem.image || "/placeholder.svg"}
                      alt={classItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                      {classItem.icon}
                      <span>Gym Fit</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-brand-gray">{classItem.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{classItem.description}</p>

                    {/* Class Details */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                      <div className="text-center">
                        <Clock className="w-4 h-4 text-brand-orange mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-sm font-semibold text-brand-gray">{classItem.duration}</p>
                      </div>
                      <div className="text-center">
                        <Target className="w-4 h-4 text-brand-orange mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Intensity</p>
                        <p className="text-sm font-semibold text-brand-gray">{classItem.intensity}</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-4 h-4 text-brand-orange mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Max Size</p>
                        <p className="text-sm font-semibold text-brand-gray">{classItem.maxParticipants}</p>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h4 className="text-sm font-semibold text-brand-gray mb-2">Weekly Schedule:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {classItem.schedule.map((time, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded text-center">
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-sm font-semibold text-brand-gray mb-2">Key Benefits:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {classItem.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-brand-orange rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Class Schedule Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-4">Weekly Schedule</h2>
              <p className="text-lg text-gray-600">Plan your week with our comprehensive class timetable</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-brand-orange text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Time</th>
                      <th className="px-4 py-3 text-left">Monday</th>
                      <th className="px-4 py-3 text-left">Tuesday</th>
                      <th className="px-4 py-3 text-left">Wednesday</th>
                      <th className="px-4 py-3 text-left">Thursday</th>
                      <th className="px-4 py-3 text-left">Friday</th>
                      <th className="px-4 py-3 text-left">Saturday</th>
                      <th className="px-4 py-3 text-left">Sunday</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">6:00 AM</td>
                      <td className="px-4 py-3">Cycling</td>
                      <td className="px-4 py-3">HIIT</td>
                      <td className="px-4 py-3">Cycling</td>
                      <td className="px-4 py-3">HIIT</td>
                      <td className="px-4 py-3">Cycling</td>
                      <td className="px-4 py-3">HIIT</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">7:00 AM</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Yoga</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">8:00 AM</td>
                      <td className="px-4 py-3">Strength</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Strength</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Strength</td>
                      <td className="px-4 py-3">Cycling</td>
                      <td className="px-4 py-3">Yoga</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-semibold">6:30 PM</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Cycling</td>
                      <td className="px-4 py-3">Yoga</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">7:00 PM</td>
                      <td className="px-4 py-3">Boxing</td>
                      <td className="px-4 py-3">Functional</td>
                      <td className="px-4 py-3">Boxing</td>
                      <td className="px-4 py-3">Functional</td>
                      <td className="px-4 py-3">Boxing</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-orange text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">Ready to Join Our Classes?</h2>
            <p className="text-xl opacity-90 mb-8">
              Book your first class today and experience the energy of group fitness at Planet Fitness Tanzania
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
                <Link href="/contact">Book a Free Trial Class</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-orange bg-transparent"
              >
                <Link href="/membership">View Membership Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
