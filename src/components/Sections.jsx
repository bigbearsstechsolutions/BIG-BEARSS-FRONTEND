import { useEffect, useRef, useState } from "react";
import sakib from "../assets/sakib.jpeg";
import firoz from "../assets/firozz.png";
import altaf from "../assets/altaf.png";
import akib from "../assets/akib.png";

// ── PROCESS ──────────────────────────────────────────────
const steps = [
  { n: "01", title: "Discovery", desc: "Deep dive into your business model and scaling bottlenecks." },
  { n: "02", title: "Strategy", desc: "Architecting the perfect tech stack and project roadmap." },
  { n: "03", title: "Development", desc: "Agile engineering with continuous client feedback loops." },
  { n: "04", title: "Deployment", desc: "Robust stress-testing and smooth production release." },
  { n: "05", title: "Growth", desc: "Iterative optimisation and maintenance for long-term scale." },
];

export function Process() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("active"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="reveal py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <p className="section-label mb-3">How We Work</p>
        <h2 className="font-syne font-bold text-4xl md:text-5xl">
          The Path To <span className="text-primary">Performance</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
        {/* Connecting line desktop */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-primary/20 z-0" />

        {steps.map((s, i) => (
          <div key={s.n} className="flex-1 relative z-10">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 font-mono text-sm
              ${i === 0 ? "bg-primary text-on-primary" : "bg-primary/20 border border-primary/50 text-primary"}`}>
              {s.n}
            </div>
            <h4 className="font-syne font-semibold text-lg mb-2">{s.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── TECH STACK MARQUEE ────────────────────────────────────
const techs = ["REACT", "NODE.JS" , "TYPESCRIPT" , "MONGODB", "PYTHON", "AWS", "FLUTTER", "DOCKER", "TAILWIND", "POSTGRES", "n8n", "NEXT.JS", "EXPRESS"];

export function TechStack() {
  return (
    <section className="py-24 border-y border-white/5 bg-surface-container-lowest overflow-hidden">
      <div className="text-center mb-12">
        <p className="font-mono text-xs uppercase text-on-surface-variant tracking-[0.2em]">
          Technologies We Master
        </p>
      </div>
      <div className="flex overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
        >
          {[...techs, ...techs].map((t, i) => (
            <span key={i} className="font-syne font-bold text-2xl text-outline opacity-40 px-4">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TEAM ─────────────────────────────────────────────────
const team = [
  { name: "Mohd Sakib Thakur", role: "Founder & Lead Dev", initials: "SK", color: "bg-primary/20 text-primary", img: sakib },
  { name: "Mohd Firoz khan", role: "UI/UX Designer", initials: "MF", color: "bg-secondary/20 text-secondary", img: firoz },
  { name: "Altaf Ali", role: "Data anylists", initials: "MA", color: "bg-tertiary/20 text-tertiary" , img : altaf },
  { name: "Mohd Akib Choudhry", role: "AI/ML Engineer", initials: "UK", color: "bg-primary/20 text-primary", img : akib },
];

export function Team() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("active"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" ref={ref} className="reveal py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <p className="section-label mb-3">The Team</p>
        <h2 className="font-syne font-bold text-4xl md:text-5xl">
          The <span className="text-primary">Engineers</span> Behind the Bear
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div key={m.name} className="group text-center">
            <div className="aspect-square glass rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">

              {m.img ? (
                <img src={m.img} alt={m.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              ) : (
                <div className={`w-20 h-20 rounded-full ${m.color} flex items-center justify-center font-syne font-bold text-2xl`}>
                  {m.initials}
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-white cursor-pointer hover:scale-125 transition-transform"></span>
              </div>
            </div>
            <h4 className="font-syne font-semibold text-lg">{m.name}</h4>
            <p className="font-mono text-xs uppercase text-primary tracking-wider mt-1">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── TESTIMONIALS ─────────────────────────────────────────
const reviews = [
  { name: "Sajid Ali", company: "Warsi food Ghaziabad", rating: 5, text: "BIG BEARSS delivered our entire web platform in 3 weeks. Exceptional speed and quality. The MERN stack implementation was flawless.", service: "Web Dev" },
  { name: "Priya Mehta", company: "Fashion eCommerce", rating: 5, text: "Our Meta Ads ROI went from 1.5x to 4.2x in just 2 months. The digital marketing team knows exactly what they're doing.", service: "Digital Marketing" },
  { name: "Mohammed Warsi", company: "Warsi Food Machinery", rating: 5, text: "Our website looks absolutely premium. Clients from across India are now reaching us through the inquiry form. Best investment.", service: "Web Dev" },
  { name: "Ankit Gupta", company: "Logistics Startup", rating: 5, text: "The n8n automation they built saves our team 20+ hours every week. Incredible ROI in just the first month.", service: "Automation" },
  { name: "Deepa Nair", company: "Healthcare Clinic", rating: 5, text: "CRM system completely transformed how we manage patients. Very professional team, transparent pricing, great support.", service: "CRM" },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setActive((a) => (a + 1) % reviews.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("active"); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const r = reviews[active];

  return (
    <section ref={ref} className="reveal py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <p className="section-label mb-3">Client Reviews</p>
        <h2 className="font-syne font-bold text-4xl md:text-5xl">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(s => (
              <span key={s} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          <span className="font-mono text-sm text-on-surface-variant">4.9 / 5 · 10+ reviews</span>
        </div>
      </div>

      {/* Active Review Card */}
      <div className="glass p-8 md:p-12 rounded-2xl max-w-3xl mx-auto glow-blue text-center relative">
        <div className="flex justify-center gap-1 mb-6">
          {Array(r.rating).fill(0).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
        <p className="text-on-surface text-lg md:text-xl leading-relaxed italic mb-8">
          "{r.text}"
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-syne">
            {r.name[0]}
          </div>
          <div className="text-left">
            <p className="font-syne font-semibold">{r.name}</p>
            <p className="text-on-surface-variant text-sm">{r.company}</p>
          </div>
          <span className="ml-2 bg-primary/10 border border-primary/20 text-primary font-mono text-xs px-3 py-1 rounded-full">
            {r.service}
          </span>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-primary w-6" : "bg-outline-variant"}`}
          />
        ))}
      </div>
    </section>
  );
}
