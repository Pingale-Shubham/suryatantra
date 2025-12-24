
const About = () => {
  return (
    <>
      {/* Page Hero */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <p className="uppercase tracking-widest text-sm text-emerald-200 mb-4">WelCome to Suryatantra</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Driving Excellence in PCB Manufacturing
          </h1>
          <p className="text-lg text-emerald-100 max-w-3xl mb-12">
            We combine two decades of PCB expertise with modern automation to deliver precision consumables, drilling
            solutions, routing tooling, and turnkey support for manufacturers across Asia.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center border border-white/20">
              <span className="text-4xl font-bold text-white block mb-2">2019</span>
              <span className="text-emerald-100">Year Established</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center border border-white/20">
              <span className="text-4xl font-bold text-white block mb-2">20+</span>
              <span className="text-emerald-100">Years of Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center border border-white/20">
              <span className="text-4xl font-bold text-white block mb-2">50+</span>
              <span className="text-emerald-100">Trusted Partners</span>
            </div>
          </div> */}
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Who We Are</h2>
            <p className="text-lg md:text-2xl text-slate-600">Empowering PCB manufacturers with dependable supplies and automation expertise.</p>
          </div>
    
          <div className="grid grid-cols-1 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg md:text-2xl text-slate-600 leading-relaxed">
                Incorporated in March 2019, Suryatantra Enterprises LLP was founded with the vision of delivering exceptionally high-quality and cost-effective solutions to the professional Printed Circuit Boards (PCB) industry. Leveraging state-of-the-art PCB manufacturing technologies, along with advanced drilling and routing capabilities, we support our customers with reliable products and services that meet today’s demanding standards.
              </p>
              <p className="text-lg md:text-2xl text-slate-600 leading-relaxed">
                Backed by over two decades of combined experience in PCB fabrication, services, and supply chain operations, our team understands the practical challenges faced on modern manufacturing floors. This deep industry knowledge enables us to design and deliver complete solutions for PCB drilling, routing, film plotting, automation, and overall production optimization.
              </p>
              <p className="text-lg md:text-2xl text-slate-600 leading-relaxed">
                Through strong strategic partnerships across Asia, we source high-quality consumables and customized raw materials tailored to the needs of small, medium, and large-scale manufacturing units. By aligning the right materials with the right processes, we help customers achieve consistent quality, improved profitability, and dependable production outcomes.
              </p>

              <p className="text-lg md:text-2xl text-slate-600 leading-relaxed">
                With a well-maintained stockpile of consumables and a one-stop service approach, we ensure uninterrupted supply at competitive pricing. Building on the founders’ successful legacy under Surya Electronics, and combining it with Suryatantra’s latest technologies and optimized processes, we continue to strengthen our position as a trusted service provider in the professional-grade PCB market.
              </p>

              <p className="text-lg md:text-2xl text-slate-600 leading-relaxed">
                Our growing customer base includes reputed names such as India Circuit Limited, Signum Electrowave, Shogini Techno Arts, and many more. With a strong foundation built on experience, innovation, and customer trust, we aspire to grow further and deliver lasting value to the PCB industry.
              </p>

            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center shadow-md border border-emerald-100 flex-1">
                <i className="fas fa-cogs text-3xl text-emerald-600 mb-4"></i>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Automation Solutions</h3>
                <p className="text-slate-600">Custom automation roadmaps to streamline drilling, routing, and finishing workflows.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center shadow-md border border-emerald-100 flex-1">
                <i className="fas fa-handshake text-3xl text-emerald-600 mb-4"></i>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Partnership Network</h3>
                <p className="text-slate-600">Robust supplier ecosystem delivering consistent quality across Asia.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center shadow-md border border-emerald-100 flex-1">
                <i className="fas fa-award text-3xl text-emerald-600 mb-4"></i>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Assurance</h3>
                <p className="text-slate-600">20+ years of process knowledge embedded into every consumable and service.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Precision Machining Tools & Components for PCB Manufacturing
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                At Suryatantra, we utilize a wide range of advanced machining tools to ensure precision and
                efficiency in our PCB manufacturing process. This collection of high-quality tools includes
                specialized drilling bits, routing blades, and cutting components designed to handle the
                intricacies of PCB fabrication.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                These tools enable accurate drilling, cutting, and shaping of circuit boards, ensuring
                top-notch quality and performance for our clients. Our state-of-the-art equipment is sourced
                from trusted partners and optimized for both small-scale and large-scale production needs,
                maintaining consistency and precision across all projects.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/Images/SELECTED/pmt.jpg"
                alt="Precision Machining Tools"
                className="hidden md:block w-full max-w-lg rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

    </>
  );
};

export default About;

