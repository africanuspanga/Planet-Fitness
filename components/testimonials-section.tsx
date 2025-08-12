import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Planet Fitness transformed my life completely. The trainers are professional and the equipment is top-notch. I've never felt stronger!",
      name: "Tunu Hassan",
      role: "Personal Training Member",
      initials: "TH",
    },
    {
      text: "Amazing gym with great atmosphere. The group classes are fantastic and I've made so many friends here. Highly recommend!",
      name: "Adam Msuya",
      role: "Group Training Member",
      initials: "AM",
    },
    {
      text: "Best investment I've made for my health. The facilities are clean, modern, and the staff is always helpful and motivating.",
      name: "Catherine Mbaka",
      role: "Long-term Member",
      initials: "CM",
    },
  ]

  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-white space-y-6">
              {/* Star Rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed opacity-90">{testimonial.text}</p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm opacity-70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
