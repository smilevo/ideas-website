import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "My Number DNA",
      organization: "Neaton Mathematics",
      description: "NeatonMathematics is home to MyNumberDNA, software used in K-12 in Flint area schools to help students meet state standards for mathematical proficiency. UM-Flint students have been helping analyze growth data to identify particularly helpful assessment tools.",
      image: "https://ext.same-assets.com/146491099/3251968689.jpeg",
      link: "https://www.mynumberdna.com/",
      icon: "📊"
    },
    {
      title: "UM-Flint Herbarium Digitization",
      organization: "Tonietto Lab",
      description: "The UM-Flint Herbarium is home to over 4,000 specimens, some of which are over 100 years old! Over the past two years, the Tonietto Lab has mapped out a process to digitize the collection, starting with updates to decades-outdated taxonomy using Specify 7, an online SQL database system in part developed by the University of Michigan. IDEAS research assistant Autumn Harris is improving digitization workflow enabling the automatic importing of metadata pulled from herbarium labels.",
      image: "https://ext.same-assets.com/146491099/1366019168.png",
      link: null,
      icon: "🌿"
    },
    {
      title: "Matlacha Pass Water Quality Analysis",
      organization: "Florida Department of Environmental Protection",
      description: "The Florida Department of Environmental Protection monitors several water quality metrics at many of their Aquatic Preserves and other sites of interest. During the Winter 2023 semester, IDEAS students Aaron Moore and Abby Hause ran data analysis on several such metrics (levels of ammonia, nitrogen, chlorophyll, etc.) to visualize the health of the Matlacha Pass and surrounding areas.",
      image: "https://ext.same-assets.com/146491099/1866768693.png",
      link: "https://floridadep.gov/rcp/aquatic-preserve/locations/matlacha-pass-aquatic-preserve",
      icon: "🌊"
    },
    {
      title: "Flint River Watershed Monitoring",
      organization: "Flint River Watershed Coalition",
      description: "The Flint River Watershed Coalition oversees various Flint River water quality monitoring activities, including one which tracks benthic macroinvertebrate populations at sites across the watershed. Starting in Summer 2023, IDEAS students will begin visualization and tracking analytics to help diagnose areas needing further study.",
      image: "https://ext.same-assets.com/146491099/702205369.png",
      link: "https://www.flintriver.org/environmental-monitoring",
      icon: "🏞️"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-sm font-bold text-[#0d2747] mb-4 tracking-wider uppercase">
              Our Work
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d2747] mb-6 leading-tight">
              Real projects,{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 -rotate-1 inline-block">real impact</span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              The Institute of Data Engineering, Analytics, and Science collaborates on various research and
              community-based projects that leverage data science to solve real-world problems.
            </p>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-4 text-center">
              Current{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block rotate-[-1deg] bg-[#ffcb05]">Projects</span>
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto text-center">
              Our faculty and students work on diverse projects spanning education analytics, environmental data
              science, and community development.
            </p>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image - Alternating sides */}
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative rotate-2 bg-[#0d2747] p-4 shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 bg-[#FFCB05] w-24 h-24 -z-10 opacity-30"></div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl">{project.icon}</div>
                      <div className="text-sm font-bold text-[#0d2747] tracking-wider uppercase">
                        {project.organization}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0d2747] mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#FFCB05] text-[#0d2747] px-8 py-4 font-bold hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-lg"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Impact Stats */}
        <section className="bg-[#F5F1E8] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Making an{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block -rotate-1 bg-[#ffcb05]">impact</span>
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-4 border-[#0d2747] p-8 text-center">
                <div className="text-5xl font-black text-[#FFCB05] mb-3">4+</div>
                <p className="font-bold text-[#0d2747] text-lg">Active Projects</p>
                <p className="text-gray-600 text-sm mt-2">Across multiple domains</p>
              </div>

              <div className="bg-white border-4 border-[#0d2747] p-8 text-center">
                <div className="text-5xl font-black text-[#FFCB05] mb-3">Local</div>
                <p className="font-bold text-[#0d2747] text-lg">Community Focus</p>
                <p className="text-gray-600 text-sm mt-2">Serving Flint and beyond</p>
              </div>

              <div className="bg-white border-4 border-[#0d2747] p-8 text-center">
                <div className="text-5xl font-black text-[#FFCB05] mb-3">Real</div>
                <p className="font-bold text-[#0d2747] text-lg">Student Experience</p>
                <p className="text-gray-600 text-sm mt-2">Hands-on learning opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Want to collaborate on a project?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              If you're interested in learning more about our projects or proposing a collaboration,
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/call-for-projects"
                className="bg-[#FFCB05] text-[#0d2747] px-10 py-5 font-black text-lg hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-xl inline-block"
              >
                Submit a project
              </Link>
              <Link
                href="/contact-us"
                className="border-2 border-white text-white px-10 py-5 font-bold hover:bg-white hover:text-[#0d2747] transition-all inline-block"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
