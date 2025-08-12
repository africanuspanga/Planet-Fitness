import Navigation from "@/components/navigation"
import { Phone, Mail, MapPin, Clock, CreditCard, Smartphone, Building, Banknote } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Planet Fitness Tanzania - Get In Touch | Gym Membership Info",
  description:
    "Contact Planet Fitness Tanzania for membership information, pricing, and inquiries. Multiple payment options available including M-Pesa, bank transfer, and cash.",
  keywords:
    "Planet Fitness contact, gym membership Tanzania, fitness center Dar es Salaam, M-Pesa payment, gym pricing",
  openGraph: {
    title: "Contact Planet Fitness Tanzania",
    description:
      "Get in touch with Planet Fitness Tanzania for membership information and start your fitness journey today.",
    images: ["/images/logo.png"],
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-brand-orange" />,
      title: "Phone",
      details: ["+255 123 456 789", "+255 987 654 321"],
    },
    {
      icon: <Mail className="w-8 h-8 text-brand-orange" />,
      title: "Email",
      details: ["info@planetfitness.co.tz", "support@planetfitness.co.tz"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-orange" />,
      title: "Location",
      details: ["Dar es Salaam, Tanzania", "Kinondoni District"],
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-orange" />,
      title: "Hours",
      details: ["Mon - Fri: 5:00 AM - 10:00 PM", "Sat - Sun: 6:00 AM - 9:00 PM"],
    },
  ]

  const paymentMethods = [
    {
      icon: <Smartphone className="w-6 h-6 text-brand-orange" />,
      name: "Mobile Money",
      details: "M-Pesa, Tigo Pesa",
    },
    {
      icon: <Building className="w-6 h-6 text-brand-orange" />,
      name: "Bank Transfer",
      details: "All major banks",
    },
    {
      icon: <Banknote className="w-6 h-6 text-brand-orange" />,
      name: "Cash Payment",
      details: "At our facility",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-orange" />,
      name: "Credit/Debit Cards",
      details: "Visa, Mastercard",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your fitness journey? Contact us today and let's achieve your goals together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-brand-orange/10 p-4 rounded-full">{info.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-brand-gray mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">Payment Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible payment methods to make your membership convenient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl p-6 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 p-2 rounded-lg">{method.icon}</div>
                  <h3 className="font-bold text-lg">{method.name}</h3>
                </div>
                <p className="text-white/90 text-sm">{method.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us Today</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards a healthier, stronger you. Our team is ready to welcome you to the Planet
            Fitness family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+255123456789"
              className="bg-brand-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-colors duration-300 shadow-lg"
            >
              Call Now
            </a>
            <a
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-slate-900 transition-colors duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
