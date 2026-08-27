import Link from "next/link";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "@/app/icons/logo";
import { Phone } from "lucide-react";
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold inline-flex gap-3">
          <Logo />
          <span className="inline-flex items-center">North Productions</span>
        </Link>

        {/* Desktop Links */}
        <NavLinks />

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="inline-flex justify-center items-center gap-2 bg-violet-500 text-white px-5 py-2 rounded-full text-lg hover:bg-violet-600 transition-colors"
          >
            <Phone className="size-5" />
            <span>Konsultas Sekarang</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <MobileMenu />
      </div>
    </header>
  );
}
