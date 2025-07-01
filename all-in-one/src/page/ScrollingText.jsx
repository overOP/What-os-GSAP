import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * ScrollingText – wheel‑controlled marquee banner
 * ------------------------------------------------
 * Replicates the vanilla HTML/CSS/JS snippet in React + Tailwind + GSAP.
 *
 * Setup checklist:
 *   1. `npm i gsap`
 *   2. Add the custom "china" font in your global CSS if you need it:
 *        @font-face {
 *          font-family: "china";
 *          src: url("/fonts/china.ttf") format("truetype");
 *        }
 *   3. Tailwind JIT enabled (v3+) for arbitrary units like `gap-[3vw]`.
 */
const ScrollingText = () => {
  const moveRef = useRef(null);

  useEffect(() => {
    const marquees = gsap.utils.toArray(".marque");

    // Helper to build the marquee tween based on scroll direction
    const buildTween = (isDown) =>
      gsap.to(marquees, {
        xPercent: isDown ? -200 : 0,
        duration: isDown ? 4 : 2,
        repeat: -1,
        ease: "none",
      });

    let marqueeTween = buildTween(true); // initial direction (scroll‑down)

    const wheelHandler = (e) => {
      const scrollDown = e.deltaY > 0;
      marqueeTween.kill();
      marqueeTween = buildTween(scrollDown);

      gsap.to(".marque img", {
        rotate: scrollDown ? 180 : 0,
        duration: 0.5,
      });
    };

    window.addEventListener("wheel", wheelHandler, { passive: true });

    return () => {
      marqueeTween.kill();
      window.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  // Render five repeating marquee blocks (could be dynamic)
  const items = Array.from({ length: 5 });

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans select-none">
      {/* Page 1 placeholder */}
      <section className="h-screen w-full" id="page1" />

      {/* Page 2 – marquee */}
      <section
        className="h-screen w-full flex items-center justify-start" // center vertically
        id="page2"
      >
        <div
          ref={moveRef}
          id="move"
          className="bg-[#D8FF04] flex gap-[3vw] overflow-hidden py-[3vw] w-full"
        >
          {items.map((_, i) => (
            <div
              key={i}
              className="marque flex shrink-0 items-center gap-[3vw] px-[1.5vw]"
              style={{ transform: "translateX(-100%)" }}
            >
              <h1
                className="text-[4vw] whitespace-nowrap text-black"
                style={{ fontFamily: "china, sans-serif" }}
              >
                OVER&nbsp;PRADEEP&nbsp;HORAA
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                alt="Arrow"
                className="h-[4vw]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Page 3 placeholder */}
      <section className="h-screen w-full" id="page3" />
    </div>
  );
};

export default ScrollingText;
