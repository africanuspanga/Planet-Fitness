import Navigation from "@/components/navigation"
import { Phone, Mail, MapPin, Clock, CreditCard, Smartphone, Building, Banknote, Instagram } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Planet Fitness Tanzania - Get In Touch | Gym Membership Info",
  description:
    "Contact Planet Fitness Tanzania for membership information, pricing, and inquiries. Located at Gymkhana Ground, Garden Avenue, Dar es Salaam. Multiple payment options available.",
  keywords:
    "Planet Fitness contact, gym membership Tanzania, fitness center Dar es Salaam, Gymkhana Ground, M-Pesa payment, gym pricing",
  openGraph: {
    title: "Contact Planet Fitness Tanzania",
    description:
      "Get in touch with Planet Fitness Tanzania for membership information and start your fitness journey today.",
    images: ["/images/new-logo.png"],
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-brand-orange" />,
      title: "Phone Numbers",
      details: ["+255 752 080 808", "WhatsApp: +255 752 080 808"],
    },
    {
      icon: <Mail className="w-8 h-8 text-brand-orange" />,
      title: "Email",
      details: ["info@planetfitness.co.tz", "support@planetfitness.co.tz"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-orange" />,
      title: "Location",
      details: ["Gymkhana Ground", "Garden Avenue, Dar es Salaam, Tanzania"],
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-orange" />,
      title: "Operating Hours",
      details: ["Weekdays: 05:00 hrs – 22:00 hrs", "Weekends: 07:00 hrs – 19:00 hrs"],
    },
  ]

  const paymentMethods = [
    {
      icon: <Smartphone className="w-6 h-6 text-brand-orange" />,
      name: "Mobile Money",
      details: "M-Pesa, Tigo Pesa, Airtel Money",
    },
    {
      icon: <Building className="w-6 h-6 text-brand-orange" />,
      name: "Bank Transfer",
      details: "All major Tanzanian banks",
    },
    {
      icon: <Banknote className="w-6 h-6 text-brand-orange" />,
      name: "Cash Payment",
      details: "At our Gymkhana facility",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-orange" />,
      name: "Credit/Debit Cards",
      details: "Visa, Mastercard accepted",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your fitness journey? Contact Planet Fitness Tanzania today and let's achieve your goals
              together.
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
              Visit us at Gymkhana Ground or reach out through any of these convenient methods
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
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-6">Follow Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay connected with Planet Fitness Tanzania for fitness tips, updates, and community highlights
          </p>
          <div className="flex justify-center">
            <a
              href="https://instagram.com/planetfitnesstz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center space-x-3"
            >
              <Instagram className="w-6 h-6" />
              <span>@planetfitnesstz</span>
            </a>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">Payment Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible payment methods to make your membership convenient and accessible
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

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located at the heart of Dar es Salaam at Gymkhana Ground, Garden Avenue
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6!2d39.2!3d-6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJTIDM5wrAxMicwMC4wIkU!5e0!3m2!1sen!2stz!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Planet Fitness Tanzania Location"
              className="w-full h-96"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://share.google/aZGbuoW0OTl4TAjaU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards a healthier, stronger you. Our team at Gymkhana Ground is ready to welcome you
            to the Planet Fitness family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+255752080808"
              className="bg-white text-brand-orange px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Call +255 752 080 808
            </a>
            <a
              href="https://wa.me/255752080808"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-brand-orange transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
