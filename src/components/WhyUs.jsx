import { useEffect, useRef } from "react";

const bigStats = [
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 250, suffix: "k+", label: "Lines of Code Shipped" },
  { value: 12, suffix: "M+", label: "Ad Spend Managed (₹)" },
  { special: "24/7", label: "Support Uptime" },
];

const usps = [
  {
    icon: "architecture",
    title: "Architecture First",
    desc: "We prioritize scalability from the very first line of code.",
  },
  {
    icon: "security",
    title: "Security Centric",
    desc: "Enterprise-grade protection for all your digital assets.",
  },
  {
    icon: "query_stats",
    title: "Data Driven",
    desc: "Every decision backed by comprehensive analytics and insights.",
  },
  {
    icon: "emoji_events",
    title: "Result Focused",
    desc: "ROI is our primary metric for every single project we deliver.",
  },
];

function BigStatCounter({ value, suffix, special, label }) {
  const ref = useRef(null);

  useEffect(() => {
    if (special || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1500, 1);
          el.textContent = Math.floor(p * value);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, special]);

  return (
    <div className="text-center">
      <p className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-2">
        {special ? (
          special
        ) : (
          <>
            <span ref={ref}>0</span>
            {suffix}
          </>
        )}
      </p>
      <p className="font-mono text-xs uppercase text-on-secondary-container tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("active"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="reveal py-[120px] bg-secondary-container relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 subtle-grid pointer-events-none" />

      <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase text-on-secondary-container/70 tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white">
            Why{" "}
            <span className="text-on-secondary-container">30+ Businesses</span>{" "}
            Trust Us
          </h2>
        </div>

        {/* Big Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {bigStats.map((s) => (
            <BigStatCounter key={s.label} {...s} />
          ))}
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((u) => (
            <div
              key={u.title}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
            >
              <span className="material-symbols-outlined text-3xl text-white mb-3 block">
                {u.icon}
              </span>
              <h4 className="text-white font-bold font-syne mb-2">{u.title}</h4>
              <p className="text-on-secondary-container/80 text-sm leading-relaxed">
                {u.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
