function page1(){
    let tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:1,
    ease:"power2.inOut",
    stagger:0.15
})


tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
    ease:"power2.inOut",
},"-=0.3")

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
    ease:"power2.inOut",
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
    ease:"power2.inOut",
})


tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    ease:"power2.inOut",
    x:200
},"-=0.7")//-1 means it will start 1 second before the animation

tl.from(".section1-bottom img",{
    opacity:0,
    y:30,
    duration:0.6,
    ease:"power2.inOut",
    stagger:0.15
})
}

page1();

function page2(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",  
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
    
    tl2.from(".service",{
        y:30,
        opacity:0,
        duration:0.5,
        ease:"power2.inOut",
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1,
        ease:"power2.inOut",
    },"over")
    
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1,
        ease:"power2.inOut",
    },"over")
    
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1,
        ease:"power2.inOut",
    },"pradeep")
    
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1,
        ease:"power2.inOut",
    },"pradeep")
}

page2();