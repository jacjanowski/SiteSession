gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.to(".test", { opacity: 1, duration: 0.7, y: -50 });
tl.to(".test-2", { opacity: 1, duration: 1, y: 80 });
tl.to(".header-btn", { opacity: 1 });

$(document).ready(function () {
  //   var image = document.getElementsByClassName("thumbnail");
  //   new simpleParallax(image, {
  //     scale: 1.5,
  //   });
  $("#header-btn").click(function () {
    // Adjust the speed and offset as needed
    $("html, body").animate(
      {
        scrollTop: $("#services").offset().top,
      },
      150
    );
  });
  var rellax = new Rellax(".rellax", {
    speed: -2,
    horizontal: true,
  });
});
