import { useEffect, useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Active Clients" },
  { value: 3, suffix: "+", label: "Years of Power" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

function useCountUp(ref, target, duration = 1500) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        let start = null;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          el.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, duration]);
}

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  useCountUp(ref, value);
  return (
    <div className="space-y-1">
      <h3 className="font-syne text-4xl md:text-5xl font-bold text-primary">
        <span ref={ref}>0</span>
        <span>{suffix}</span>
      </h3>
      <p className="font-mono text-xs uppercase text-on-surface-variant tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-[1280px] mx-auto relative pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Innovation in execution
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-syne font-extrabold text-5xl md:text-[72px] leading-[1.05] tracking-tight text-glow">
            We Build Digital{" "}
            <span className="text-primary block">Products That Scale</span>
            Your Business
          </h1>

          {/* Subtext */}
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Expertise across Web Development, Custom CRM, Intelligent
            Automation, and Performance Marketing. We don't just build
            software — we engineer growth engines.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </a>
            <a href="#portfolio" className="btn-outline">
              View Our Work
            </a>
          </div>
        </div>

        {/* Right — Code Card */}
        <div className="hidden lg:block relative">
          <div className="glass p-8 rounded-xl relative z-10 animate-[float_6s_ease-in-out_infinite]">
            <pre className="font-mono text-sm leading-relaxed">
              <span className="text-primary">class</span>{" "}
              <span className="text-tertiary">BigBearssEngine</span>{" "}
              {`{`}
              {"\n"}
              {"  "}
              <span className="text-on-surface-variant">constructor</span>(){" "}
              {`{`}
              {"\n"}
              {"    "}this.status ={" "}
              <span className="text-tertiary">'scaling'</span>;{"\n"}
              {"    "}this.focus = [
              <span className="text-tertiary">'Web'</span>,{" "}
              <span className="text-tertiary">'AI'</span>,{" "}
              <span className="text-tertiary">'Growth'</span>];{"\n"}
              {"  "}
              {`}`}
              {"\n\n"}
              {"  "}
              <span className="text-primary">async</span>{" "}
              <span className="text-on-surface-variant">deploySuccess</span>(){" "}
              {`{`}
              {"\n"}
              {"    "}
              <span className="text-primary">return</span>{" "}
              <span className="text-primary">await</span>{" "}
              this.optimize(Infinity);{"\n"}
              {"  "}
              {`}`}
              {"\n"}
              {`}`}
            </pre>
          </div>
          {/* Decorative ring */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-primary/20 rounded-full animate-spin-slow" />
          {/* Glow blob */}
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
