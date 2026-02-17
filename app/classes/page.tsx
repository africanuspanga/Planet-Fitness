import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Clock,
  Users,
  Dumbbell,
  Heart,
  Zap,
  Flame,
  Activity,
  Shield,
  Bike,
  Footprints,
} from "lucide-react"

const REGISTRATION_URL =
  "https://portal.okfit.in/members/add/form/get/96b095f5f5467e5e8465dceac5266b74b463d5237f6936814feaf443609bfad7"

export const metadata: Metadata = {
  title: "Weekly Group Classes Schedule - Planet Fitness Tanzania | Fitness Classes Dar es Salaam",
  description:
    "Join our weekly group fitness classes at Planet Fitness Tanzania. Tabata, Spinning, Insanity, Yoga, Aerobics, CrossFit, Body Pump, and more. View the full schedule.",
  keywords:
    "fitness classes Dar es Salaam, group classes Tanzania, spinning class, yoga class, insanity workout, crossfit Tanzania, aerobics, body pump",
  openGraph: {
    title: "Weekly Group Classes - Planet Fitness Tanzania",
    description:
      "Explore our full weekly schedule of group fitness classes including Spinning, Yoga, Insanity, CrossFit, and more.",
    url: "https://planetfitness.co.tz/classes",
    images: ["/images/new-logo.png"],
  },
}

const classTypes = [
  {
    name: "Spinning",
    description: "High-energy indoor cycling that builds endurance and burns calories fast.",
    icon: Bike,
    image: "/images/class-cycling.jpeg",
    intensity: "High",
  },
  {
    name: "Insanity",
    description: "Extreme cardio-based bodyweight program that pushes you to your absolute limits.",
    icon: Flame,
    image: "/images/class-boxing.avif",
    intensity: "Very High",
  },
  {
    name: "Yoga",
    description: "Improve flexibility, balance, and mental clarity through guided poses and breathwork.",
    icon: Heart,
    image: "/images/class-yoga.jpeg",
    intensity: "Low-Medium",
  },
  {
    name: "Aerobics / Step Aerobic",
    description: "Fun, rhythmic cardio routines that improve coordination and cardiovascular health.",
    icon: Activity,
    image: "/images/pricing-6month-new.png",
    intensity: "Medium",
  },
  {
    name: "Tabata",
    description: "Short, intense 4-minute intervals of all-out effort followed by brief rest periods.",
    icon: Zap,
    image: "/images/pricing-personal-new.png",
    intensity: "Very High",
  },
  {
    name: "Kata Box",
    description: "Martial arts-inspired boxing workout combining strikes, kicks, and defensive moves.",
    icon: Shield,
    image: "/images/class-boxing.avif",
    intensity: "High",
  },
  {
    name: "Body Pump",
    description: "Barbell-based strength workout targeting all major muscle groups with high reps.",
    icon: Dumbbell,
    image: "/images/pricing-2.png",
    intensity: "Medium-High",
  },
  {
    name: "CrossFit",
    description: "Varied functional movements performed at high intensity for total body conditioning.",
    icon: Flame,
    image: "/images/pricing-1year-new.png",
    intensity: "Very High",
  },
  {
    name: "Trampoline",
    description: "Low-impact, high-energy rebounding workout that is fun and effective for all levels.",
    icon: Footprints,
    image: "/images/pricing-1.png",
    intensity: "Medium",
  },
  {
    name: "Circuit Training",
    description: "Rotate through strength and cardio stations for a full-body, time-efficient workout.",
    icon: Activity,
    image: "/images/pricing-7months.png",
    intensity: "High",
  },
  {
    name: "ABS Challenge",
    description: "Focused core workout designed to strengthen and sculpt your abdominal muscles.",
    icon: Dumbbell,
    image: "/images/pricing-personal-new.png",
    intensity: "Medium-High",
  },
]

type ScheduleSlot = {
  class: string
  trainer: string
}

type DaySchedule = {
  morning: ScheduleSlot[]
  evening: ScheduleSlot[]
}

