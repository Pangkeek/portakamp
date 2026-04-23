"use client";
import { useEffect } from "react";

const timelineData = [
  { year: "1955", label: "Inventor of the First Flat Pack Structure", img: "/firstgeneration.jpg" },
  { year: "1980s", label: "Portable Structures Delivered Across the Globe", img: "/drill1.jpg" },
  { year: "2000s", label: "Building Projects Planned & Developed", img: "/op1.jpg" },
  { year: "2010s", label: "Complete Base Camp Installations", img: "/70y.jpg" },
  { year: "2020s", label: "Planned Community Developments", img: "/res3.jpg" },
];

export default function AboutTimeline() {
  useEffect(() => {
    const el = document.getElementById("tlFill");
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => { el.style.width = "100%"; }, 200);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el.parentElement!);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-header reveal">
        <div>
          <p className="section-label">Our journey</p>
          <h2 className="timeline-title">History<br />at a Glance</h2>
        </div>
      </div>
      <div className="reveal stagger-2" style={{ position: "relative" }}>
        <div className="timeline-line">
          <div className="timeline-line-fill" id="tlFill"></div>
        </div>
        <div className="timeline-track">
          {timelineData.map((item, i) => (
            <div key={item.year} className={`timeline-item ${i === 0 ? "active" : ""}`}>
              <div className="tl-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} />
              </div>
              <div className="tl-dot"></div>
              <div className="tl-year">{item.year}</div>
              <p className="tl-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
