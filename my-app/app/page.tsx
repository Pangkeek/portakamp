import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="home-hero-grid"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Est. 1955 · Houston, TX</p>
          <h1 className="hero-title">
            The Sun<br />
            <em>Never Sets</em><br />
            on Porta Kamp
          </h1>
          <p className="hero-sub">
            70 years pioneering modular and prefabricated structures worldwide.
            From drill camps to permanent complexes — we build where others
            won&apos;t.
          </p>
          <div className="hero-actions">
            <Link href="/services">
              <button className="btn-primary">Explore Services</button>
            </Link>
            <Link href="/gallery">
              <button className="btn-ghost">View Gallery</button>
            </Link>
          </div>
        </div>

        <div className="hero-stat-strip">
          <div className="hero-stat">
            <div className="hero-stat-num">70<span>+</span></div>
            <div className="hero-stat-label">Years in business</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">200<span>+</span></div>
            <div className="hero-stat-label">Countries served</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">1955</div>
            <div className="hero-stat-label">Founded</div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span className="marquee-item">Drill Camps <span className="marquee-dot"></span></span>
              <span className="marquee-item">Logistic Bases <span className="marquee-dot"></span></span>
              <span className="marquee-item">Modular Structures <span className="marquee-dot"></span></span>
              <span className="marquee-item">Relocatable Buildings <span className="marquee-dot"></span></span>
              <span className="marquee-item">Permanent Structures <span className="marquee-dot"></span></span>
              <span className="marquee-item">Housing Complexes <span className="marquee-dot"></span></span>
              <span className="marquee-item">Flat Pack Innovation <span className="marquee-dot"></span></span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="about-section">
        <div>
          <p className="section-label reveal">Our story</p>
          <h2 className="about-title reveal stagger-1">
            Building<br />on <em>70 years</em><br />of tradition
          </h2>
          <p className="about-body reveal stagger-2">
            Porta-Kamp proudly celebrates its 70th Anniversary as a trailblazer
            in the export housing industry, pioneering the revolutionary
            &quot;Knock-Down&quot; modular building — the original Flat Pack.
            Created in the USA, now a global benchmark for prefabricated
            structures.
          </p>
          <div className="about-badge reveal stagger-3">
            <span>★</span> ISO-Certified · Global Leader
          </div>
        </div>
        <div className="about-right reveal stagger-2">
          <div className="about-img-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://portakamp.com/wp-content/uploads/2025/01/TOF00007-e1738254300358.jpg"
              alt="Porta-Kamp base camp installation"
            />
            <div className="about-img-caption">
              *Complete base camp installation
            </div>
          </div>
          <div className="about-accent-box"></div>
        </div>
      </section>

      {/* BUILDING ON TRADITION */}
      <section className="tradition-section">
        <div className="tradition-img reveal">
          <div className="tradition-img-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://portakamp.com/wp-content/uploads/2025/01/TOF00023.jpg"
              alt="Complete Base Camp Installation — aerial view"
            />
            <div className="tradition-img-caption">
              *Complete Base Camp Installation
            </div>
          </div>
          <div className="tradition-accent-box"></div>
        </div>
        <div className="tradition-content reveal stagger-2">
          <p className="section-label">Our legacy</p>
          <h2 className="tradition-title">
            Building on<br /><em>Tradition</em>
          </h2>
          <p className="tradition-body">
            In today&apos;s dynamic and ever-evolving marketplace, Porta-Kamp
            remains steadfast in its pursuit of innovation and customer-centric
            excellence. This commitment has solidified its reputation as a leader
            in delivering high-quality, cost-effective modular and prefabricated
            buildings, tailored to meet diverse needs and consistently exceed
            expectations on both domestic and international fronts.
          </p>
          <Link href="/services">
            <button className="btn-primary">Our Services</button>
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="home-gallery-section">
        <div className="gallery-label-row reveal">
          <div>
            <p className="section-label" style={{ color: "var(--accent)" }}>Our work</p>
            <h2 className="gallery-title">Project<br />Gallery</h2>
          </div>
          <Link href="/gallery">
            <button className="btn-ghost" style={{ color: "rgba(255,255,255,0.7)" }}>
              View All Projects
            </button>
          </Link>
        </div>
        <div className="gallery-grid reveal stagger-2">
          {[
            { src: "https://portakamp.com/wp-content/uploads/2025/01/Prefab-1-scaled.jpg", label: "Prefab Housing Unit" },
            { src: "https://portakamp.com/wp-content/uploads/2025/01/TOF00023.jpg", label: "Camp Installation" },
            { src: "https://portakamp.com/wp-content/uploads/2025/01/TOF00009_6.jpg", label: "Modular Structure" },
            { src: "https://portakamp.com/wp-content/uploads/2025/01/IMG_1310-1-scaled.jpg", label: "Field Deployment" },
            { src: "https://portakamp.com/wp-content/uploads/2025/01/IMAG4253.jpg", label: "Base Complex" },
          ].map((item) => (
            <div key={item.label} className="gallery-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.label} />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat-block reveal">
          <div className="stat-number">70<span className="stat-unit">+</span></div>
          <div className="stat-label">Years in operation</div>
        </div>
        <div className="stat-block reveal stagger-2">
          <div className="stat-number">200<span className="stat-unit">+</span></div>
          <div className="stat-label">Countries served</div>
        </div>
        <div className="stat-block reveal stagger-3">
          <div className="stat-number">1<span className="stat-unit">st</span></div>
          <div className="stat-label">Flat pack pioneers</div>
        </div>
        <div className="stat-block reveal stagger-4">
          <div className="stat-number">1955</div>
          <div className="stat-label">Established</div>
        </div>
      </section>
    </>
  );
}
