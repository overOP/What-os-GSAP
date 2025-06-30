import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ConTex = () => {
  const boxRef = useRef();
  const { contexSafe } = useGSAP()
  const rotateBox = contexSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  })
  return (
    <div id="net1">
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box5">
        Box
      </div>
    </div>
  );
};

export default ConTex;
