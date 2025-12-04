import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function IdeasPolicyPage() {
  const coreGuidelines = [
    {
      number: "01",
      title: "Research Integrity & Transparency",
      description: "No fabrication, falsification, or plagiarism. All data science work must be transparently documented and open to scrutiny.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Open Science & Data Sharing",
      description: "Research outputs should be made openly available to maximize impact and reproducibility. Share code via GitHub and deposit datasets in open repositories.",
      icon: "🌐"
    },
    {
      number: "03",
      title: "Reproducibility & Data Management",
      description: "All research code under version control. Follow FAIR principles - making data Findable, Accessible, Interoperable, and Reusable.",
      icon: "📊"
    },
    {
      number: "04",
      title: "Ethical & Responsible Data Use",
      description: "IRB approval required for human data. Proactively consider fairness and bias in algorithms. Ethical thinking infused at every stage.",
      icon: "⚖️"
    },
    {
      number: "05",
      title: "Data Privacy & Compliance",
      description: "Strict compliance with HIPAA, FERPA, and all data regulations. No sensitive data on unapproved systems. Violation results in immediate action.",
      icon: "🔒"
    },
    {
      number: "06",
      title: "Inclusive Collaboration",
      description: "Respect and professionalism required. Harassment strictly prohibited. Credit shared fairly. Diverse teams produce better research.",
      icon: "🤝"
    },
    {
      number: "07",
      title: "Community Engagement",
      description: "Data science for public good. Serve local Flint community needs. Research should strive for positive societal impact.",
      icon: "🌟"
    }
  ];

  const keyPolicies = [
    {
      title: "Open Access Guidelines",
      content: "All scholarly work must be openly and freely accessible. Research should be legally available to everybody, free of charge."
    },
    {
      title: "Ethics Framework",
      content: "Ethics training required for all data science students. Research on social implications of data science is mandatory."
    },
    {
      title: "Code of Conduct",
      content: "Welcoming and supportive environment for all. No harassment or bullying. Respectful, inclusive communication required."
    },
    {
      title: "Reproducible Research",
      content: "Version control, thorough documentation, GitHub, R Markdown. Share code and data in public repositories when possible."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-50 to-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-sm font-bold text-[#0d2747] mb-4 tracking-wider uppercase">
              Research Guidelines
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d2747] mb-6 leading-tight">
              IDEAS{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 -rotate-1 inline-block">Policy</span>
              </span>
              {" "}Framework
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              Comprehensive research conduct guidelines ensuring ethical, rigorous, and transparent
              data science research at UM-Flint.
            </p>
          </div>
        </section>

        {/* Overview - Dark Section */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative inline-block mb-8">
              <span className="text-[#0d2747] px-3 py-1 font-bold text-sm rotate-[-2deg] inline-block bg-[#ffcb05]">
                Our Commitment
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-black mb-6">
                  Responsible{" "}
                  <span className="bg-[#FFCB05] text-[#0d2747] px-2">data science</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our policies emphasize open science, ethical conduct, data management, and compliance
                  with regulations. We model transparency, reproducibility, and public-good orientation
                  in everything we do.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 border-l-4 border-[#FFCB05]">
                  <p className="font-bold text-[#FFCB05] mb-1">Integrity</p>
                  <p className="text-sm text-gray-300">Highest standards of research conduct</p>
                </div>
                <div className="bg-white/10 p-4 border-l-4 border-[#FFCB05]">
                  <p className="font-bold text-[#FFCB05] mb-1">Openness</p>
                  <p className="text-sm text-gray-300">Transparent methods and accessible results</p>
                </div>
                <div className="bg-white/10 p-4 border-l-4 border-[#FFCB05]">
                  <p className="font-bold text-[#FFCB05] mb-1">Ethics</p>
                  <p className="text-sm text-gray-300">Responsibility at the core of every project</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Core Guidelines */}
        <section className="py-20 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-4 text-center">
              Seven{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block rotate-[-1deg] bg-[#ffcb05]">Core Guidelines</span>
              </span>
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
              Our comprehensive framework for responsible research conduct at UM-Flint's
              Data Science Institute
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="bg-white border-4 border-[#0d2747] p-6 hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{guideline.icon}</div>
                    <div className="w-12 h-12 bg-[#FFCB05] flex items-center justify-center font-black text-[#0d2747]">
                      {guideline.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-[#0d2747] mb-3 group-hover:text-[#FFCB05] transition-colors">
                    {guideline.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {guideline.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Policies from Other Institutes */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Based on{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 inline-block -rotate-1">Best Practices</span>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {keyPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-pink-50 p-8 border-l-8 border-[#FFCB05] hover:shadow-xl transition-all"
                >
                  <h3 className="font-black text-[#0d2747] text-xl mb-3">{policy.title}</h3>
                  <p className="text-gray-700">{policy.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#0d2747] text-white p-8 rounded-lg">
              <p className="text-center text-lg italic">
                "Responsibility should be the pillar of data science. Ethical thinking and social
                contexts must be front and center in all data science research that can impact
                individuals or communities."
              </p>
              <p className="text-center text-[#FFCB05] font-bold mt-4">
                — Ten Simple Rules for Starting a Data Science Initiative
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Requirements */}
        <section className="py-20 bg-pink-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Detailed{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 inline-block rotate-[-1deg]">Requirements</span>
              </span>
            </h2>

            <div className="space-y-8">
              {/* Requirement 1 */}
              <div className="bg-white border-4 border-[#0d2747] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFCB05] flex items-center justify-center text-2xl">
                    📋
                  </div>
                  <h3 className="text-2xl font-black text-[#0d2747]">Data Management Plans</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-[#0d2747] mb-2">Required Practices:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">•</span>
                        <span>Version control (Git) for all research code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">•</span>
                        <span>README files and thorough documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">•</span>
                        <span>Jupyter/R Markdown notebooks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">•</span>
                        <span>Public repositories for code and data</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-[#0d2747] mb-2">FAIR Principles:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">F</span>
                        <span><strong>Findable</strong> - Easy to locate by others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">A</span>
                        <span><strong>Accessible</strong> - Retrievable by identifiers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">I</span>
                        <span><strong>Interoperable</strong> - Works with other data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFCB05] font-bold">R</span>
                        <span><strong>Reusable</strong> - Can be used in future research</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Requirement 2 */}
              <div className="bg-white border-4 border-[#0d2747] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFCB05] flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                  <h3 className="text-2xl font-black text-[#0d2747]">Compliance & Security</h3>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
                  <p className="font-bold text-red-900 mb-2">⚠️ Prohibited Data on Unapproved Systems:</p>
                  <p className="text-red-800 text-sm">
                    HIPAA, FERPA, FISMA, ITAR/EAR protected data. Violation results in immediate
                    account closure and data removal.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-[#0d2747] text-sm mb-1">IRB Approval</p>
                    <p className="text-xs text-gray-600">Required for all human subjects research</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-[#0d2747] text-sm mb-1">Data Use Agreements</p>
                    <p className="text-xs text-gray-600">Must follow all data sharing terms</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-bold text-[#0d2747] text-sm mb-1">Secure Storage</p>
                    <p className="text-xs text-gray-600">Encryption and access control required</p>
                  </div>
                </div>
              </div>

              {/* Requirement 3 */}
              <div className="bg-white border-4 border-[#0d2747] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFCB05] flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <h3 className="text-2xl font-black text-[#0d2747]">Required Training</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  All researchers must complete Responsible Conduct of Research (RCR) training specific
                  to data science, covering:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#FFCB05] text-xl">✓</span>
                    <span>Human subjects protections</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#FFCB05] text-xl">✓</span>
                    <span>Data privacy and security</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#FFCB05] text-xl">✓</span>
                    <span>Algorithmic bias and fairness</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#FFCB05] text-xl">✓</span>
                    <span>Broader impacts of data technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Questions about our policies?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              We're here to help you understand and comply with all research conduct guidelines.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#FFCB05] text-[#0d2747] px-10 py-5 font-black text-lg hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-xl"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
