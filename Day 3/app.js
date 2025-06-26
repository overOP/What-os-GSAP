let initialPath = `M 10 100 Q 500 100 990 100`;

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`,
    gsap.to("svg path", {
        attr: { d: initialPath },// Update the path attribute
        duration: 0.3,
        ease: "power3.Out"
    })
})

string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path", {
        attr: { d: finalPath },// Reset the path attribute
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
    })
})