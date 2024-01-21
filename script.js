gsap.registerPlugin(ScrollTrigger);

$('form').submit(function(e){
  e.preventDefault();      
  
  $.ajax({
      method: 'POST',
      url: 'https://formsubmit.co/ajax/da20be16d94ef673ddf44846e133d8d9',
      dataType: 'json',
      accepts: 'application/json',
      data: {
          name: $("#name").val(),
          email: $("#email").val(),
          message: $("#message").val()
      },
      success: (data) => {$("#success").css("display", "block"), $("form").css("display", "none")},
      error: (err) => $("#failure").css("display", "block")
  });
})

let timeln = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    pin: true,
    pinSpacing: true,
    start: "left-=20px left",
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

timeln.from(".card-4", {
  xPercent: 75,
  opacity: 0,
});
timeln.addLabel("card4");

timeln.to(
  ".card-3",
  {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6,
  },
  "-=0.3"
);
timeln.to(".card-4", {
  xPercent: 0,
  opacity: 1,
});

const tlZoom = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-zoom",
    start: "top 20%",
    end: "bottom bottom",
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
    ".get-in-touch",
    {
      scale: 15,
    },
    0
  )
  .to([".circle", ".get-in-touch"], {
    opacity: 0,
  });

$(document).ready(function () {
  //   var image = document.getElementsByClassName("thumbnail");
  //   new simpleParallax(image, {
  //     scale: 1.5,
  //   });
  $("#header-btn, .next-button").click(function () {
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
