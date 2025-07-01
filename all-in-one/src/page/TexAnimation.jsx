import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * TexAnimation – animated split‑color title
 * -----------------------------------------
 * Props:
 *   ▸ text  (string) – title to animate (default: "Pradeep")
 *   ▸ size  (string) – Tailwind text‑size class (default: "text-8xl md:text-[100px]")
 *
 * Requirements:
 *   ▸ Tailwind v3+ (for arbitrary size) or change the `size` prop to a standard TA class.
 *   ▸ GSAP (`npm i gsap`).
 *
 * How it works:
 *   1. Split the word into letters.
 *   2. First half gets class `.letterA`, second half `.letterB`.
 *   3. GSAP animates both groups with opposite staggers.
 */
const TexAnimation = ({ text = "Pradeep", size = "text-8xl md:text-[100px]" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limit selectors to this component only
    const ctx = gsap.context(() => {
      gsap.from(".letterA", {
        y: 50,
        duration: 0.6,
        delay: 0.4,
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.15,
      });

      gsap.from(".letterB", {
        y: 50,
        duration: 0.6,
        delay: 0.4,
        opacity: 0,
        ease: "power1.inOut",
        stagger: -0.15,
      });
    }, containerRef); // scope selectors!

    return () => ctx.revert();
  }, []);

  const half = Math.ceil(text.length / 2);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#111] select-none">
      <h1
        ref={containerRef}
        className={`overflow-hidden font-sans leading-none ${size} text-white`}
      >
        {[...text].map((char, idx) => (
          <span
            key={idx}
            className={`inline-block ${
              idx < half ? "letterA text-red-500" : "letterB text-green-500"
            }`}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TexAnimation;