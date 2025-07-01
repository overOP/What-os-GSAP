import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Timelain = () => {
  const panelRef = useRef(null);   // overlay panel
  const tlRef = useRef(null);      // GSAP timeline

  // Build the GSAP timeline once
  useEffect(() => {
    if (!panelRef.current) return;

    // gsap.context keeps selectors scoped & auto‑cleans on unmount
    const ctx = gsap.context(() => {
      tlRef.current = gsap
        .timeline({ paused: true })
        // Slide‑in overlay (panel starts with translate‑x‑full)
        .to(panelRef.current, {
          x: 0,
          duration: 0.6,
          ease: "power2.inOut",
        })
        // Stagger nav items
        .from(
          panelRef.current.querySelectorAll("h4"),
          {
            x: 150,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.inOut",
          },
          "<" // start with previous tween
        );
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  const openMenu = () => tlRef.current?.play();
  const closeMenu = () => tlRef.current?.reverse();

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://news.liverpool.ac.uk/wp-content/uploads/2020/09/clouds_web.jpg)",
      }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-8 text-lime-400">
        <h2 className="text-2xl font-semibold cursor-pointer transition-all duration-300 hover:tracking-wider">
          Pradeep
        </h2>
        <i
          className="ri-menu-3-line text-3xl cursor-pointer font-semibold"
          onClick={openMenu}
        ></i>
      </nav>

      {/* Sliding overlay */}
      <div
        ref={panelRef}
        className="absolute top-0 right-0 h-full w-full md:w-2/5 translate-x-full bg-[rgba(240,248,255,0.25)] backdrop-blur-lg p-24 flex flex-col gap-4"
      >
        {/* Close icon */}
        <i
          className="ri-close-line absolute top-6 right-10 bg-amber-200 rounded-full p-2 text-xl font-semibold cursor-pointer"
          onClick={closeMenu}
        ></i>

        {/* Menu items */}
        {[
          "Work",
          "About",
          "Contact",
          "Blog",
        ].map((label) => (
          <h4
            key={label}
            className="text-4xl font-medium text-white cursor-pointer hover:underline"
          >
            {label}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Timelain;
