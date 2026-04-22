"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page DOM render before observing
    const timeout = setTimeout(() => {
      const reveals = document.querySelectorAll(".reveal:not(.visible)");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      reveals.forEach((el) => obs.observe(el));

      return () => obs.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]); // Re-run when route changes

  return null;
}
