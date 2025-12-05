import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-50 to-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="text-sm font-bold text-[#0d2747] mb-4 tracking-wider uppercase">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d2747] mb-6 leading-tight">
              Let's{" "}
              <span className="relative inline-block">
                <span className="bg-[#FFCB05] px-2 -rotate-1 inline-block">connect</span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We welcome inquiries about partnerships, projects, research collaborations, and general
              information about IDEAS.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border-4 border-[#0d2747] p-8 text-center hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-[#0d2747]" />
                </div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Email</h3>
                <Link
                  href="mailto:flint.ideas@umich.edu"
                  className="text-gray-700 hover:text-[#FFCB05] font-semibold"
                >
                  flint.ideas@umich.edu
                </Link>
              </div>

              <div className="bg-white border-4 border-[#0d2747] p-8 text-center hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-[#0d2747]" />
                </div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Phone</h3>
                <Link
                  href="tel:(810) 762-5992"
                  className="text-gray-700 hover:text-[#FFCB05] font-semibold"
                >
                  (810)  762-5992
                </Link>
              </div>

              <div className="bg-white border-4 border-[#0d2747] p-8 text-center hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-[#FFCB05] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-[#0d2747]" />
                </div>
                <h3 className="font-black text-[#0d2747] text-xl mb-3">Location</h3>
                <p className="text-gray-700">
                  402D Murchie Science Building<br />
                  Flint, MI 48502-1950
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-[#F5F1E8] py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black text-[#0d2747] mb-12 text-center">
              Explore{" "}
              <span className="relative inline-block">
                <span className="px-2 inline-block rotate-[-1deg] bg-[#ffcb05]">IDEAS</span>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/call-for-projects" className="bg-white border-l-8 border-[#FFCB05] p-6 hover:shadow-lg transition-all">
                <h3 className="font-black text-[#0d2747] text-lg mb-2">Submit a Project Proposal</h3>
                <p className="text-gray-600 text-sm">Partner with us on data science projects →</p>
              </Link>

              <Link href="/projects" className="bg-white border-l-8 border-[#FFCB05] p-6 hover:shadow-lg transition-all">
                <h3 className="font-black text-[#0d2747] text-lg mb-2">View Current Projects</h3>
                <p className="text-gray-600 text-sm">See what we're working on →</p>
              </Link>

              <Link href="/advisory-board" className="bg-white border-l-8 border-[#FFCB05] p-6 hover:shadow-lg transition-all">
                <h3 className="font-black text-[#0d2747] text-lg mb-2">Advisory Board</h3>
                <p className="text-gray-600 text-sm">Meet our leadership →</p>
              </Link>

              <Link href="/ideas-policy" className="bg-white border-l-8 border-[#FFCB05] p-6 hover:shadow-lg transition-all">
                <h3 className="font-black text-[#0d2747] text-lg mb-2">Review Our Policies</h3>
                <p className="text-gray-600 text-sm">Learn about our guidelines →</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2747] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to start a conversation?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              We're here to answer your questions and explore potential collaborations.
            </p>
            <Link
              href="mailto:flint.ideas@umich.edu"
              className="inline-block bg-[#FFCB05] text-[#0d2747] px-10 py-5 font-black text-lg hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-xl"
            >
              Send us an email
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