const weeklySchedule: Record<string, DaySchedule> = {
  Monday: {
    morning: [
      { class: "Tabata", trainer: "Van" },
      { class: "Spinning", trainer: "Mbao" },
    ],
    evening: [
      { class: "Insanity", trainer: "Michael" },
      { class: "Spinning", trainer: "Sele" },
    ],
  },
  Tuesday: {
    morning: [],
    evening: [
      { class: "Insanity", trainer: "Michael" },
      { class: "Yoga", trainer: "Ibad" },
    ],
  },
  Wednesday: {
    morning: [],
    evening: [
      { class: "Aerobic", trainer: "Yasin" },
      { class: "Kata Box", trainer: "Ibad" },
    ],
  },
  Thursday: {
    morning: [
      { class: "Spinning", trainer: "Yasin" },
      { class: "Body Pump", trainer: "Michael" },
    ],
    evening: [
      { class: "Insanity", trainer: "Sele" },
      { class: "Spinning", trainer: "Van" },
    ],
  },
  Friday: {
    morning: [
      { class: "Trampoline", trainer: "Michael" },
      { class: "Step Aerobic", trainer: "Mbao" },
    ],
    evening: [
      { class: "Step Aerobic", trainer: "Yasin & Mbao" },
      { class: "ABS Challenge", trainer: "Sele" },
    ],
  },
  Saturday: {
    morning: [
      { class: "CrossFit", trainer: "Michael" },
      { class: "Tabata", trainer: "Van" },
    ],
    evening: [],
  },
  Sunday: {
    morning: [
      { class: "Aerobic", trainer: "Yasin" },
      { class: "Circuit Training", trainer: "Mbao" },
    ],
    evening: [],
  },
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const morningTimes = ["6:00 - 7:00", "9:00 - 10:00"]
const eveningTimes = ["18:00 - 19:00", "19:15 - 20:00"]

function intensityColor(intensity: string) {
  if (intensity.includes("Very")) return "bg-red-100 text-red-700"
  if (intensity === "High") return "bg-orange-100 text-orange-700"
  if (intensity.includes("Medium")) return "bg-yellow-100 text-yellow-700"
  return "bg-green-100 text-green-700"
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/class-cycling.jpeg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/85 to-gray-900" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">January 2026</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 text-balance">
              Weekly Group
              <span className="text-brand-orange"> Classes</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join our certified trainers for energising group sessions every week. From Spinning to CrossFit, there is
              something for every fitness level.
            </p>
          </div>
        </section>

        {/* Weekly Schedule Table */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Timetable</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">Weekly Schedule</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Plan your week with our comprehensive class timetable</p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-gray text-white">
                      <th className="px-4 py-3 text-left font-semibold w-28">Time</th>
                      {days.map((day) => (
                        <th key={day} className="px-3 py-3 text-center font-semibold">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Morning header */}
                    <tr className="bg-brand-orange/10">
                      <td colSpan={8} className="px-4 py-2 font-bold text-brand-orange text-xs tracking-widest uppercase">
                        Morning Session
                      </td>
                    </tr>
                    {morningTimes.map((time, tIdx) => (
                      <tr key={`m-${tIdx}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-brand-gray whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-orange" />
                            {time}
                          </div>
                        </td>
                        {days.map((day) => {
                          const slot = weeklySchedule[day].morning[tIdx]
                          return (
                            <td key={day} className="px-3 py-3 text-center">
                              {slot ? (
                                <div>
                                  <p className="font-semibold text-brand-gray">{slot.class}</p>
                                  <p className="text-xs text-gray-400">{slot.trainer}</p>
                                </div>
                              ) : (
                                <span className="text-gray-300">-</span>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                    {/* Evening header */}
                    <tr className="bg-brand-gray/5">
                      <td colSpan={8} className="px-4 py-2 font-bold text-brand-gray text-xs tracking-widest uppercase">
                        Evening Session
                      </td>
                    </tr>
                    {eveningTimes.map((time, tIdx) => (
                      <tr key={`e-${tIdx}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-brand-gray whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-orange" />
                            {time}
                          </div>
                        </td>
                        {days.map((day) => {
                          const slot = weeklySchedule[day].evening[tIdx]
                          return (
                            <td key={day} className="px-3 py-3 text-center">
                              {slot ? (
                                <div>
                                  <p className="font-semibold text-brand-gray">{slot.class}</p>
                                  <p className="text-xs text-gray-400">{slot.trainer}</p>
                                </div>
                              ) : (
                                <span className="text-gray-300">-</span>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Schedule Cards */}
            <div className="lg:hidden space-y-4">
              {days.map((day) => {
                const schedule = weeklySchedule[day]
                const hasClasses = schedule.morning.length > 0 || schedule.evening.length > 0
                if (!hasClasses) return null
                return (
                  <div key={day} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-brand-gray px-4 py-3">
                      <h3 className="font-bold text-white">{day}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      {schedule.morning.length > 0 && (
                        <div>
                          <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
                            Morning
                          </p>
                          <div className="space-y-2">
                            {schedule.morning.map((slot, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                              >
                                <div>
                                  <p className="font-semibold text-brand-gray text-sm">{slot.class}</p>
                                  <p className="text-xs text-gray-400">Trainer: {slot.trainer}</p>
                                </div>
                                <span className="text-xs font-medium text-gray-500">{morningTimes[idx]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {schedule.evening.length > 0 && (
                        <div>
                          <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">
                            Evening
                          </p>
                          <div className="space-y-2">
                            {schedule.evening.map((slot, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                              >
                                <div>
                                  <p className="font-semibold text-brand-gray text-sm">{slot.class}</p>
                                  <p className="text-xs text-gray-400">Trainer: {slot.trainer}</p>
                                </div>
                                <span className="text-xs font-medium text-gray-500">{eveningTimes[idx]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Class Types Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Our Classes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">
                Classes We Offer
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                From high-intensity workouts to mindful movement, discover the class that matches your goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {classTypes.map((cls, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-brand-orange flex items-center justify-center">
                          <cls.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${intensityColor(cls.intensity)}`}>
                          {cls.intensity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-gray font-serif mb-1">{cls.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{cls.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-orange text-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-balance">
              Ready to Join Our Classes?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Book your first class today and experience the energy of group fitness at Planet Fitness Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold"
              >
                <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-orange bg-transparent px-8 py-4 rounded-full text-lg font-bold"
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
