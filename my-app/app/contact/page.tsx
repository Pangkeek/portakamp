import "./contact.css";
import ContactForm from "./ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact — Porta-Kamp",
  description: "Get in touch with Porta-Kamp. Houston, TX headquarters. Request a quote for modular and prefabricated structures.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="hero-strip">
        <p className="eyebrow">— Reach Out</p>
        <h1>Let&apos;s Build<br /><em>Something</em></h1>
        <div className="contact-divider"></div>
      </section>

      <div className="ticker-wrap">
        <div className="ticker">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "contents" }}>
              {["MODULAR BUILDINGS", "LOGISTIC BASES", "CAMPS & HOUSING", "PERMANENT STRUCTURES", "RELOCATABLE STRUCTURES", "SINCE 1955"].map((t) => (
                <span key={`${i}-${t}`} className="ticker-item"><span>●</span> {t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="main-grid">
        {/* INFO */}
        <div className="info-col">
          <div className="info-block">
            <p className="label">Headquarters</p>
            <p>1585 W. Sam Houston Pkwy N.<br />Suite 120<br />Houston, Texas 77043</p>
          </div>
          <div className="info-block">
            <p className="label">Phone</p>
            <a href="tel:+17136743163">+1 (713) 674-3163</a>
          </div>
          <div className="info-block">
            <p className="label">Email</p>
            <a href="mailto:info@portakamp.com">info@portakamp.com</a>
          </div>

          <div className="map-box">
            <div className="map-inner">
              <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" fill="#eae5da" />
                <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="80" y1="0" x2="80" y2="200" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="160" y1="0" x2="160" y2="200" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="240" y1="0" x2="240" y2="200" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <line x1="320" y1="0" x2="320" y2="200" stroke="rgba(30,58,28,0.06)" strokeWidth="1" />
                <path d="M0,105 Q100,100 200,105 Q300,110 400,105" stroke="rgba(30,58,28,0.18)" strokeWidth="3" fill="none" />
                <path d="M0,140 L400,140" stroke="rgba(30,58,28,0.12)" strokeWidth="2" fill="none" />
                <path d="M185,0 L195,200" stroke="rgba(30,58,28,0.14)" strokeWidth="2.5" fill="none" />
                <path d="M130,0 L120,200" stroke="rgba(30,58,28,0.08)" strokeWidth="1.5" fill="none" />
                <rect x="50" y="55" width="55" height="35" rx="2" fill="rgba(30,58,28,0.07)" />
                <rect x="215" y="55" width="40" height="25" rx="2" fill="rgba(30,58,28,0.07)" />
                <rect x="265" y="50" width="60" height="40" rx="2" fill="rgba(30,58,28,0.07)" />
                <rect x="60" y="115" width="45" height="20" rx="2" fill="rgba(30,58,28,0.07)" />
                <rect x="215" y="115" width="50" height="20" rx="2" fill="rgba(30,58,28,0.07)" />
                <rect x="275" y="115" width="70" height="20" rx="2" fill="rgba(30,58,28,0.07)" />
                <text x="200" y="98" textAnchor="middle" fill="rgba(30,58,28,0.35)" fontSize="7" fontFamily="DM Sans, sans-serif" letterSpacing="1">W. SAM HOUSTON PKWY N.</text>
                <circle cx="200" cy="105" r="14" fill="rgba(139,117,53,0.18)">
                  <animate attributeName="r" values="14;20;14" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="105" r="5" fill="#8B7535" />
                <circle cx="200" cy="105" r="2.5" fill="#eae5da" />
              </svg>
            </div>
            <div className="map-overlay">1585 W. Sam Houston Pkwy N., Suite 120, Houston TX 77043</div>
          </div>

          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=100069292088107" className="social-btn" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              Facebook
            </a>
            <a href="https://www.linkedin.com/company/porta-kamp" className="social-btn" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* FORM */}
        <ContactForm />
      </div>

      <div className="contact-footer">
        <span className="contact-footer-logo">PORTA-KAMP</span>
        <span style={{ fontSize: "0.72rem", letterSpacing: "0.04em" }}>Modular &amp; Prefabricated Structures since 1955</span>
        <div className="contact-footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <span>© 2025 Porta-Kamp Inc.</span>
        </div>
      </div>
    </div>
  );
}
