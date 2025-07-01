import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin once at module scope
gsap.registerPlugin(ScrollTrigger);

/**
 * A React + Tailwind CSS port of the original GSAP ScrollTrigger demo.
 * --------------------------------------------------------------
 * Sections:
 *   - page2: green screen with the blue box that scales & rotates in.
 *   - page4: yellow‑green screen with two headings that slide in from opposite sides.
 *   - p1, p2, p3: wrapper sections to reproduce the original flow; p2 contains the giant
 *                 word that scrolls horizontally while pinned.
 */
const Scroll = () => {
  // Refs for animated elements
  const boxRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const p2SectionRef = useRef(null);
  const p2HeadingRef = useRef(null);

  useLayoutEffect(() => {
    // Create a GSAP context for scoping and easy cleanup on unmount
    const ctx = gsap.context(() => {
      // Box animation (page2)
      gsap.from(boxRef.current, {
        scale: 0,
        rotate: 360,
        duration: 2,
        scrollTrigger: {
          trigger: boxRef.current,
          scroller: "body",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
          markers: true,
        },
      });

      // Heading animations (page4)
      gsap.from(h1Ref.current, {
        opacity: 0,
        x: 500,
        duration: 2,
        scrollTrigger: {
          trigger: h1Ref.current,
          scroller: "body",
          start: "top 80%",
          end: "bottom 20%",
          markers: true,
        },
      });

      gsap.from(h2Ref.current, {
        opacity: 0,
        x: -500,
        duration: 2,
        scrollTrigger: {
          trigger: h2Ref.current,
          scroller: "body",
          start: "top 80%",
          end: "bottom 20%",
          markers: true,
        },
      });

      // Horizontal scroll of HUGE heading in p2 (pinned)
      gsap.to(p2HeadingRef.current, {
        xPercent: -150, // translateX(-150%)
        scrollTrigger: {
          trigger: p2SectionRef.current,
          scroller: "body",
          start: "top 0%",
          end: "top -150%",
          scrub: 2,
          markers: true,
          pin: true,
        },
      });
    });

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* page2 ----------------------------------------------------- */}
      <section
        id="page2"
        className="min-h-screen flex items-center justify-center bg-green-300"
      >
        <div ref={boxRef} className="h-72 w-72 bg-blue-600" />
      </section>

      {/* page4 ----------------------------------------------------- */}
      <section
        id="page4"
        className="min-h-screen flex flex-col items-center justify-center gap-12 bg-yellow-600"
      >
        <h1
          ref={h1Ref}
          className="relative px-4 py-2 text-6xl text-white bg-purple-800"
        >
          Pradeep
        </h1>
        <h2
          ref={h2Ref}
          className="relative px-4 py-2 text-6xl text-yellow-100 bg-blue-700"
        >
          Chaudhary
        </h2>
      </section>

      {/* p1 placeholder (black screen) ----------------------------- */}
      <section id="p1" className="min-h-screen bg-black" />

      {/* p2: pin + horizontal scroll ------------------------------ */}
      <section
        id="p2"
        ref={p2SectionRef}
        className="min-h-screen flex items-center bg-teal-600 overflow-hidden"
      >
        <h3
          ref={p2HeadingRef}
          className="text-[40vw] font-semibold uppercase whitespace-nowrap"
        >
          OverHORAA
        </h3>
      </section>

      {/* p3 placeholder (black screen) ----------------------------- */}
      <section id="p3" className="min-h-screen bg-black" />
    </main>
  );
};

export default Scroll;
