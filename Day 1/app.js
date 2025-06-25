gsap.to("#box", {
    x: 100,
    duration: 2,
    delay:1,
    rotation: 360,
    scale: 1.5, // Scaling the box
    backgroundColor: "#ff0000",
    borderRadius: "50%",
    ease: "power1.inOut",
}) 


gsap.from("#box1", {
    opacity: 0,
    duration: 2,
    delay: 1,
    x: 100,
    rotation: 360,
    scale: 1.5,
    backgroundColor: "#ff0000",
    borderRadius: "50%",
    ease: "power1.inOut", // Initial properties for the box
})


gsap.fromTo("#box2", {
    opacity: 0,
    duration: 2,
    delay: 1,
    x: 100,
    rotation: 360,    
    scale: 1.5,    
    backgroundColor: "#ff0000",
    borderRadius: "50%",    
    ease: "power1.inOut",
}, {
    opacity: 1,
    x: 0,
    rotation: 0,
    scale: 1,
    backgroundColor: "#00ff00",
    borderRadius: "0%",
    duration: 2,
    delay: 1,
    ease: "power1.inOut",
})


gsap.timeline()
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
    })



gsap.set("#box4", {
    x: 100,
    rotation: 360,
    scale: 1.5,
    backgroundColor: "#ff0000",
    borderRadius: "50%",
    ease: "power1.inOut",
})

gsap.from("p", {
    opacity: 0, // Initial opacity for the paragraphs
    duration: 2,
    delay: 1,
    y: 50,
    ease: "power1.inOut", // Initial properties for the paragraphs
    stagger:1 // Staggering the animation for each paragraph
})


gsap.to("#box5", {
    x:100,
    duration: 2,
    delay: 1,
    rotation: 360,
    scale: 1.5,
    backgroundColor: "#ff0000",
    borderRadius: "50%",
    ease: "power1.inOut",
    repeat:-1, // Repeat the animation indefinitely
    yoyo:true // Reverse the animation on each repeat
})


let tl = gsap.timeline()

tl.from("h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

tl.from("h4", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.5, // Staggering the animation for each h4
})
tl.from("h3", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})