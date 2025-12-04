import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d2747] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Logo and tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl font-black text-[#FFCB05]">M</div>
              <div className="text-sm font-bold leading-tight">
                UNIVERSITY OF<br />MICHIGAN-FLINT
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Institute of Data Engineering, Analytics, and Science
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="font-bold text-[#FFCB05] mb-4 text-lg">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-[#FFCB05] transition-colors">
                About IDEAS
              </Link>
              <Link href="/projects" className="block hover:text-[#FFCB05] transition-colors">
                Projects
              </Link>
              <Link href="/advisory-board" className="block hover:text-[#FFCB05] transition-colors">
                Advisory Board
              </Link>
              <Link href="/ideas-policy" className="block hover:text-[#FFCB05] transition-colors">
                IDEAS Policy
              </Link>
              <Link href="/call-for-projects" className="block hover:text-[#FFCB05] transition-colors">
                Call for Projects
              </Link>
              <Link href="/contact-us" className="block hover:text-[#FFCB05] transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="font-bold text-[#FFCB05] mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-[#FFCB05]" />
                <Link
                  href="mailto:flint.ideas@umich.edu"
                  className="hover:text-[#FFCB05] transition-colors"
                >
                  flint.ideas@umich.edu
                </Link>
              </div>
              <p className="text-gray-300">
                303 E. Kearsley Street<br />
                Flint, MI 48502
              </p>
              <Link
                href="tel:810-762-3300"
                className="block hover:text-[#FFCB05] transition-colors"
              >
                810-762-3300
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>
              © 2025 The Regents of the University of Michigan
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#FFCB05] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#FFCB05] transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
