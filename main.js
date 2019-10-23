// Grabbing dom elements
var container = document.getElementById("container");
var logo = document.getElementById("logo");
var gradient = document.getElementById("gradient");
var bottle = document.getElementById("bottle");
var bubbleBox = document.getElementById("bubble_box");
var bubbles = document.getElementById("bubbles");
var ref = document.getElementById("ref");
var text1 = document.getElementById("text_1");
var text2 = document.getElementById("text_2");
var text3 = document.getElementById("text_3");
var cta = document.getElementById("cta");
// Creating greensock timeline
var tl = new TimelineMax();

//Click listener that takes user to craftww website when clicking anywhere inside box
container.addEventListener("click", function () {
  window.location = "https://www.craftww.com";
});

// Function for adding grow hover effect on cta button
function addHover(e) {
  cta.addEventListener("mouseover", function (e) {
    e.target.style.transform = "matrix(1.2, 0, 0, 1.2, 370, 0)";
  });

  cta.addEventListener("pointerleave", function (e) {
    e.target.style.transform = "matrix(1, 0, 0, 1, 370, 0)";
  });
}

// Greensock timeline events
// Logo rolling out
tl.to(logo, 0.7, { rotation: "0_cw", transformOrigin: "bottom left", ease: Power0.easeNone })
  .to(logo, 0.05, { y: "-=5", yoyo: true, repeat: 1 })
  // Logo spin reverse
  .to(logo, 0.8, { rotationY: 180, transformOrigin: "50%" }, "+=0.2")
  // Ring flash
  .to(gradient, 2, { background: "radial-gradient(#fff 0%, #8488ff 20%, #fff 50%)", scale: 15, opacity: 0 }, "-=0.25")
  // Logo spin back
  .to(logo, 0.8, { rotationY: 0, transformOrigin: "50%", background: "none" }, "-=1.6")
  // Logo fades to bottle
  .to(logo, 1, { opacity: 0 }, "+=1")
  .to(bottle, 2.5, { opacity: 1 }, "-=2")
  // Bottle scales down bubbles start when it gets centered
  .to(bottle, 0.7, { scale: 0.27, y: 90 })
  // Scale bubbles
  .to(bubbles, 0.4, { opacity: 0.2 })
  .to(bubbles, 3.3, { repeat: -1, ease: Power0.easeNone, y: -76 }, "-=0.4")
  // Text comes in
  .to(text1, 1, { x: -300 }, "-=3.6")
  .to(text2, 1, { x: -300 }, "-=0.7")
  // Bottle shake
  .to(bottle, 0.1, { rotation: 5, transformOrigin: "50%", yoyo: true, repeat: 3 }, "+=0.3")
  // Text leaves
  .to(text1, 1, { x: -600 }, "+=1.8")
  .to(text2, 1, { x: -600 }, "-=0.8")
  // Hashtag enters
  .to(text3, 1, { x: -300 }, "-=1")
  // Bottle and bubbles shrink
  .to(bottle, 0.5, { scale: 0.24, y: 70 }, "+=0.5")
  .to(bubbleBox, 0.5, { scale: 0.89, y: -22 })
  // Button comes in
  .to(cta, 1, { x: 370, onComplete: addHover }, "-=1.2");
