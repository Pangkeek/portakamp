import "./gallery.css";
import GalleryClient from "./GalleryClient";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Gallery — Porta-Kamp",
  description: "Comprehensive start-to-finish project planning captured in full. From drill camps to housing developments — every project, every terrain.",
};

export default function GalleryPage() {
  return (
    <>
      <Suspense>
        <GalleryClient />
      </Suspense>

      {/* CTA */}
      <section className="gallery-cta reveal">
        <div className="cta-bg">Build</div>
        <div>
          <p className="cta-label">Start your project</p>
          <h2 className="cta-title">Ready to build<br />something great?</h2>
          <p className="cta-sub">From concept to completion — Porta-Kamp delivers modular structures wherever the world needs them. Let&apos;s discuss your next project.</p>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Link href="/contact"><button className="btn-white">Get a Quote</button></Link>
        </div>
      </section>
    </>
  );
}
