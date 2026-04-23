"use client";
import { useState, useCallback, useEffect } from "react";

const galleryItems = [
  { src: "/con1.jpg", tag: "Container Camp 1", cat: "container" },
  { src: "/con2.jpg", tag: "Container Camp 2", cat: "container" },
  { src: "/con3.jpg", tag: "Container Camp 3", cat: "container" },
  { src: "/con4.jpg", tag: "Container Camp 4", cat: "container" },
  { src: "/con5.jpg", tag: "Container Camp 5", cat: "container" },
  { src: "/con6.jpg", tag: "Container Camp 6", cat: "container" },
  { src: "/res1.jpg", tag: "Residential Compounds", cat: "housing" },
  { src: "/res2.jpg", tag: "Residential home", cat: "housing" },
  { src: "/res3.jpg", tag: "North Dakota Residential Home", cat: "housing" },
  { src: "/res4.jpg", tag: "North Dakota Residential Home", cat: "housing" },
  { src: "/res5.jpg", tag: "Town home", cat: "housing" },
  { src: "/mod1.jpg", tag: "Modular hospital", cat: "modular" },
  { src: "/drill1.jpg", tag: "Drilling Camps", cat: "drilling" },
  { src: "/op1.jpg", tag: "Permanent operational bases Africa", cat: "operational" },
];

export default function GalleryClient() {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((i) => i.cat === filter);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prevImg = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, []);

  const nextImg = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxOpen, closeLightbox, prevImg, nextImg]);

  return (
    <>
      {/* PAGE HERO */}
      <section className="gallery-hero">
        <div className="hero-grid"></div>
        <div className="hero-glow" style={{ top: "-10%", right: "5%", width: 600, height: 500 }}></div>
        <div className="hero-inner">
          <div>
            <p className="breadcrumb">Home <span>/</span> Gallery</p>
            <h1 className="page-title" style={{ fontSize: "clamp(4rem, 8vw, 7.5rem)" }}>Our<br /><em>Work</em></h1>
            <div className="hero-divider"></div>
          </div>
          <div className="hero-right">
            <p className="hero-desc">Comprehensive start-to-finish project planning captured in full. From designing and constructing drill camps to support equipment and site development — every project, every terrain.</p>
            <div className="filter-bar">
              {["all", "container", "housing", "modular", "drilling", "operational"].map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "All Projects" : f === "camps" ? "Drill Camps" : f === "container" ? "Container Camps" : f === "drilling" ? "Drilling Camps" : f === "operational" ? "Operational Bases" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COUNT BAR */}
      <div className="count-bar">
        <p className="count-text">Showing <span>{filtered.length}</span> projects</p>
        <div className="view-toggle">
          <button className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")} title="Grid view">
            <svg viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6" /><rect x="9" y="1" width="6" height="6" /><rect x="1" y="9" width="6" height="6" /><rect x="9" y="9" width="6" height="6" /></svg>
          </button>
          <button className={`toggle-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")} title="List view">
            <svg viewBox="0 0 16 16"><rect x="1" y="1" width="14" height="4" /><rect x="1" y="7" width="14" height="4" /><rect x="1" y="13" width="14" height="3" /></svg>
          </button>
        </div>
      </div>

      {/* GALLERY */}
      <section className="gallery-section-page">
        <div
          className="masonry-grid reveal"
          style={viewMode === "list" ? { columns: 1, maxWidth: 700, margin: "0 auto" } : undefined}
        >
          {filtered.map((item, i) => (
            <div key={`${item.src}-${i}`} className="masonry-item" onClick={() => openLightbox(galleryItems.indexOf(item))}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.tag} loading="lazy" />
              <div className="overlay">
                <div className="overlay-inner">
                  <span className="overlay-tag">{item.tag}</span>
                  <div className="overlay-expand">+</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <div className={`lightbox ${lightboxOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}>
        <button className="lightbox-close" onClick={closeLightbox}>✕</button>
        <button className="lightbox-nav lightbox-prev" onClick={prevImg}>‹</button>
        <div className="lightbox-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lightbox-img" src={galleryItems[currentIndex].src} alt={galleryItems[currentIndex].tag} />
        </div>
        <button className="lightbox-nav lightbox-next" onClick={nextImg}>›</button>
        <div className="lightbox-counter">
          <span>{currentIndex + 1}</span> / <span>{galleryItems.length}</span>
        </div>
      </div>
    </>
  );
}
