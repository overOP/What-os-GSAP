import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const A1 = () => {
    useGSAP(() => {
        gsap.to('.box', {
          y: 100,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        })
        gsap.from(".box #bx1", {
          y: 100,
          duration: 1,
          repeat: -1,
          rotate: 360,
          opacity: 0,
          yoyo: true,
          ease: "power2.inOut",
        }) 
      })
  return (
    <div>
            {/* nurmal */}
      <div className='box'>
      <div id='bx1'>
      </div>
      </div>
    </div>
  )
}

export default A1