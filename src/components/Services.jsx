import { useEffect, useRef } from "react";

const services = [
  {
    icon: "developer_mode",
    title: "Web Development",
    desc: "High-performance, scalable web architectures built for the modern internet with MERN stack.",
  },
  {
    icon: "smartphone",
    title: "Mobile App Dev",
    desc: "Native and cross-platform experiences your users will actually love.",
  },
  {
    icon: "hub",
    title: "Custom CRM",
    desc: "Bespoke management systems that streamline your entire business operations.",
  },
  {
    icon: "precision_manufacturing",
    title: "Automation",
    desc: "Eliminate manual toil with intelligent n8n & Zapier marketing automation.",
  },
  {
    icon: "category",
    title: "UI/UX Design",
    desc: "Precision interfaces designed with user-centric psychological principles.",
  },
  {
    icon: "campaign",
    title: "Digital Marketing",
    desc: "Multi-channel Meta & Google Ad campaigns that convert attention into revenue.",
  },
  {
    icon: "search",
    title: "SEO Mastery",
    desc: "Dominate search rankings and capture high-intent organic traffic at scale.",
  },
  {
    icon: "trending_up",
    title: "Business Growth",
    desc: "Strategic consulting to scale your business models and digital presence.",
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="glass p-8 rounded-lg service-card group cursor-pointer">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="font-syne font-semibold text-xl mb-2 text-on-surface">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
        {desc}
      </p>
      <a
        href="#contact"
        className="text-primary font-bold flex items-center gap-1 group-hover:gap-3 transition-all text-sm"
      >
        Learn More{" "}
        <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
      </a>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("active");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="reveal py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <p className="section-label">What We Do</p>
        <h2 className="font-syne font-bold text-4xl md:text-5xl">
          Our Strategic{" "}
          <span className="text-primary">Ecosystem</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Full-spectrum digital solutions engineered to give your business an unfair advantage in the market.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/10 transition-all text-sm"
        >
          Discuss Your Project
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
