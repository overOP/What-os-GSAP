import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Ste = () => {
  const [xV, setXv] = useState(0);
  const [yV, setYv] = useState(0);
  const randomX = gsap.utils.random(-500, 500, 100);
  const rotateX = gsap.utils.random(-360, 360, 30);
  const randomY = gsap.utils.random(-500, 500, 30);
  const [roti, setRoti] = useState(0);
  const imgRef = React.useRef();
  useGSAP(() => {
    gsap.to(imgRef.current, {
      x: xV,
      y: yV,
      duration: 0.6,
      rotate: roti,
    });
  }, {scope: "#net1", dependencies:[xV, rotateX, randomY]});
  return (
    <div id="net1">
      {/* <div ref={boxRef} className="box5"></div> */}
      <img
        onClick={() => {
          setXv(randomX);
          setRoti(rotateX);
          setYv(randomY);
        }}
        ref={imgRef}
        src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png"
      />
    </div>
  );
};

export default Ste;
