import Navigation from "@/components/navigation"

export const metadata = {
  title: "Terms & Conditions - Planet Fitness Tanzania",
  description: "Terms and Conditions for Planet Fitness Tanzania",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="bg-brand-navy text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-center">Terms & Conditions</h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-4 text-center">Please read these terms carefully</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold font-serif text-brand-navy mb-4">Opening Hours</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Gym opens from <strong>05:00 hours to 22:00 hours weekdays</strong> and <strong>07:00 hours to 19:00 hours on weekends</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Gym reserves the right to suspend the use of any facilities at any time for the organization of private classes and activities or the arrangement of maintenance or cleaning without prior notice.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Refund & Transfer</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our membership is <strong>non-refundable, non-transferable</strong>. Once payment has been made there will be No refund and No transfer to a friend or relatives. Membership policy shall be enforced at all times.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Freezing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Temporary Illness or Injury:</strong> 6 months to Yearly membership may be frozen for a minimum of 1 month and/or a maximum of 3 months in the event of a temporary illness, injury, or medical condition which in the written opinion of a doctor or other suitably qualified medical practitioner prohibits exercise for a period.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Please note Any freeze will not be effected until the appropriate proof is provided. Once your freeze has been processed you will not have access to the facilities until the freeze period has come to an end.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Locker</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Temporary lockers are provided for the members who shall remove their personal belongings their visit. Planet Fitness Club has the right to cut open any padlocks and remove personal belongings that are left in the lockers at the end of each day.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All personal belongings such as bags, etc. must be kept off the gym floor, should be stored in lockers.
                </p>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">General Rules and Regulations</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6">
                  <li>Persons using the equipment in the Gymnasium are responsible for their own safety. They are advised to seek advice and assistance from our staff in the Gymnasium if necessary.</li>
                  <li>Smoking, eating, and drinking (except water) are prohibited in the Gymnasium area at all times.</li>
                  <li>For the safety of all users, please refrain from preventing or interfering with others' use of the equipment in the Gymnasium.</li>
                  <li>For the benefit of all, please return the equipment to the corresponding place when finished.</li>
                  <li>Except for Planet Fitness activities, no commercial or religious activities are allowed in the Gymnasium without prior approval from Planet Fitness.</li>
                  <li>Private coaching, assessments, and other related activities are not allowed in all venues without prior authorization from Planet Fitness.</li>
                  <li>All users are required to follow the instructions of the PFCL staff and users are responsible for their own property and safety.</li>
                  <li>The use of a personal towel is required to avoid possible contagions and the deterioration of the machines.</li>
                  <li>Please handle the equipment in the Gymnasium with care. Users are responsible for any damages to the facilities or equipment.</li>
                  <li>The Planet Fitness Management will take no responsibility for the loss, theft or damage of belongings brought into the Gymnasium by users.</li>
                  <li>The Planet Fitness reserves the right to amend these rules and regulations without prior notice.</li>
                  <li>The Planet Fitness Management will not be responsible for any loss, injury or death of anyone using the facility.</li>
                  <li>Failure to comply with the above rules may result in loss of gym privileges.</li>
                </ul>

                <div className="bg-brand-orange/10 border-l-4 border-brand-orange rounded-lg p-6 mt-8 mb-6">
                  <p className="text-gray-800 leading-relaxed">
                    <strong className="text-brand-navy">Important Notice:</strong> By using Planet Fitness facilities, you acknowledge that you have read, understood, and agree to comply with these terms and conditions.
                  </p>
                </div>

                <h2 className="text-2xl font-bold font-serif text-brand-navy mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about these terms and conditions, please contact us:
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
                  Last updated: February 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
