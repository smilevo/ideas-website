"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-4xl font-black text-[#0d2747] group-hover:text-[#FFCB05] transition-colors">
              M
            </div>
            <div className="text-sm font-bold text-[#0d2747] tracking-tight leading-tight max-w-[200px]">
              UNIVERSITY OF<br />MICHIGAN-FLINT
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[#0d2747] hover:text-[#FFCB05] font-semibold transition-colors">
              IDEAS
            </Link>
            <Link href="/projects" className="text-[#0d2747] hover:text-[#FFCB05] font-semibold transition-colors">
              Projects
            </Link>
            <Link href="/advisory-board" className="text-[#0d2747] hover:text-[#FFCB05] font-semibold transition-colors">
              Advisory Board
            </Link>
            <Link href="/ideas-policy" className="text-[#0d2747] hover:text-[#FFCB05] font-semibold transition-colors">
              IDEAS Policy
            </Link>
            <Link href="/call-for-projects" className="text-[#0d2747] hover:text-[#FFCB05] font-semibold transition-colors">
              Call for Projects
            </Link>
            <Link href="/contact-us" className="text-[#0d2747] hover:text-[#FFCB05] font-semibold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="hidden md:inline-block bg-[#FFCB05] text-[#0d2747] px-6 py-2.5 font-bold hover:bg-[#FFD54F] transition-all hover:scale-105 shadow-md"
            >
              Get in touch
            </Link>
            <button className="lg:hidden text-[#0d2747]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
