import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, CreditCard, Smartphone, Building, Banknote } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left - Contact Info */}
          <div className="text-white space-y-6 sm:space-y-8">
            <div>
              <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">GET IN TOUCH</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif">Contact Us</h2>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">Operating Hours</p>
                <p className="text-xs sm:text-sm opacity-70">Weekdays: 05:00 - 22:00</p>
                <p className="text-xs sm:text-sm opacity-70">Weekends: 07:00 - 19:00</p>
              </div>
            </div>
          </div>

          {/* Middle - Address & Phone */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-white">
              <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Address</h3>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Gymkhana Ground</p>
                  <p className="text-xs sm:text-sm opacity-70">Dar es salaam, Tanzania</p>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Phone</h3>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">+255 752 080 808</p>
                  <p className="text-xs sm:text-sm opacity-70">+255 684 433 363</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Payment Options & CTA */}
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-gray font-serif mb-6 sm:mb-8 text-center">
              Payment Options
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <Smartphone size={18} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-center">Mobile Money</p>
                <p className="text-xs text-gray-600 text-center">M-Pesa, Tigo Pesa</p>
              </div>

              <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <Building size={18} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-center">Bank Transfer</p>
                <p className="text-xs text-gray-600 text-center">All major banks</p>
              </div>

              <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <Banknote size={18} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-center">Cash Payment</p>
                <p className="text-xs text-gray-600 text-center">At our facility</p>
              </div>

              <div className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <CreditCard size={18} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-center">Credit/Debit</p>
                <p className="text-xs text-gray-600 text-center">Visa, Mastercard</p>
              </div>
            </div>

            <Link href="/contact">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold btn-hover transition-all duration-300 hover:scale-105">
                Join Us Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
