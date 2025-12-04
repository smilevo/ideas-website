import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AdvisoryBoardPage() {
  const director = {
    name: "Mohamed Wiem Mkaouer",
    title: "Associate Professor and Graduate Program Director",
    department: "University of Michigan-Flint Department of Computer Science, College of Innovation & Technology",
    bio: "Leading the Institute of Data Engineering, Analytics, and Science to advance cutting-edge research, foster innovation, and build strong community and industry partnerships in data science.",
    photo: "/mohamed-mkaouer.jpg"
  };

  const boardMembers = [
    {
      name: "Muhammad Ahmed",
      title: "Associate Professor of Operations Management",
      department: "School of Management, University of Michigan-Flint",
      photo: "/Muhamed_Ahmed.jpeg"
    },
    {
      name: "Heather Dawson",
      title: "Professor of Biology and Program Director, Biology",
      department: "Department of Natural Sciences, College of Arts and Sciences",
      photo: "/Heather_Dawson.jpeg"
    },
    {
      name: "Marcus Paroske",
      title: "Chair, Department of Language and Communication and Associate Professor of Communication Studies",
      department: "College of Arts and Sciences",
      photo: "/Marcus_Paroske.jpg"
    },
    {
      name: "Ricardo Alfaro",
      title: "David M French Professor and Professor of Mathematics",
      department: "Department of Mathematics and Applied Sciences, College of Arts and Sciences",
      photo: "\Ricardo_Alfaro.jpeg"
    },
    {
      name: "Chris Douglas",
      title: "Professor of Economics",
      department: "Department of Social Sciences and Humanities and Chair, College of Arts and Sciences",
      photo: "/Chris_Doglas.jpeg"
    },
    {
      name: "Greg Rybarczyk",
      title: "Associate Professor of Geography",
      department: "Department of Sociology, Anthropology, and Criminal Justice, College of Arts and Sciences",
      photo: "/Greg_Rybarczyk.jpeg"
    },
    {
      name: "Halil Bisgin",
      title: "Associate Professor of Computer Science",
      department: "College of Innovation and Technology",
      photo: "/Halil_Bisgin.jpeg"
    },
    {
      name: "Rajib Ganguly",
      title: "Associate Professor of Physics and Program Director",
      department: "College of Innovation and Technology",
      photo: "/Rajib_Ganguly.jpeg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-pink-50 to-white py-20 bg-[#fcf7fa]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-sm font-bold text-[#0d2747] mb-4 tracking-wider uppercase">
              Leadership
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d2747] mb-6 leading-tight">
              Meet our{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 -rotate-1 inline-block">Advisory Board</span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              The IDEAS Advisory Board provides strategic guidance and support to ensure the Institute fulfills
              its mission of advancing data science education, research, and community partnerships.
            </p>
          </div>
        </section>

        {/* Director Section */}
        <section className="py-20 bg-[#F5F1E8]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              <span className="relative inline-block">
                <span className="px-2 inline-block rotate-[-1deg] bg-[#ffcb05]">Director</span>
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-l-8 border-[#FFCB05] p-8 hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded-full border-4 border-[#FFCB05]">
                      <Image
                        src={director.photo}
                        alt={director.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-[#0d2747] mb-2">
                      {director.name}
                    </h3>
                    <p className="text-[#0d2747] font-semibold mb-2">
                      {director.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {director.department}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {director.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-20 bg-[#f5f1e8]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Advisory{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block rotate-[-1deg] bg-[#ffcb05]">Board Members</span>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="border-l-8 border-[#FFCB05] p-6 hover:shadow-xl transition-all bg-[#ffffff]"
                >
                  <div className="flex gap-4">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      {member.photo ? (
                        <div className="w-24 h-24 relative overflow-hidden rounded-full border-4 border-[#FFCB05]">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-[#0d2747] rounded-full border-4 border-[#FFCB05] flex items-center justify-center">
                          <span className="text-[#FFCB05] text-3xl font-black">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-[#0d2747] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#0d2747] font-semibold mb-2 text-sm">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {member.department}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Responsibilities */}
        <section className="py-20 bg-[#F5F1E8]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Board{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 inline-block -rotate-1">Responsibilities</span>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border-4 border-[#0d2747]">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Strategic Direction</h3>
                <p className="text-gray-700">
                  Providing strategic direction for the Institute's programs and initiatives
                </p>
              </div>

              <div className="bg-white p-8 border-4 border-[#0d2747]">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Industry Connections</h3>
                <p className="text-gray-700">
                  Facilitating connections between the university and industry partners
                </p>
              </div>

              <div className="bg-white p-8 border-4 border-[#0d2747]">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Curriculum Development</h3>
                <p className="text-gray-700">
                  Advising on curriculum development and emerging trends in data science
                </p>
              </div>

              <div className="bg-white p-8 border-4 border-[#0d2747]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Resource Development</h3>
                <p className="text-gray-700">
                  Supporting fundraising and resource development efforts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Interested in partnering?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Learn more about how you can work with IDEAS
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
