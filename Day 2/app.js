gsap.from("#page2 #box", {
    scale:0,
    duration: 2,
    rotate: 360,
    // scrollTrigger: "#page2 #box",
    scrollTrigger: {
        trigger: "#page2 #box", // Element that triggers the animation
        scroller: "body",// Use body as the scroller
        start: "top 80%", // Trigger when the top of the box reaches 80% of the viewport height
        end: "bottom 20%", // End when the bottom of the box reaches 20% of the viewport height
        scrub: 2, // Smooth scrubbing effect
        markers: true, // Enable markers for debugging
    }
})


gsap.from("#page4 h1", {
    opacity:0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page4 h1",
        sceoller: "body",
        markers: true,
        start: "top 80%",
        end: "bottom 20%",
    }
})
gsap.from("#page4 h2", {
    opacity:0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page4 h2",
        sceoller: "body",
        markers: true,
        start: "top 80%",
        end: "bottom 20%",
    }
})

gsap.to("#p2 h3", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#p2", // Element that triggers the animation
        scroller: "body", // Use body as the scroller
        start: "top 0%", // Trigger when the top of the h3 reaches 80% of the viewport height
        end: "top -150%", // End when the bottom of the h3 reaches 20% of the viewport height
        scrub: 2, // Smooth scrubbing effect
        markers: true, // Enable markers for debugging
        pin: true, // Pin the element during the scroll
    }
})