import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
          : ""
      }`}
    >
      <nav className="flex justify-between items-center h-full px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center">
            <span className="text-primary font-syne font-black text-lg">B</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-syne font-extrabold text-primary tracking-tighter text-lg">
              BIG BEARSS
            </span>
            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-[0.15em]">
              Tech Solutions
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-jakarta text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex bg-primary text-on-primary px-5 py-2.5 rounded-full font-bold text-sm items-center gap-2 hover:shadow-[0_0_20px_rgba(193,196,233,0.3)] transition-all active:scale-95"
        >
          Get Free Consultation
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors font-jakarta text-base py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-on-primary px-5 py-3 rounded-full font-bold text-sm text-center mt-2"
          >
            Get Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
