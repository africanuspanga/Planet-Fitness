export default function TeamSection() {
  const teamMembers = [
    {
      name: "Salma Fonseca",
      role: "Outdoor Classes",
      avatar: "👩‍🏫",
    },
    {
      name: "Christian Russell",
      role: "Personal Training",
      avatar: "👨‍💪",
    },
    {
      name: "Indira Shree",
      role: "Group Training",
      avatar: "👩‍💪",
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">OUR TEAM</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-gray font-serif mb-6">Professional Team</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Attributes that include, but are not limited to mental acuity, cardiorespiratory endurance, muscular
            strength.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-64 h-80 bg-brand-navy rounded-3xl mx-auto flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {member.avatar}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-gray font-serif mb-2">{member.name}</h3>
              <p className="text-brand-gray/70">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Founder Section */}
        <div className="bg-brand-navy rounded-3xl p-12 text-center text-white">
          <p className="text-brand-orange text-sm font-medium tracking-wider uppercase mb-4">FOUNDER</p>
          <h3 className="text-3xl font-bold font-serif mb-6">Meet the Founder</h3>

          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
            <img src="/images/founder.jpeg" alt="Ramadhan J Mdula - Founder" className="w-full h-full object-cover" />
          </div>

          <h4 className="text-xl font-bold mb-2">Ramadhan J Mdula</h4>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            The founder is an experienced fitness expert whose main goal is to have a healthy community and build a
            better and happy nation.
          </p>
        </div>
      </div>
    </section>
  )
}
