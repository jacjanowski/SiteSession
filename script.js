gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.to(".test", { opacity: 1, duration: 0.7, y: -50 });
tl.to(".test-2", { opacity: 1, duration: 1, y: 80 });
tl.to(".header-btn", { opacity: 1 });

let timeln = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    pin: true,
    pinSpacing: true,
    start: "left-=120px left",
    end: "+=2000",
    scrub: 1,
  },
});

timeln.addLabel("card1");
timeln.to(".card-1", {
  xPercent: 0,
  opacity: 1,
});

timeln.from(".card-2", {
  xPercent: 75,
  opacity: 0,
});
timeln.addLabel("card2");

timeln.to(
  ".card-1",
  {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5,
  },
  "-=0.3"
);

timeln.to(".card-2", {
  xPercent: 0,
  opacity: 1,
});

timeln.from(".card-3", {
  xPercent: 75,
  opacity: 0,
});
timeln.addLabel("card3");

timeln.to(
  ".card-2",
  {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6,
  },
  "-=0.3"
);

timeln.to(".card-3", {
  xPercent: 0,
  opacity: 1,
});

timeln.to(".card-3", {});

const tlZoom = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-zoom",
    start: "top top",
    end: "bottom center",
    pin: true,
    markers: true,
    pinSpacing: false,
    scrub: true,
  },
});
tlZoom
  .to(".circle", {
    scale: 10,
  })
  .to(
    "h1",
    {
      scale: 10,
    },
    0
  )
  .to([".circle", "h1"], {
    opacity: 0,
  });

$(document).ready(function () {
  //   var image = document.getElementsByClassName("thumbnail");
  //   new simpleParallax(image, {
  //     scale: 1.5,
  //   });
  $("#header-btn").click(function () {
    // Adjust the speed and offset as needed
    $("html, body").animate(
      {
        scrollTop: $(".services").offset().top,
      },
      150
    );
  });
  var rellax = new Rellax(".rellax", {
    speed: 6,
    horizontal: true,
  });
});
