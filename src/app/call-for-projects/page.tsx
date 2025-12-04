import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CallForProjectsPage() {
  const focusAreas = [
    {
      icon: "🤖",
      title: "Predictive Modeling & Machine Learning",
      description: "Build intelligent systems that learn from data"
    },
    {
      icon: "📊",
      title: "Data Visualization & Decision Support",
      description: "Transform complex data into actionable insights"
    },
    {
      icon: "💼",
      title: "Business Intelligence & Optimization",
      description: "Streamline processes and drive efficiency"
    },
    {
      icon: "🏥",
      title: "Healthcare Analytics & Bioinformatics",
      description: "Advance medical research and patient care"
    },
    {
      icon: "📈",
      title: "Social, Economic & Policy Analysis",
      description: "Address community challenges with data"
    },
    {
      icon: "☁️",
      title: "Cloud Computing & AI Applications",
      description: "Leverage big data infrastructure and AI"
    }
  ];

  const eligiblePartners = [
    {
      type: "Industry & Community Partners",
      description: "Seeking collaboration on data-related problems"
    },
    {
      type: "UM-Flint Faculty",
      description: "Wishing to integrate projects into teaching or research"
    },
    {
      type: "Student Teams",
      description: "Undergraduate or graduate students interested in applied problem-solving"
    }
  ];

  const requirements = [
    {
      label: "Duration",
      value: "8-12 weeks",
      icon: "⏱️"
    },
    {
      label: "Student Commitment",
      value: "~10 hours per week per student",
      icon: "👨‍💻"
    },
    {
      label: "Deliverables",
      value: "Clearly defined outputs (prototype, report, dashboard, model)",
      icon: "📦"
    },
    {
      label: "Partner Support",
      value: "Access to relevant data and mentorship",
      icon: "🤝"
    }
  ];

  const proposalComponents = [
    "Project title and description",
    "Problem statement and objectives",
    "Expected deliverables",
    "Timeline and milestones",
    "Required skills or tools (if any)"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-50 to-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-sm font-bold text-[#0d2747] mb-4 tracking-wider uppercase">
              Partner With Us
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d2747] mb-6 leading-tight">
              Call for{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 -rotate-1 inline-block">Projects</span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-8">
              The Institute for Data Science and Analytics at the University of Michigan–Flint is excited to
              invite proposals for collaborative projects with industry and community partners.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              This call aims to bring together academic expertise and real-world challenges, creating meaningful
              opportunities for students and faculty to apply their knowledge while generating valuable
              impact for our partners.
            </p>
          </div>
        </section>

        {/* Introduction & Purpose - Dark Section */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative inline-block mb-8">
              <span className="text-[#0d2747] px-3 py-1 font-bold text-sm rotate-[-2deg] inline-block bg-[#ffcb05]">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl font-black mb-6">
              Introduction &{" "}
              <span className="bg-[#FFCB05] text-[#0d2747] px-2">Purpose</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 border-l-4 border-[#FFCB05]">
                <p className="font-bold text-[#FFCB05] text-lg mb-2">Applied Research</p>
                <p className="text-gray-300 text-sm">Real-world projects that advance knowledge</p>
              </div>
              <div className="bg-white/10 p-6 border-l-4 border-[#FFCB05]">
                <p className="font-bold text-[#FFCB05] text-lg mb-2">Innovation</p>
                <p className="text-gray-300 text-sm">Cutting-edge solutions to complex challenges</p>
              </div>
              <div className="bg-white/10 p-6 border-l-4 border-[#FFCB05]">
                <p className="font-bold text-[#FFCB05] text-lg mb-2">Experiential Learning</p>
                <p className="text-gray-300 text-sm">Students gain hands-on experience</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg mt-8 leading-relaxed max-w-4xl">
              We foster applied research, innovation, and experiential learning opportunities for students and
              faculty, while delivering practical, data-driven solutions to our partners.
            </p>
          </div>
        </section>

        {/* Scope & Focus Areas */}
        <section className="py-20 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-4 text-center">
              Scope &{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block rotate-[-1deg] bg-[#ffcb05]">Focus Areas</span>
              </span>
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
              We invite proposals that leverage data science, analytics, and software engineering to address
              real-world challenges
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white border-4 border-[#0d2747] p-6 hover:shadow-2xl transition-all group"
                >
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-black text-[#0d2747] mb-3 group-hover:text-[#FFCB05] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Who can{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block -rotate-1 bg-[#ffcb05]">participate?</span>
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {eligiblePartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-pink-50 p-8 border-l-8 border-[#FFCB05] text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mx-auto mb-4 text-3xl font-black text-[#0d2747]">
                    {index + 1}
                  </div>
                  <h3 className="font-black text-[#0d2747] text-xl mb-3">{partner.type}</h3>
                  <p className="text-gray-700">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Requirements */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 text-center">
              Project{" "}
              <span className="bg-[#FFCB05] text-[#0d2747] px-2">Requirements</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-8 border-4 border-[#FFCB05] hover:bg-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{req.icon}</div>
                    <div>
                      <h3 className="font-black text-[#FFCB05] text-xl mb-2">{req.label}</h3>
                      <p className="text-gray-300 text-lg">{req.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submission Process */}
        <section className="py-20 bg-pink-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-6 text-center">
              Submission{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 inline-block rotate-[-1deg]">Process</span>
              </span>
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
              Interested partners are invited to submit a Project Proposal including:
            </p>

            <div className="bg-white border-4 border-[#0d2747] p-8 mb-8">
              <div className="space-y-4">
                {proposalComponents.map((component, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFCB05] flex items-center justify-center font-black text-[#0d2747] flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg pt-1">{component}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="mailto:flint.ideas@umich.edu?subject=Project Proposal Submission"
                className="inline-block bg-[#FFCB05] text-[#0d2747] px-12 py-6 font-black text-xl hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-xl"
              >
                Submit Your Proposal
              </Link>
              <p className="text-gray-600 mt-6">
                Send your proposal to{" "}
                <Link href="mailto:flint.ideas@umich.edu" className="text-[#0d2747] font-bold hover:text-[#FFCB05]">
                  flint.ideas@umich.edu
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Why{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block -rotate-1 bg-[#ffcb05]">partner</span>
              </span>
              {" "}with us?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0d2747]">Expert Guidance</h3>
                  <p className="text-gray-700">Faculty supervision and academic rigor</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">👥</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0d2747]">Talented Students</h3>
                  <p className="text-gray-700">Motivated teams eager to solve real problems</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">💻</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0d2747]">University Resources</h3>
                  <p className="text-gray-700">Access to computational infrastructure and tools</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔄</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0d2747]">Fresh Perspectives</h3>
                  <p className="text-gray-700">Innovative approaches to complex challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0d2747]">Data-Driven Solutions</h3>
                  <p className="text-gray-700">Evidence-based insights and recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#0d2747]">Community Impact</h3>
                  <p className="text-gray-700">Contribute to student learning and regional development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to start a project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's collaborate on data-driven solutions that make a real difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="mailto:flint.ideas@umich.edu?subject=Project Proposal"
                className="bg-[#FFCB05] text-[#0d2747] px-10 py-5 font-black text-lg hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-xl inline-block"
              >
                Email Your Proposal
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white text-white px-10 py-5 font-bold hover:bg-white hover:text-[#0d2747] transition-all inline-block"
              >
                View Current Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
