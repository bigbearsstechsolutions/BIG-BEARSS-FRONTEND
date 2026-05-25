import { useEffect, useRef, useState } from "react";

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom CRM",
  "Marketing Automation",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Strategy",
  "Business Growth Consulting",
];

const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
];

const sources = [
  "Google Search",
  "Instagram",
  "LinkedIn",
  "WhatsApp",
  "Referral",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "", source: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("active"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    try {
      const res = await fetch("https://big-bearss-portfolio.onrender.com/api/contact", {
        method : "POST",
        headers :{"Content-Type" : "application/json"},
        body : JSON.stringify(form),

      })
      const data = await res.json()

      if(data.ok){
        setSubmitted(true)
      }else{
        alert("Somethings problem and check it again")
      }
    } catch (error) {
     alert("Somethings Error in Server") 
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal py-[120px] px-6 md:px-16 max-w-[1280px] mx-auto"
    >
      <div className="glass p-8 md:p-16 rounded-3xl glow-blue grid lg:grid-cols-2 gap-16">
        {/* Left — Info */}
        <div className="space-y-8">
          <div>
            <p className="section-label mb-4">Get In Touch</p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl">
              Let's Build{" "}
              <span className="text-primary block">Something Together</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Ready to transform your digital infrastructure? Our team is waiting
            to architect your success. Free consultation, no commitment.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <a
              href="mailto:hello@bigbearss.tech"
              className="flex items-center gap-4 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-primary">mail</span>
              bigbearsstechsolutions@gmail.com
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="flex items-center gap-4 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-primary">phone</span>
              +91 75992 90581 (WhatsApp)
            </a>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Aligarh, UP · Remote Worldwide
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">schedule</span>
              Mon – Sat, 9 AM – 8 PM IST
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {["LinkedIn", "Instagram", "GitHub"].map((s) => (
              <a
                key={s}
                href="#"
                className="border border-outline-variant px-4 py-2 rounded-full text-sm text-on-surface-variant hover:border-primary hover:text-primary transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center gap-6 py-16">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-primary">
                check_circle
              </span>
            </div>
            <h3 className="font-syne font-bold text-2xl">Inquiry Sent!</h3>
            <p className="text-on-surface-variant">
              We'll get back to you within 24 hours. Looking forward to working
              with you!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-primary font-bold text-sm hover:underline"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="section-label text-[10px]">Full Name *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-field"
                />
              </div>
              <div className="space-y-1">
                <label className="section-label text-[10px]">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="input-field"
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="section-label text-[10px]">Phone (WhatsApp)</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="input-field"
                />
              </div>
              <div className="space-y-1">
                <label className="section-label text-[10px]">Company / Business</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Business Name"
                  className="input-field"
                />
              </div>
            </div>

            {/* Service */}
            <div className="space-y-1">
              <label className="section-label text-[10px]">Service Interested In *</label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Budget + Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="section-label text-[10px]">Project Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select budget range...</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="section-label text-[10px]">How did you hear about us?</label>
                <select
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select source...</option>
                  {sources.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="section-label text-[10px]">Project Description *</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg hover:scale-[1.02] active:scale-95 transition-all font-syne text-lg flex items-center justify-center gap-2"
            >
              Send My Inquiry
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-white text-2xl">chat</span>
      </a>
    </section>
  );
}
