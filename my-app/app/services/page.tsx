import Link from "next/link";
import "./services.css";

export const metadata = {
  title: "Services — Porta-Kamp",
  description: "Building Solutions, Expanded Services, and Strategic Partnerships. Porta-Kamp delivers a fully integrated client experience.",
};

const solutions = [
  { num: "01", name: "Drill Camps", desc: "US Domestic & International deployments for oil, gas, and exploration operations." },
  { num: "02", name: "Affordable Housing & Offices", desc: "Build-on-lot housing, control rooms, and specialty structures tailored to your site." },
  { num: "03", name: "Modular Structures", desc: "Offices, school rooms, and versatile flat-pack modules assembled on-site worldwide." },
  { num: "04", name: "Permanent Structures", desc: "Operational bases and compounds built to last — engineered for any environment." },
  { num: "05", name: "Container Conversions", desc: "Custom-converted shipping containers repurposed as functional, deployable structures." },
  { num: "06", name: "Disaster Relief Housing", desc: "Rapidly deployable emergency accommodation when communities need shelter most." },
];

const expandedServices = [
  { name: "Power Generation & Distribution", sub: "Complete power systems for remote and off-grid installations", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { name: "Water & Sewer Treatment", sub: "Water and sewer treatment and distribution systems", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { name: "Fuel & Water Storage Tanks", sub: "Industrial-grade tanks for fuel and water storage on-site", icon: "rect" },
  { name: "Area Lighting", sub: "Comprehensive site lighting solutions for all environments", icon: "circle" },
  { name: "Refurbishment", sub: "Full overhaul and restoration of existing modular structures", icon: "wrench" },
  { name: "Spare Parts & Relocation", sub: "Parts supply and professional relocation of structures worldwide", icon: "arrow" },
];

const partners = [
  { num: "P·01", name: "Site Planning & Development", desc: "End-to-end site design, layout planning, and development services tailored to your operational requirements." },
  { num: "P·02", name: "Electrical Supplies & Switchgear", desc: "Full electrical supply chain including switchgear, motor control, and distribution components." },
  { num: "P·03", name: "Data Communications", desc: "Integrated data and communications infrastructure for connected operations in any location." },
  { num: "P·04", name: "Transport & Logistics", desc: "Global transport and logistics coordination from manufacturing to final installation on-site." },
  { num: "P·05", name: "Risk Assessment", desc: "Comprehensive risk evaluation and mitigation strategies for complex and hazardous environments." },
  { num: "P·06", name: "Facilities Management", desc: "Ongoing management and maintenance of facilities to ensure peak operational performance." },
  { num: "P·07", name: "HSSE Training & Support", desc: "Health, Safety, Security, and Environment training programs and ongoing compliance support." },
  { num: "P·08", name: "Project Management", desc: "Expert project delivery from initiation to handover — on time, on budget, to specification." },
  { num: "P·09", name: "Polymer Technologies", desc: "Industrial coatings and polymer technologies for structure protection and longevity." },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="services-hero">
        <div className="hero-grid"></div>
        <div className="hero-glow" style={{ top: "-10%", left: "-5%", width: 700, height: 500 }}></div>
        <div className="hero-glow2"></div>
        <div className="hero-inner">
          <div>
            <p className="breadcrumb">Home <span>/</span> Services</p>
            <h1 className="page-title" style={{ fontSize: "clamp(4rem, 8vw, 7.5rem)" }}>Our<br /><em>Services</em></h1>
            <div className="hero-divider"></div>
          </div>
          <div className="hero-right">
            <p className="hero-tagline">We deliver a fully integrated client experience — seamless communication, meticulous budgeting, strategic staffing, efficient on-site coordination, and the unwavering delivery of exceptional, high-quality solutions.</p>
            <div className="hero-pill-row">
              <span className="hero-pill">Building Solutions</span>
              <span className="hero-pill">Expanded Services</span>
              <span className="hero-pill">Strategic Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "contents" }}>
              {["Drill Camps", "Modular Structures", "Disaster Relief", "Power Generation", "Container Conversions", "Facilities Management", "Risk Assessment"].map((t) => (
                <span key={`${i}-${t}`} className="marquee-item">{t} <span className="marquee-dot"></span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* BUILDING SOLUTIONS */}
      <section className="solutions-section">
        <div className="solutions-header reveal">
          <div>
            <p className="section-label">01 — Core offerings</p>
            <h2 className="section-title">Building<br />Solutions</h2>
          </div>
          <div>
            <p className="solutions-intro">From remote drill camps to affordable housing and disaster relief — Porta-Kamp delivers a wide variety of building solutions for domestic and international clients across every terrain and climate.</p>
          </div>
        </div>
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <div key={s.num} className={`sol-card reveal stagger-${i + 1}`}>
              <div>
                <p className="sol-num">{s.num}</p>
                <h3 className="sol-name">{s.name}</h3>
                <p className="sol-desc">{s.desc}</p>
              </div>
              <div className="sol-arrow">↗</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPANDED SERVICES */}
      <section className="expanded-section">
        <div className="reveal">
          <p className="section-label">02 — Full spectrum support</p>
          <h2 className="section-title" style={{ color: "var(--charcoal)" }}>Expanded<br />Services</h2>
        </div>
        <div className="expanded-layout">
          <div className="expanded-left reveal stagger-1">
            <p className="expanded-desc">Beyond construction, Porta-Kamp delivers the full infrastructure stack — from power and water to refurbishment and relocation. Every project is supported end-to-end.</p>
            <div className="exp-highlight">
              <p className="exp-highlight-label">Countries served</p>
              <div className="exp-highlight-val">200+</div>
              <p className="exp-highlight-sub">Across six continents</p>
            </div>
            <div className="exp-highlight" style={{ marginTop: "1.5px" }}>
              <p className="exp-highlight-label">Years of expertise</p>
              <div className="exp-highlight-val">70+</div>
              <p className="exp-highlight-sub">Since 1955</p>
            </div>
          </div>
          <div className="expanded-right reveal stagger-2">
            {expandedServices.map((s) => (
              <div key={s.name} className="exp-row">
                <div className="exp-row-icon">
                  <svg viewBox="0 0 24 24"><path d={s.icon === "rect" ? "M3 3h18v18H3zM3 9h18M9 21V9" : s.icon === "circle" ? "M12 7a5 5 0 110 10 5 5 0 010-10zM12 1v2M12 21v2" : s.icon === "wrench" ? "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77" : s.icon === "arrow" ? "M5 12h14M12 5l7 7-7 7" : s.icon} /></svg>
                </div>
                <div>
                  <div className="exp-row-name">{s.name}</div>
                  <div className="exp-row-sub">{s.sub}</div>
                </div>
                <div className="exp-row-chevron">›</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIPS */}
      <section className="partnerships-section">
        <div className="partnerships-bg">Partners</div>
        <div className="partnerships-header reveal">
          <div>
            <p className="section-label">03 — Broader ecosystem</p>
            <h2 className="section-title">Strategic<br />Partnerships</h2>
          </div>
          <div>
            <p className="partnerships-sub">Through a curated network of trusted partners, Porta-Kamp extends its offering into project management, logistics, engineering, training, and beyond — ensuring a truly end-to-end solution.</p>
          </div>
        </div>
        <div className="partnerships-grid">
          {partners.map((p, i) => (
            <div key={p.num} className={`partner-card reveal stagger-${i + 1}`}>
              <p className="partner-num">{p.num}</p>
              <div className="partner-line"></div>
              <h3 className="partner-name">{p.name}</h3>
              <p className="partner-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-section">
        <div className="cta-bg-text">Quote</div>
        <div className="reveal">
          <p className="cta-label">Ready to build?</p>
          <h2 className="cta-title">Let&apos;s discuss<br />your project</h2>
          <p className="cta-body">Whether you need a remote drill camp or a full housing complex, our team is ready to deliver. Reach out and let&apos;s build something together.</p>
        </div>
        <div className="cta-right reveal stagger-2">
          <Link href="/contact"><button className="btn-white">Get a Quote</button></Link>
          <Link href="/gallery"><button className="btn-outline-white">View Gallery</button></Link>
        </div>
      </section>
    </>
  );
}
