const hueA = document.querySelector(".hue-a");
const hueB = document.querySelector(".hue-b");
const hueC = document.querySelector(".hue-c");
const hueD = document.querySelector(".hue-d");
const hueE = document.querySelector(".hue-e");
const hueF = document.querySelector(".hue-f");
const hueG = document.querySelector(".hue-g");
const hueH = document.querySelector(".hue-h");
const hueI = document.querySelector(".hue-i");
const container = document.querySelector(".container");

ScrollTrigger.matchMedia({
  // large
  "(min-width: 769px)": function () {
    document.body.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        randomColors();
        hues[Math.floor(Math.random() * hues.length)]();
        e.preventDefault();
      }
    };
    const hues = [hue1, hue2, hue3, hue4, hue5, hue6, hue7, hue8, hue9];

    function changeGridTemplateColumns(layout) {
      gsap.to(".container", {
        duration: 1.1,
        ease: "power3.out",
        gridTemplateColumns: layout,
      });
      console.log(layout);
    }

    function changeGridTemplateRows(layout) {
      gsap.to(".container", {
        duration: 2.4,
        ease: "circ.out",
        gridTemplateRows: layout,
      });
    }
    function hue1() {
      changeGridTemplateRows("3.3fr 1fr 1fr");
      changeGridTemplateColumns("3.3fr 1fr 1fr");
    }
    function hue2() {
      changeGridTemplateRows("3.3fr 1fr 1fr");
      changeGridTemplateColumns("1fr 3.3fr 1fr");
    }
    function hue3() {
      changeGridTemplateRows("3.3fr 1fr 1fr");
      changeGridTemplateColumns("1fr 1fr 3.3fr");
    }
    function hue4() {
      changeGridTemplateRows("1fr 3.3fr 1fr");
      changeGridTemplateColumns("3.3fr 1fr 1fr");
    }
    function hue5() {
      changeGridTemplateRows("1fr 3.3fr 1fr");
      changeGridTemplateColumns("1fr 3.3fr 1fr");
    }
    function hue6() {
      changeGridTemplateRows("1fr 3.3fr 1fr");
      changeGridTemplateColumns("1fr 1fr 3.3fr");
    }
    function hue7() {
      changeGridTemplateRows("1fr 1fr 3.3fr");
      changeGridTemplateColumns("3.3fr 1fr 1fr");
    }
    function hue8() {
      changeGridTemplateRows("1fr 1fr 3.3fr");
      changeGridTemplateColumns("1fr 3.3fr 1fr");
    }
    function hue9() {
      changeGridTemplateRows("1fr 1fr 3.3fr");
      changeGridTemplateColumns("1fr 1fr 3.3fr");
    }
  },

  // medium
  "(min-width: 491px) and (max-width: 768px)": function () {
    document.body.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        randomColors();
        hues[Math.floor(Math.random() * hues.length)]();
        e.preventDefault();
      }
    };
    const hues = [hue1, hue2, hue3, hue4, hue5, hue6, hue7, hue8];

    function changeGridTemplateColumns(layout) {
      gsap.to(".container", {
        duration: 1.1,
        ease: "power3.out",
        gridTemplateColumns: layout,
      });
      console.log(layout);
    }

    function changeGridTemplateRows(layout) {
      gsap.to(".container", {
        duration: 2.4,
        ease: "circ.out",
        gridTemplateRows: layout,
      });
    }

    function hue1() {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("2fr 1fr");
    }
    // console.log(hue1);
    function hue2() {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("1fr 2fr");
    }
    function hue3() {
      changeGridTemplateRows("1fr 2fr 1fr 1fr");
      changeGridTemplateColumns("2fr 1fr");
    }
    function hue4() {
      changeGridTemplateRows("1fr 2fr 1fr 1fr");
      changeGridTemplateColumns("1fr 2fr");
    }
    function hue5() {
      changeGridTemplateRows("1fr 1fr 2fr 1fr");
      changeGridTemplateColumns("2fr 1fr");
    }
    function hue6() {
      changeGridTemplateRows("1fr 1fr 2fr 1fr");
      changeGridTemplateColumns("1fr 2fr");
    }
    function hue7() {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("2fr 1fr");
    }
    function hue8() {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("1fr 2fr");
    }
  },

  // small
  "(max-width: 491px)": function () {
    document.body.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        randomColors();
        hues[Math.floor(Math.random() * hues.length)]();
        e.preventDefault();
      }
    };
    const hues = [hue1, hue2, hue3, hue4, hue5, hue6];

    function changeGridTemplateRows(layout) {
      gsap.to(".container", {
        duration: 1.1,
        ease: "power3.out",
        gridTemplateRows: layout,
      });
    }

    function hue1() {
      changeGridTemplateRows("4fr 1fr 1fr 1fr 1fr 1fr");
    }
    // console.log(hue1);
    function hue2() {
      changeGridTemplateRows("1fr 4fr 1fr 1fr 1fr 1fr");
    }
    function hue3() {
      changeGridTemplateRows("1fr 1fr 4fr 1fr 1fr 1fr");
    }
    function hue4() {
      changeGridTemplateRows("1fr 1fr 1fr 4fr 1fr 1fr");
    }
    function hue5() {
      changeGridTemplateRows("1fr 1fr 1fr 1fr 4fr 1fr");
    }
    function hue6() {
      changeGridTemplateRows("1fr 1fr 1fr 1fr 1fr 4fr");
    }
  },

  // all
  all: function () {},
});

