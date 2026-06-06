import { useEffect, useRef } from "react";
import warsi from "../assets/client project ss/warsi.png"
import hifi from "../assets/client project ss/hihi.png"

const projects = [
  {
    id: 1,
    tag: "Web Dev",
    title: "Warsi Food Machinery",
    desc: "Industrial machinery showcase with inquiry system and full responsive design.",
    size: "large", // col-span-2 row-span-2
    img : warsi,
    accent: "text-tertiary",
  },
  // {
  //   id: 2,
  //   tag: "CRM",
  //   title: "Custom CRM",
  //   desc: "End-to-end business management system.",
  //   size: "small",
  //   bg: "from-primary/20 to-background",
  //   accent: "text-primary",
  // },
  {
    id: 3,
    tag: "Hifi Momo",
    title: "Food Ordering application",
    desc: "Mobile app for ordering food from local restaurants.",
    size: "large",
    img : hifi,
    accent: "text-secondary",
  },
  // {
  //   id: 4,
  //   tag: "Marketing",
  //   title: "Marketing Automation Suite",
  //   desc: "Full-funnel automation with Meta & Google Ads integration.",
  //   size: "wide", // col-span-2
  //   bg: "from-tertiary/20 to-background",
  //   accent: "text-tertiary",
  // },
];

function ProjectCard({ tag, title, desc, size, bg, accent, img }) {
  const colSpan =
    size === "large"
      ? "md:col-span-2 md:row-span-2"
      : size === "wide"
      ? "md:col-span-2"
      : "";

  return (
    <div
      className={`glass overflow-hidden rounded-xl group relative ${colSpan} ${
        size === "large" ? "min-h-[360px]" : "min-h-[180px]"
      }`}
    >
      {/* Gradient BG */}
      <div className="absolute inset-0">
        <img src={img} alt={title} className="h-fit w-fit object-cover group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110 transition-transform"
 />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <span className={`font-mono text-xs uppercase mt-2 ${accent}`}>
          {tag}
        </span>
        <h3 className="font-syne font-semibold text-xl text-on-surface">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity leading-relaxed">
          {desc}
        </p>
        <a
          onClick={() => alert("Project details coming soon!")}
          className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-bold opacity-0 group-hover:opacity-100"
        >
            View Project{" "}
          <span className="material-symbols-outlined text-base">
            arrow_right_alt
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
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
      id="portfolio"
      ref={ref}
      className="reveal py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <p className="section-label mb-3">Our Work</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-on-surface-variant mt-2">
            Where technical complexity meets elegant design.
          </p>
        </div>
        <button className="text-primary font-bold hover:underline text-sm flex items-center gap-1">
          Explore All
          <span className="material-symbols-outlined text-base">
            arrow_right_alt
          </span>
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
