"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Planet Fitness transformed my life completely. The trainers are professional and the equipment is top-notch. I've never felt stronger and more confident!",
      name: "Tunu Hassan",
      role: "Client",
    },
    {
      text: "Amazing gym with great atmosphere. The group classes are fantastic and I've made so many friends here. Best fitness investment I've made!",
      name: "Adam Msuya",
      role: "Client",
    },
    {
      text: "The personal trainers at Planet Fitness are exceptional. They helped me achieve my weight loss goals in just 6 months. Highly recommend!",
      name: "Fatuma Juma",
      role: "Client",
    },
    {
      text: "Best gym in Dar es Salaam! The facilities are modern and clean. The yoga classes have improved my flexibility and mental health significantly.",
      name: "John Mwalimu",
      role: "Client",
    },
    {
      text: "I love the supportive community at Planet Fitness. Everyone is encouraging and the staff is always helpful. My fitness journey has been amazing here!",
      name: "Amina Rashid",
      role: "Client",
    },
    {
      text: "Planet Fitness offers the best value for money. Great equipment, professional trainers, and excellent customer service. I'm a member for life!",
      name: "Daniel Kimaro",
      role: "Client",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 2

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage,
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">OUR TESTIMONIAL</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray font-serif">
            What Our Clients Says
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-orange hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-orange hover:text-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-orange/20" />
                  <p className="text-gray-700 leading-relaxed pl-6">{testimonial.text}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-brand-gray">{testimonial.name}</h4>
                    <p className="text-brand-orange font-medium">{testimonial.role}</p>
                  </div>
                  <div>
                    <Quote className="w-8 h-8 text-brand-orange" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / testimonialsPerPage) === index
                  ? "bg-brand-orange"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