// while (hues.length) {
//     const ndx = (Math.random() * hues.length) | 0;
//     const elem = hues.splice(ndx, 1)[0];
//     console.log(elem);
//   }

// hueA.addEventListener("click", function () {
//   changeGridTemplateRows("3.3fr 1fr 1fr");
//   changeGridTemplateColumns("3.3fr 1fr 1fr");
// });
// hueB.addEventListener("click", function () {
//   changeGridTemplateRows("3.3fr 1fr 1fr");
//   changeGridTemplateColumns("1fr 3.3fr 1fr");
// });
// hueC.addEventListener("click", function () {
//   changeGridTemplateRows("3.3fr 1fr 1fr");
//   changeGridTemplateColumns("1fr 1fr 3.3fr");
// });
// hueD.addEventListener("click", function () {
//   changeGridTemplateRows("1fr 3.3fr 1fr");
//   changeGridTemplateColumns("3.3fr 1fr 1fr");
// });
// hueE.addEventListener("click", function () {
//   changeGridTemplateRows("1fr 3.3fr 1fr");
//   changeGridTemplateColumns("1fr 3.3fr 1fr");
// });
// hueF.addEventListener("click", function () {
//   changeGridTemplateRows("1fr 3.3fr 1fr");
//   changeGridTemplateColumns("1fr 1fr 3.3fr");
// });
// hueG.addEventListener("click", function () {
//   changeGridTemplateRows("1fr 1fr 3.3fr");
//   changeGridTemplateColumns("3.3fr 1fr 1fr");
// });
// hueH.addEventListener("click", function () {
//   changeGridTemplateRows("1fr 1fr 3.3fr");
//   changeGridTemplateColumns("1fr 3.3fr 1fr");
// });
// hueI.addEventListener("click", function () {
//   changeGridTemplateRows("1fr 1fr 3.3fr");
//   changeGridTemplateColumns("1fr 1fr 3.3fr");
// });
// container.addEventListener("mouseleave", function () {
//   changeGridTemplateColumns("1fr 1fr 1fr");
//   changeGridTemplateRows("1fr 1fr 1fr");
// });

/* 9 things i want to do randomly 

function hueA(params) {
       changeGridTemplateRows("3.3fr 1fr 1fr");
    changeGridTemplateColumns("2fr 1fr 1fr");
}



*/
