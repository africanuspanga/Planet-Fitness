import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/new-logo.png" alt="Planet Fitness" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transform your life with our world-class equipment, expert trainers, and supportive community in Dar es
              Salaam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/planetfitnessdarsalaam"
                className="text-gray-300 hover:text-brand-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-orange">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Gymkhana Ground</p>
                  <p className="text-sm text-gray-300">Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-orange flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">+255 752 080 808</p>
                  <p className="text-sm text-gray-300">+255 684 433 363</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-orange">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-brand-orange flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Mon - Fri: 05:00 - 22:00</p>
                  <p className="text-sm text-gray-300">Sat - Sun: 07:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">© 2025 Planet Fitness Tanzania. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
