// GSAP Tween using MotionPath Plugin
var tween = gsap.to(".bug", {
  duration: 20,
  ease: "sine.out",
  motionPath: {
    curviness: 1.75,
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    path: [
      { x: 100, y: -20 },
      { x: 350, y: 20 },
      { x: 500, y: -20 },
      { x: 400, y: 50 },
      { x: 500, y: -50 },
      { x: 700, y: -10 },
      { x: 900, y: 50 },
      { x: window.innerWidth, y: 100 }
    ]
  }
});

// ScrollMagic - Controlling the animation from scroll
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  duration: 8000, // or window.innerHeight
  triggerElement: ".trigger-element",
  triggerHook: 0
})
  .setTween(tween)
  .setPin(".trigger-element")
  .addTo(controller);

