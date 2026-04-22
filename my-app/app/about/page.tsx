import "./about.css";
import AboutTimeline from "./AboutTimeline";

export const metadata = {
  title: "About — Porta-Kamp",
  description: "70 years of building where others won't. Learn about Porta-Kamp's history, mission, and commitment to modular construction excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-grid"></div>
        <div className="hero-glow" style={{ top: "-20%", right: "-10%", width: 600, height: 600 }}></div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <p className="breadcrumb">Home <span>/</span> About</p>
          <h1 className="page-title">About<br /><em>Porta</em><br />Kamp</h1>
          <div className="page-hero-divider"></div>
          <p className="page-hero-lead">
            70 years of building where others won&apos;t. From the original Flat Pack to global base camps — Porta-Kamp has been shaping the modular construction industry since 1955.
          </p>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="intro-split">
        <div className="intro-text reveal">
          <p className="section-label">Who we are</p>
          <h2 className="intro-heading">The original<br />Flat Pack<br />company</h2>
          <p className="intro-body">
            Porta-Kamp proudly celebrates its 70th Anniversary as a trailblazer in the export housing industry, pioneering the revolutionary &quot;Knock-Down&quot; modular building — now famously known as the Flat Pack. Created in the USA, this innovation became a global benchmark for prefabricated structures.
          </p>
          <p className="intro-body">
            Headquartered in Houston, Texas, Porta-Kamp is a privately held American company with decades of expertise supporting exploration, drilling, construction, disaster relief, mining, and logistics across more than 200 countries — reaching even the extremes of the North and South Poles.
          </p>
          <div className="est-badge">Est. 1955 · Houston, TX</div>
        </div>
        <div className="intro-img-panel reveal stagger-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://portakamp.com/wp-content/uploads/2025/01/3051304-Image-1.png" alt="Original Porta-Kamp flat pack structure" />
          <div className="intro-img-overlay">The original flat pack · 1955</div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities-section">
        <div className="caps-header reveal">
          <p className="section-label">What we deliver</p>
          <h2 className="caps-title">Core<br />Capabilities</h2>
        </div>
        <div className="caps-grid">
          {[
            { title: "Building Solutions", items: "Drill Camps – US Domestic & International, Modular Structures, Operational Bases, Disaster Relief Housing, Workforce Accommodation" },
            { title: "Expanded Services", items: "Power Generation & Distribution Systems, Fuel Tanks, Area Lighting, Relocation Services, Spare Parts, Maintenance Support" },
            { title: "Strategic Partnerships", items: "Site Planning & Development, Electrical Supplies, Switchgear & Motor Control, Risk Assessment, Facilities Management" },
          ].map((cap, i) => (
            <div key={cap.title} className={`cap-card reveal stagger-${i + 1}`}>
              <div className="cap-bar"></div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-items">{cap.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="mission-bg-text">Mission</div>
        <div className="mission-inner reveal">
          <p className="mission-label">Our purpose</p>
          <h2 className="mission-title">Our<br />Mission</h2>
          <p className="mission-body">
            At Porta-Kamp, our mission is to deliver innovative, sustainable, and reliable modular building solutions that meet the diverse needs of both international and domestic markets. We are committed to supporting industries and communities worldwide by providing high-quality, customizable prefabricated structures that excel in the most challenging environments. Guided by decades of expertise and a dedication to excellence, we strive to uphold our legacy of innovation and reliability while fostering long-term partnerships around the globe.
          </p>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="commitment-section">
        <div className="commitment-header reveal">
          <p className="section-label">What drives us</p>
          <h2 className="commitment-title">Our<br />Commitment</h2>
        </div>
        <div className="commitment-grid">
          {[
            { letter: "S", name: "Service", desc: "Committed to delivering an exceptional level of service — every project executed with precision, professionalism, and a focus on exceeding client expectations." },
            { letter: "S", name: "Standard", desc: "Upholding the highest standards of quality, safety, and innovation — ensuring every solution meets and exceeds industry benchmarks." },
            { letter: "S", name: "Support", desc: "Unwavering support throughout every phase of a project — expert guidance and tailored solutions to meet the unique needs of our clients." },
            { letter: "S", name: "Satisfaction", desc: "Dedicated to complete client satisfaction — delivering exceptional products, unmatched service, and solutions that consistently exceed expectations." },
          ].map((c, i) => (
            <div key={c.name} className={`commit-card reveal stagger-${i + 1}`}>
              <div className="commit-letter">{c.letter}</div>
              <h3 className="commit-name">{c.name}</h3>
              <p className="commit-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <AboutTimeline />

      {/* ARCHIVE */}
      <section className="archive-section">
        <div className="reveal">
          <p className="section-label">Historical record</p>
          <h2 className="archive-title">Archive</h2>
        </div>
        <div className="archive-grid reveal stagger-2">
          {[
            "03051328-Image-1-1.png", "03051328-2-Image-1-1.png", "03051328-1-Image-.png",
            "03051327-Image.png", "03051327-1-Image.png", "03051327-2-Image-1.png", "03051327-3-Image-1.png",
          ].map((file, i) => (
            <div key={i} className="archive-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://portakamp.com/wp-content/uploads/2025/01/${file}`} alt={`Archive photo ${i + 1}`} />
              <div className="archive-item-overlay"></div>
            </div>
          ))}
          <div className="archive-item" style={{ background: "#1e2535", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.5rem", cursor: "pointer" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--accent)" }}>+</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>View All</div>
          </div>
        </div>
      </section>
    </>
  );
}
