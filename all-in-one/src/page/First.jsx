import React, { useEffect } from "react";
import gsap from "gsap";


export default function First() {
  useEffect(() => {
    // Scope GSAP animations to this component only
    const ctx = gsap.context(() => {
      // === .to()
      gsap.to("#box", {
        x: 100,
        duration: 2,
        delay: 1,
        rotation: 360,
        scale: 1.5,
        backgroundColor: "#ff0000",
        borderRadius: "50%",
        ease: "power1.inOut",
      });

      // === .from()
      gsap.from("#box1", {
        opacity: 0,
        duration: 2,
        delay: 1,
        x: 100,
        rotation: 360,
        scale: 1.5,
        backgroundColor: "#ff0000",
        borderRadius: "50%",
        ease: "power1.inOut",
      });

      // === .fromTo()
      gsap.fromTo(
        "#box2",
        {
          opacity: 0,
          duration: 2,
          delay: 1,
          x: 100,
          rotation: 360,
          scale: 1.5,
          backgroundColor: "#ff0000",
          borderRadius: "50%",
          ease: "power1.inOut",
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          scale: 1,
          backgroundColor: "#00ff00",
          borderRadius: "0%",
          duration: 2,
          delay: 1,
          ease: "power1.inOut",
        }
      );

      // === timeline()
      gsap
        .timeline()
        .to("#box3", {
          opacity: 0,
          duration: 2,
          delay: 1,
          x: 100,
          rotation: 360,
          scale: 1.5,
          backgroundColor: "#ff0000",
          borderRadius: "50%",
          ease: "power1.inOut",
        })
        .to("#box3", {
          opacity: 1,
          x: 0,
          rotation: 0,
          scale: 1,
          backgroundColor: "#00ff00",
          borderRadius: "0%",
          duration: 2,
          delay: 1,
          ease: "power1.inOut",
        });

      // === gsap.set()
      gsap.set("#box4", {
        x: 100,
        rotation: 360,
        scale: 1.5,
        backgroundColor: "#ff0000",
        borderRadius: "50%",
        ease: "power1.inOut",
      });

      // === Staggered paragraphs
      gsap.from("#p p", {
        opacity: 0,
        duration: 2,
        delay: 1,
        y: 50,
        ease: "power1.inOut",
        stagger: 1,
      });

      // === Infinite yoyo
      gsap.to("#box5", {
        x: 100,
        duration: 2,
        delay: 1,
        rotation: 360,
        scale: 1.5,
        backgroundColor: "#ff0000",
        borderRadius: "50%",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // === Nav + heading entrance timeline
      const tl = gsap.timeline();
      tl.from("h2", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })
        .from("h4", {
          y: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.5,
        })
        .from("h3", {
          y: 20,
          opacity: 0,
          duration: 1,
          delay: 0.5,
        });
    });

    // Clean‑up animations on unmount
    return () => ctx.revert();
  }, []);

  const boxBase =
    "w-72 h-72 flex justify-center items-center rounded-lg shadow-lg border-2";

  return (
    <div className="relative min-h-screen bg-neutral-900 text-white font-poppins ">
      {/* ————————— NAVIGATION ————————— */}
      <nav
        id="nav"
        className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex justify-between items-center px-8 z-10"
      >
        <h2 className="text-2xl font-bold">GSAP</h2>
        <div id="part2" className="flex gap-12">
          {['Work', 'About', 'Contact', 'Blog'].map(label => (
            <h4 key={label} className="cursor-pointer hover:text-orange-400 transition-colors">
              {label}
            </h4>
          ))}
        </div>
      </nav>

      {/* ————————— HERO TEXT ————————— */}
      <h3 className="absolute mt-16 top-10 left-1/2 -translate-x-1/2 text-5xl whitespace-nowrap">
        Pradeep is a Web Developer
      </h3>

      {/* ————————— MAIN DEMO ————————— */}
      <main className="flex flex-col items-center pt-32 space-y-20">
        {/* .to() */}
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-orange-400 mb-6">to</h1>
          <div id="box" className={`${boxBase} bg-orange-600 border-orange-700`}></div>
        </section>

        {/* .from() */}
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-yellow-400 mb-6">from</h1>
          <div id="box1" className={`${boxBase} bg-yellow-400 border-yellow-500`}></div>
        </section>

        {/* .fromTo() */}
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-green-400 mb-6">fromTo</h1>
          <div id="box2" className={`${boxBase} bg-green-600 border-green-700`}></div>
        </section>

        {/* timeline().to */}
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-blue-400 mb-6">timeline().to</h1>
          <div id="box3" className={`${boxBase} bg-blue-400 border-blue-600`}></div>
        </section>

        {/* set */}
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-purple-400 mb-6">set</h1>
          <div id="box4" className={`${boxBase} bg-purple-600 border-purple-700`}></div>
        </section>

        {/* infinite yoyo */}
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-pink-400 mb-6">infinite yoyo</h1>
          <div id="box5" className={`${boxBase} bg-pink-500 border-pink-600`}></div>
        </section>
      </main>

      {/* ————————— CENTERED PARAGRAPHS ————————— */}
      <div
        id="p"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl flex flex-col items-center space-y-2"
      >
        <p>Pradeep</p>
        <p>Chaudhary</p>
        <p>Web Developer</p>
      </div>
    </div>
  );
}
