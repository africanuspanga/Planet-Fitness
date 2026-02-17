import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import FreeDayPassPopup from "@/components/free-day-pass-popup"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://planetfitness.co.tz"),
  title: {
    default: "Planet Fitness Tanzania - Premium Gym & Fitness Center in Dar es Salaam",
    template: "%s | Planet Fitness Tanzania",
  },
  description:
    "Join Planet Fitness Tanzania for world-class gym equipment, expert personal trainers, group fitness classes, and a supportive community at Gymkhana Ground, Dar es Salaam.",
  keywords: [
    "Planet Fitness Tanzania",
    "gym Dar es Salaam",
    "fitness center Tanzania",
    "personal training",
    "group fitness classes",
    "workout",
    "health club",
    "Gymkhana Ground",
    "spinning class",
    "yoga class",
    "crossfit Tanzania",
  ],
  authors: [{ name: "Planet Fitness Tanzania" }],
  creator: "Planet Fitness Tanzania",
  publisher: "Planet Fitness Tanzania",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://planetfitness.co.tz",
    siteName: "Planet Fitness Tanzania",
    title: "Planet Fitness Tanzania - Premium Gym & Fitness Center",
    description:
      "Dar es Salaam's premier fitness center with world-class equipment, expert trainers, and energising group classes.",
    images: [
      {
        url: "/images/new-logo.png",
        width: 800,
        height: 600,
        alt: "Planet Fitness Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet Fitness Tanzania - Premium Gym & Fitness Center",
    description:
      "Join Dar es Salaam's premier fitness center. World-class equipment, expert trainers, group classes.",
    images: ["/images/new-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://planetfitness.co.tz",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
      </head>
      <body className="font-sans">
        {children}
        <Footer />
        <WhatsAppButton />
        <FreeDayPassPopup />
      </body>
    </html>
  )
}
