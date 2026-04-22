import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo-3-nobg.png" alt="Porta-Kamp Houston" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            Modular and Prefabricated Structures since 1955. Building the
            world&apos;s remote frontiers.
          </p>
        </div>
        <div>
          <p className="footer-col-title">Navigate</p>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li><Link href="/services">Drill Camps</Link></li>
            <li><Link href="/services">Logistic Bases</Link></li>
            <li><Link href="/services">Modular Structures</Link></li>
            <li><Link href="/services">Relocatable</Link></li>
            <li><Link href="/services">Housing Complexes</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Contact</p>
          <p className="footer-contact-item">
            1585 W. Sam Houston Pkwy N<br />
            Suite 120, Houston, TX 77043
          </p>
          <p className="footer-contact-item">Ph: 713-674-3163</p>
          <p className="footer-contact-item" style={{ color: "var(--accent)" }}>
            info@portakamp.com
          </p>
          <p className="footer-socials-label">Follow us</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100069292088107"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/porta-kamp/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025–Present · Porta-Kamp Inc. All Rights Reserved</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href="/cookie-policy" style={{ color: "inherit", textDecoration: "none" }}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
