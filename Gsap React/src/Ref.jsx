import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Ref = () => {
    const gsapRef = useRef()
    useGSAP(() => {
      gsap.to(gsapRef.current, {
        x:2000,
        duration:2,
        delay:1,
        rotate:720,
        yoyo:true,
        repeat:-1
      })
    })

    const conmtainer = useRef()
    useGSAP(() => {
      gsap.from(".box4", {
        rotate:360,
        scale:0,
        duration:1,
        opacity:0,
        delay:0.5
      })
    }, {scope:conmtainer})
  return (
    <div>
              {/* Useing REF */}
      <div ref={gsapRef} className='box1'></div>
      <div id='net'>
    <div ref={conmtainer} className='container'>
      <div className='circle'></div>
      <div className='box4'></div>
    </div>
    <div className='kuch'>
      <div className='circle'></div>
      <div className='box4'></div>
    </div>
    </div>
    </div>
  )
}

export default Ref