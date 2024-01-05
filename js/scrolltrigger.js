// GSAP Tween using MotionPath Plugin
var tween = gsap.to(".bug", {
  duration: 20,
  ease: "sine.out",
  motionPath: {
    curviness: 1.75,
    autoRotate: false,
    alignOrigin: [0.5, 0.5],
    path: [
      { x: 100, y: 20 },
      { x: 110, y: 20 },
      { x: 120, y: 19 },
      { x: 150, y: 17 },
      { x: 190, y: 16 },
      { x: 500, y: 15 },
      { x: 800, y: 14 },
      { x: window.innerWidth, y: 20 }
    ]
  },
  onUpdate: function () {
    // Get the current scroll position using window.scrollY
    var scrollPos = window.scrollY;

    if (scrollPos >= 300) {
      document.querySelector('.snail').classList.remove('hidden');
    } else {
      document.querySelector('.snail').classList.add('hidden');
    }

  }
});


// ScrollMagic - Controlling the animation from scroll
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  duration: 1000, // or window.innerHeight
  triggerElement: ".trigger-element",
  triggerHook: 0
})
  .setTween(tween)
  .setPin(".trigger-element")
  .addTo(controller);

