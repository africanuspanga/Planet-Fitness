import Navigation from "@/components/navigation"

export const metadata = {
  title: "Privacy Policy - Planet Fitness Tanzania",
  description:
    "Read the Privacy Policy for Planet Fitness Tanzania. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy - Planet Fitness Tanzania",
    description: "How Planet Fitness Tanzania handles and protects your personal data.",
    url: "https://planetfitness.co.tz/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="bg-brand-navy text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-center">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-4 text-center">Your privacy matters to us</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Planet Fitness Tanzania, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, and safeguard your data when you use our facilities and services.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Name, email address, phone number, and contact details</li>
                  <li>Membership and payment information</li>
                  <li>Health and fitness information (when provided voluntarily)</li>
                  <li>Usage data of our facilities and services</li>
                </ul>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Provide and manage your membership</li>
                  <li>Process payments and maintain financial records</li>
                  <li>Communicate with you about our services, classes, and promotions</li>
                  <li>Improve our facilities and services</li>
                  <li>Ensure the safety and security of our members</li>
                </ul>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our facilities, conducting our business, or serving our members, as long as those parties agree to keep this information confidential.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your information (subject to legal obligations)</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about this privacy policy or how we handle your personal information, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-brand-navy">Planet Fitness Tanzania</strong><br />
                    Gymkhana Ground, Dar es Salaam, Tanzania<br />
                    Phone: +255 752 080 808<br />
                    Email: info@planetfitness.co.tz
                  </p>
                </div>

                <p className="text-sm text-gray-600 mt-8">
                  Last updated: February 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
