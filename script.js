function llenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
llenis();

function scrollTrigger_Anim() {
  gsap.from(".-mn-pre-expander", {
    y: 60,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#elem2",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 3,
    },
  });

  gsap.from(".picture-hero-after", {
    y: 30,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#elem1",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });

  gsap.from(".swiper-para", {
    y: 30,
    opacity: 0,
    duration: 2,
    // ease: "bounce.out",
    scrollTrigger: {
      trigger: ".swiperInfoKeeper",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",

      scrub: 3,
    },
  });
}
scrollTrigger_Anim();

function gsap_anim() {
  // navlinks
  gsap.from("#nav-links-1", {
    x: -1100,
    opacity: 0,
    duration: 1.8,
    ease: "power2.out",
  });
  gsap.from("#nav-links-2", {
    y: -1100,
    opacity: 0,
    duration: 3,
    ease: "power2.out",
  });

  // nav anchor
  gsap.from("#nav-links-anchor", {
    y: -50,
    opacity: 0,
    duration: 2,
    ease: "bounce.out",
  });

  // nav tabs
  gsap.from(".sep-nav-tabs", {
    x: 1100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // gtafive svg Animation
  gsap.from("#mainAnim", {
    y: 110,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // gtafive h1 Animation
  gsap.from("#heroMainHeadingOfH1", {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
}
gsap_anim();

function swiper() {
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 500,
    effect: "fade",
    loop: true,
    clickable: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   type: "bullets",
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.enable();
  // Sidebars, Audio, etc. (Your existing code)...

  // Sidebars

  const moreBtns = document.querySelectorAll(".more-btn");
  const closeBtns = document.querySelectorAll(".close-btn");
  const boxContainers = document.querySelectorAll(".box-container");
  const body = document.querySelector("body");
  const mobileBoxes = document.querySelectorAll(".box-mobile");

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
      body.classList.add("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "none";
      });
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let modal = (btn.closest(".sidebar").style.display = "none");
      body.classList.remove("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "grid";
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("sidebar")) {
      e.target.style.display = "none";
      body.classList.remove("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "grid";
      });
    }
  });

  mobileBoxes.forEach((btn) => {
    btn.addEventListener("click", () => {
      let modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
      body.classList.add("prevent-background-scroll");
      boxContainers.forEach((container) => {
        container.style.display = "none";
      });
    });
  });
}
swiper();

function mainDisabler() {
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "C".charCodeAt(0)) {
      return false;
    }
  };

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
} //mainDisabler();

function gooeySher() {
  Shery.imageEffect("#p3-midea-data", {
    style: 5,
    config: {
      a: { value: 0.46, range: [0, 30] },
      b: { value: -0.95, range: [-1, 1] },
      zindex: { value: "9996999", range: [-9999999, 9999999] },
      aspect: { value: 1.9989452120624012 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.03, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.1, range: [0, 2], _gsap: { id: 3 } },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}
gooeySher();

function magnet() {
  Shery.makeMagnet(".magnet-target", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
magnet();
