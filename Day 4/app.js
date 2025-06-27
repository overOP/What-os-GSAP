let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imageDiv = document.querySelector("#image")

// javascript
// main.addEventListener("mousemove", function(event) {
//     let x = event.clientX - 10;
//     let y = event.clientY - 10;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// })


//gsap 1
// main.addEventListener("mousemove", function(event) {
//     let x = event.clientX - 10;
//     let y = event.clientY - 10;
//     gsap.to(cursor, {
//         duration: 0.2,
//         left: x + "px",
//         top: y + "px"
//     })
// })

//gsap 2
main.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x:event.x,
        y:event.y,
        duration: 0.5,
    })
})

imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "View Image";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    })
})
imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgb(255, 255, 255)",
    })
})