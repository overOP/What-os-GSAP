import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mainRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const main = mainRef.current;
    const image = imageRef.current;

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleEnter = () => {
      cursor.innerHTML = 'View Image';
      gsap.to(cursor, {
        scale: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      cursor.innerHTML = '';
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#fff',
        ease: 'power2.out',
      });
    };

    main.addEventListener('mousemove', moveCursor);
    image.addEventListener('mouseenter', handleEnter);
    image.addEventListener('mouseleave', handleLeave);

    return () => {
      main.removeEventListener('mousemove', moveCursor);
      image.removeEventListener('mouseenter', handleEnter);
      image.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={mainRef}
      className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden"
    >
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 rounded-full bg-white text-[5px] flex items-center justify-center text-black z-50 pointer-events-none"
      ></div>

      <div
        ref={imageRef}
        className="relative w-[60vw] h-[30vw] overflow-hidden"
      >
        <div className="absolute inset-0 z-10 bg-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CustomCursor;
