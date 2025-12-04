import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Modern with tilted image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <div className="text-sm font-bold text-[#0d2747] mb-4 tracking-wider uppercase">
                  Data Science at UM-Flint
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-[#0d2747] mb-6 leading-tight">
                  So you want to{" "}
                  <span className="relative inline-block">
                    <span className="bg-[#FFCB05] px-2 -rotate-1 inline-block">transform</span>
                  </span>
                  {" "}data into impact?
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  IDEAS is a partnership of University of Michigan-Flint faculty, students, community groups,
                  and local organizations — pairing the mission of one with the needs of another.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/call-for-projects"
                    className="bg-[#FFCB05] text-[#0d2747] px-8 py-4 font-bold hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-lg inline-block"
                  >
                    Submit a project
                  </Link>
                  <Link
                    href="/projects"
                    className="border-2 border-[#0d2747] text-[#0d2747] px-8 py-4 font-bold hover:bg-[#0d2747] hover:text-white transition-all inline-block"
                  >
                    See our work
                  </Link>
                </div>
              </div>

              {/* Right: Tilted Image Container */}
              <div className="relative">
                <div className="relative rotate-2 p-4 shadow-2xl bg-[#0d0c0d]">
                  <Image
                    src="https://ext.same-assets.com/146491099/3214299804.jpeg"
                    alt="Student with data visualizations"
                    width={600}
                    height={700}
                    className="w-full"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 bg-[#FFCB05] w-32 h-32 -z-10 opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement - Dark Section */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative inline-block mb-6">
                  <span className="text-[#0d2747] px-3 py-1 font-bold text-sm rotate-[-2deg] inline-block bg-[#ffb61a]">
                    Our mission
                  </span>
                </div>
                <h2 className="text-4xl font-black mb-6">
                  An interdisciplinary hub for{" "}
                  <span className="bg-[#FFCB05] text-[#0d2747] px-2">real-world</span>
                  {" "}data solutions
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  IDEAS coordinates research expertise across the university, making connections between
                  areas of opportunity and existing faculty skill sets.
                </p>
                <p className="text-gray-300">
                  Contact us at{" "}
                  <Link href="mailto:flint.ideas@umich.edu" className="text-[#FFCB05] underline font-bold hover:text-[#FFD54F]">
                    flint.ideas@umich.edu
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - Cards Section */}
        <section className="py-20 bg-pink-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black text-[#0d2747] mb-4 text-center">
              How we can help you{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block -rotate-1 bg-[#ffcb05]">right now</span>
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Whether you're a researcher, student, or community partner
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border-4 border-[#0d2747] p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mb-6 text-3xl font-bold text-[#0d2747]">
                  1
                </div>
                <h3 className="text-2xl font-black text-[#0d2747] mb-4">
                  Research Coordination
                </h3>
                <p className="text-gray-700 mb-6">
                  Coordinating research expertise in data science across the university, raising the academic
                  profile of UM-Flint for research in these fields.
                </p>
                <Link href="/projects" className="text-[#0d2747] font-bold hover:text-[#FFCB05] inline-flex items-center gap-2">
                  Learn more →
                </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-4 border-[#0d2747] p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mb-6 text-3xl font-bold text-[#0d2747]">
                  2
                </div>
                <h3 className="text-2xl font-black text-[#0d2747] mb-4">
                  Community Partnerships
                </h3>
                <p className="text-gray-700 mb-6">
                  Engaging in outreach by partnering with local organizations to pair services with
                  students' needs to hone their skills on real-world data.
                </p>
                <Link href="/call-for-projects" className="text-[#0d2747] font-bold hover:text-[#FFCB05] inline-flex items-center gap-2">
                  Partner with us →
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-white border-4 border-[#0d2747] p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mb-6 text-3xl font-bold text-[#0d2747]">
                  3
                </div>
                <h3 className="text-2xl font-black text-[#0d2747] mb-4">
                  Student Development
                </h3>
                <p className="text-gray-700 mb-6">
                  Providing student support services for data projects across the university, coordinating
                  scholarships and building real-world experience.
                </p>
                <Link href="/contact-us" className="text-[#0d2747] font-bold hover:text-[#FFCB05] inline-flex items-center gap-2">
                  Get involved →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section - Beige Background */}
        <section className="py-20 bg-[#F5F1E8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#0d2747] mb-4">
                Our goals
              </h2>
              <p className="text-gray-600 text-lg">
                IDEAS is an interdisciplinary coordination and outreach body with several goals:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-l-8 border-[#FFCB05] p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💡</div>
                  <div>
                    <h3 className="font-bold text-[#0d2747] text-xl mb-2">Forum for Innovation</h3>
                    <p className="text-gray-700">
                      Providing a forum for discussing ideas and opportunities for new UM-Flint programs in
                      data-related fields to meet a quickly-evolving job market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-8 border-[#FFCB05] p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h3 className="font-bold text-[#0d2747] text-xl mb-2">Community Engagement</h3>
                    <p className="text-gray-700">
                      Engaging in outreach by partnering with local commercial, community, industrial, academic,
                      and government entities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-8 border-[#FFCB05] p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h3 className="font-bold text-[#0d2747] text-xl mb-2">Data Infrastructure</h3>
                    <p className="text-gray-700">
                      Serving as the infrastructural home for various university data-related needs, including
                      facilitating data management plans that meet federal grant requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-8 border-[#FFCB05] p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <h3 className="font-bold text-[#0d2747] text-xl mb-2">Research Excellence</h3>
                    <p className="text-gray-700">
                      Coordinating research expertise in data science across the university, making connections
                      to raise the academic profile of UM-Flint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to collaborate?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              We're always looking to expand our collection of partners and we encourage you to contact us
              if you have a project you'd like to partner on.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#FFCB05] text-[#0d2747] px-10 py-5 font-black text-lg hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-xl"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
