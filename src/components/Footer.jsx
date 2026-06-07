export function CtaBanner() {
  return (
    <section className="py-[120px] px-6 md:px-16 text-center">
      <div className="moving-gradient py-20 rounded-3xl relative overflow-hidden group max-w-[1280px] mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
        <div className="relative z-10 space-y-8">
          <p className="font-mono text-xs uppercase text-white/60 tracking-widest">
            Ready to scale?
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white">
            Ready To Grow Your{" "}
            <span className="block mt-1">Business Digitally?</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Get a free consultation and project estimate — no commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Book Free Call
            </a>
            <a
              href="https://wa.me/7599290581"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const footerLinks = {
  Services: ["Web Development", "Mobile App", "Custom CRM", "Automation", "SEO & Marketing"],
  Company: ["About Us", "Our Team", "Portfolio", "Process", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

export function Footer() {
  return (
    <footer className="relative pt-[120px] pb-12 border-t border-outline-variant bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center">
              <span className="text-primary font-syne font-black text-lg">B</span>
            </div>
            <div>
              <span className="font-syne font-extrabold text-primary text-xl">BIG BEARSS</span>
              <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">
                Tech Solutions
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Engineered for power. Built for scale. Your tech partner for businesses that refuse to settle.
          </p>
          <div className="flex gap-3">
            {["LinkedIn", "Instagram", "GitHub", "X"].map((s) => (
              <a
                key={s}
                href="contact"
                className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all text-xs font-bold"
              >
                {s[0]}
              </a>
            ))}
          </div>
          {/* Newsletter */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-surface-container border border-outline-variant rounded-full px-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h5 className="font-syne font-bold text-on-surface mb-6">{title}</h5>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-on-surface-variant">
          © 2026 BIG BEARSS TECH SOLUTIONS. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-xs text-on-surface-variant">
          Build by BIG BEARSS TECH SOLUTIONS.
        </p>
      </div>
    </footer>
  );
}
