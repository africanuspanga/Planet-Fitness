import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, CreditCard, Building, Banknote, Instagram } from "lucide-react"
import type { Metadata } from "next"

const REGISTRATION_URL =
  "https://portal.okfit.in/members/add/form/get/96b095f5f5467e5e8465dceac5266b74b463d5237f6936814feaf443609bfad7"

export const metadata: Metadata = {
  title: "Contact Us - Planet Fitness Tanzania | Gym in Dar es Salaam",
  description:
    "Contact Planet Fitness Tanzania for membership information and pricing. Located at Gymkhana Ground, Garden Avenue, Dar es Salaam. Call +255 752 080 808.",
  keywords:
    "Planet Fitness contact, gym membership Tanzania, fitness center Dar es Salaam, Gymkhana Ground, M-Pesa payment, gym pricing",
  openGraph: {
    title: "Contact Planet Fitness Tanzania",
    description:
      "Get in touch with Planet Fitness Tanzania for membership information and start your fitness journey today.",
    url: "https://planetfitness.co.tz/contact",
    images: ["/images/new-logo.png"],
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+255 752 080 808"],
      link: "tel:+255752080808",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@planetfitness.co.tz"],
      link: "mailto:info@planetfitness.co.tz",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Gymkhana Ground", "Garden Avenue, Dar es Salaam"],
      link: "https://share.google/aZGbuoW0OTl4TAjaU",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 05:00 - 22:00", "Sat-Sun: 07:00 - 19:00"],
      link: null,
    },
  ]

  const paymentMethods = [
    {
      icon: <Building className="w-5 h-5" />,
      name: "Bank Transfer",
      details: "All major Tanzanian banks",
    },
    {
      icon: <Banknote className="w-5 h-5" />,
      name: "Cash Payment",
      details: "At our Gymkhana facility",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      name: "Card Payments",
      details: "Visa, Mastercard accepted",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative bg-gray-900 text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pricing-2.png')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 text-balance">
              We Would Love to
              <span className="text-brand-orange"> Hear From You</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to start your fitness journey? Reach out to us and our team will be happy to assist you.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactInfo.map((info, index) => {
                const Wrapper = info.link ? "a" : "div"
                const wrapperProps = info.link
                  ? {
                      href: info.link,
                      target: info.link.startsWith("http") ? "_blank" : undefined,
                      rel: info.link.startsWith("http") ? "noopener noreferrer" : undefined,
                    }
                  : {}
                return (
                  <Wrapper
                    key={index}
                    {...wrapperProps}
                    className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-orange">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-brand-gray mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-500">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Stay Connected</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">Follow Us</h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Stay up to date with fitness tips, class updates, and community highlights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/planetfitnesstz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@planetfitnesstz</span>
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VaHiZtQ1noz11dJ9rN0k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
                <span>WhatsApp Channel</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Payments</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">Payment Options</h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                Flexible payment methods to make your membership convenient and accessible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md p-5 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-brand-gray text-sm mb-1">{method.name}</h3>
                  <p className="text-xs text-gray-500">{method.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3">Location</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray font-serif mb-3">Find Us</h2>
              <p className="text-gray-500">
                Located at the heart of Dar es Salaam at Gymkhana Ground, Garden Avenue
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6!2d39.2!3d-6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJTIDM5wrAxMicwMC4wIkU!5e0!3m2!1sen!2stz!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Planet Fitness Tanzania Location"
                className="w-full h-80 sm:h-96"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://share.google/aZGbuoW0OTl4TAjaU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-orange/90 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-orange text-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-balance">
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Take the first step towards a healthier, stronger you. Our team at Gymkhana Ground is ready to welcome you.
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
              <a
                href="https://wa.me/255752080808?text=Hello!%20I%20am%20coming%20from%20the%20Planet%20Fitness%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-brand-orange transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
