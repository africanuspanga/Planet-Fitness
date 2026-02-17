"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const REGISTRATION_URL =
  "https://portal.okfit.in/members/add/form/get/96b095f5f5467e5e8465dceac5266b74b463d5237f6936814feaf443609bfad7"

export default function FreeDayPassPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("pf-popup-dismissed")
    if (dismissed) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem("pf-popup-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free Day Pass Offer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src="/images/free-day-pass-promo.jpg"
            alt="Join Planet Fitness Today"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              Limited Offer
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif leading-tight">
              Your First Day Is <span className="text-brand-orange">FREE!</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
            Experience world-class equipment, group fitness classes, and expert trainers at Planet Fitness Tanzania — completely free for your first day. No strings attached.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white text-center font-bold py-3.5 px-6 rounded-full transition-colors text-sm sm:text-base"
            >
              Register Now — It{"'"}s Free
            </a>
            <button
              onClick={handleClose}
              className="w-full text-gray-400 hover:text-gray-600 text-center font-medium py-2 text-xs sm:text-sm transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
