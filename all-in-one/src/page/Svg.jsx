import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Svg = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [finalPath] = useState('M 10 100 Q 500 100 990 100');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const bounds = containerRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const newPath = `M 10 100 Q ${x} ${y} 990 100`;

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    const el = containerRef.current;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [finalPath]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] mt-12 bg-black flex justify-center items-center"
    >
      <svg width="1000" height="500" className="mt-80">
        <path
          ref={pathRef}
          d={finalPath}
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Svg;
