let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.6,
    ease: "power2.inOut"
})
tl.from("#full h4", {
    x:150,
    duration:1,
    stagger:0.6,
    opacity:0,
    ease: "power2.inOut"
})

tl.from("#full i", {
    opacity:0,
})
tl.pause();

menu.addEventListener("click", function() {
    tl.play();
})
cross.addEventListener("click", function() {
    tl.reverse();
})