import { Dumbbell, Heart, Zap } from "lucide-react"

export default function ClassesSection() {
  const classes = [
    {
      title: "Weight Loss Cycling",
      description:
        "High-intensity cycling sessions designed to burn calories and improve cardiovascular health with expert guidance.",
      image: "/images/class-cycling.jpeg",
      icon: <Zap className="w-6 h-6" />,
      badge: "Gym Fit",
    },
    {
      title: "Meditation & Yoga",
      description:
        "Find inner peace and flexibility through our guided meditation and yoga sessions for mind-body wellness.",
      image: "/images/class-yoga.jpeg",
      icon: <Heart className="w-6 h-6" />,
      badge: "Gym Fit",
    },
    {
      title: "Martial Arts",
      description:
        "Learn self-defense techniques while building strength, discipline, and confidence in our martial arts classes.",
      image: "/images/class-boxing.avif",
      icon: <Dumbbell className="w-6 h-6" />,
      badge: "Gym Fit",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">OUR CLASSES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif">Classes We Provide</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={classItem.image || "/placeholder.svg"}
                  alt={classItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                  {classItem.icon}
                  <span>{classItem.badge}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-brand-gray">{classItem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
