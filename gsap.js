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

const hueZ = [hueA, hueB, hueC, hueD, hueE, hueF, hueG, hueH, hueI];

ScrollTrigger.saveStyles(container);

gsap.defaults({
  overwrite: "auto",
});

ScrollTrigger.matchMedia({
  // large
  "(min-width: 960px)": function () {
    lockButtons.forEach((button, index) => {
      button.addEventListener("mousedown", (e) => {
        colorDivs[index].classList.toggle("locked");
        lockButtons[index].classList.add("active");
        if (
          lockButtons[index].classList.contains("active") &&
          colorDivs[index].classList.contains("locked")
        ) {
          button.innerHTML = `<span class="material-icons-sharp"> lock </span>`;
        } else if (
          !lockButtons[index].classList.contains("active") &&
          !colorDivs[index].classList.contains("locked")
        ) {
          button.innerHTML = `<span class="material-icons-sharp"> lock </span>`;
        } else if (
          !colorDivs[index].classList.contains("locked") &&
          !adjustButton[index].classList.contains("active")
        ) {
          button.innerHTML = `<span class="material-icons-sharp"> lock_open </span>`;
          lockButtons[index].classList.remove("active");
        } else {
          button.innerHTML = `<span class="material-icons-sharp"> lock_open </span>`;
        }
        // button.fix();
        button.blur();
        e.preventDefault();
      });
    });

    adjustButton.forEach((button, index) => {
      button.addEventListener("mousedown", (e) => {
        adjustButton[index].classList.toggle("active");
        sliderContainer[index].classList.toggle("active");
        if (!lockButtons[index].classList.contains("active")) {
          lockButtons[index].classList.add("active");
        } else if (colorDivs[index].classList.contains("locked")) {
          lockButtons[index].classList.add("active");
        } else {
          lockButtons[index].classList.remove("active");
        }
        // button.fix();
        button.blur();
        e.preventDefault();
      });
    });

    document.body.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        randomColors();
        hues[Math.floor(Math.random() * hues.length)]();
        sliderContainer.forEach((e) => e.classList.remove("active"));
        adjustButton.forEach((e) => e.classList.remove("active"));
        lockButtons.forEach((e) => {
          if (
            e.parentElement.parentElement.parentElement.classList.contains(
              "locked"
            )
          ) {
            e.classList.add("active");
          } else {
            e.classList.remove("active");
          }
        });
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
    }

    function changeGridTemplateRows(layout) {
      gsap.to(".container", {
        duration: 2,
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
    function hue10() {
      changeGridTemplateRows("3.3fr 1fr 1fr");
      changeGridTemplateColumns("3.3fr 1fr 1fr");
      sliderContainer.forEach((e) => e.classList.remove("active"));
      adjustButton.forEach((e) => e.classList.remove("active"));
      lockButtons.forEach((e) => {
        if (
          e.parentElement.parentElement.parentElement.classList.contains(
            "locked"
          )
        ) {
          e.classList.add("active");
        } else {
          e.classList.remove("active");
        }
      });
    }
    window.addEventListener("resize", hue10);
  },

  // medium
  "(min-width: 491px) and (max-width: 959px)": function () {
    document.body.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        randomColors();
        // window.addEventListener("resize", hue1); // handle resize
        hues[Math.floor(Math.random() * hues.length)]();
        sliderContainer.forEach((e) => e.classList.remove("active"));
        adjustButton.forEach((e) => e.classList.remove("active"));
        lockButtons.forEach((e) => {
          if (
            e.parentElement.parentElement.parentElement.classList.contains(
              "locked"
            )
          ) {
            e.classList.add("active");
          } else {
            e.classList.remove("active");
          }
        });
        e.preventDefault();
      }
    };
    const hues = [hue1, hue2, hue3, hue4, hue5, hue6, hue7, hue8];

    function changeGridTemplateRows(layout) {
      gsap.to(".container", {
        duration: 1,
        ease: "power3.out",
        gridTemplateRows: layout,
      });
    }

    function changeGridTemplateColumns(layout) {
      gsap.to(".container", {
        duration: 1,
        ease: "power3.out",
        gridTemplateColumns: layout,
      });
    }
    function resetColumns(layout) {
      gsap.to(".container", {
        duration: 0,
        gridTemplateColumns: layout,
      });
    }
    function resetRows(layout) {
      gsap.to(".container", {
        duration: 0,
        gridTemplateRows: layout,
      });
    }

    function hue1() {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("3fr 1fr");
    }
    function hue2() {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("1fr 3fr");
    }
    function hue3() {
      changeGridTemplateRows("1fr 2fr 1fr 1fr");
      changeGridTemplateColumns("3fr 1fr");
    }
    function hue4() {
      changeGridTemplateRows("1fr 2fr 1fr 1fr");
      changeGridTemplateColumns("1fr 3fr");
    }
    function hue5() {
      changeGridTemplateRows("1fr 1fr 2fr 1fr");
      changeGridTemplateColumns("2fr 1fr");
    }
    function hue6() {
      changeGridTemplateRows("1fr 1fr 2fr 1fr");
      changeGridTemplateColumns("1fr 3fr");
    }
    function hue7() {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("3fr 1fr");
    }
    function hue8() {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("1fr 3fr");
    }
    function hue8() {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("1fr 3fr");
    }
    function hue9() {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("3fr 1fr");
      // changeGridTemplateAreas("a", "b", "c");
    }

    hueZ.forEach((div) => {
      div.addEventListener("click", () => {
        sliderContainer.forEach((e) =>
          e != div ? e.classList.remove("active") : ""
        );
        adjustButton.forEach((e) =>
          e != div ? e.classList.remove("active") : ""
        );
        // lockButtons.forEach((e) =>
        //   e != div ? e.classList.remove("active") : ""
        // );
        lockButtons.forEach((e) => {
          if (
            e.parentElement.parentElement.parentElement.classList.contains(
              "locked"
            ) &&
            e != div
          ) {
            e.classList.add("active");
          } else {
            e.classList.remove("active");
          }
        });
      });
    });

    hueA.addEventListener("click", function () {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("3fr 1fr");
      sliderContainer[0].classList.add("active");
      adjustButton[0].classList.add("active");
      lockButtons[0].classList.add("active");
    });
    hueB.addEventListener("click", function () {
      changeGridTemplateRows("2fr 1fr 1fr 1fr");
      changeGridTemplateColumns("1fr 3fr");
      sliderContainer[1].classList.add("active");
      adjustButton[1].classList.add("active");
      lockButtons[1].classList.add("active");
    });
    hueC.addEventListener("click", function () {
      changeGridTemplateRows("1fr 2fr 1fr 1fr");
      changeGridTemplateColumns("3fr 1fr");
      sliderContainer[2].classList.add("active");
      adjustButton[2].classList.add("active");
      lockButtons[2].classList.add("active");
    });
    hueD.addEventListener("click", function () {
      changeGridTemplateRows("1fr 2fr 1fr 1fr");
      changeGridTemplateColumns("1fr 3fr");
      sliderContainer[3].classList.add("active");
      adjustButton[3].classList.add("active");
      lockButtons[3].classList.add("active");
    });
    hueE.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 2fr 1fr");
      changeGridTemplateColumns("2fr 1fr");
      sliderContainer[4].classList.add("active");
      adjustButton[4].classList.add("active");
      lockButtons[4].classList.add("active");
    });
    hueF.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 2fr 1fr");
      changeGridTemplateColumns("1fr 3fr");
      sliderContainer[5].classList.add("active");
      adjustButton[5].classList.add("active");
      lockButtons[5].classList.add("active");
    });
    hueG.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("3fr 1fr");
      sliderContainer[6].classList.add("active");
      adjustButton[6].classList.add("active");
      lockButtons[6].classList.add("active");
    });
    hueH.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 1fr 2fr");
      changeGridTemplateColumns("1fr 3fr");
      sliderContainer[7].classList.add("active");
      adjustButton[7].classList.add("active");
      lockButtons[7].classList.add("active");
    });
    window.addEventListener("resize", hue9);
  },

  // small
  "(max-width: 491px)": function () {
    document.body.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        randomColors();
        hues[Math.floor(Math.random() * hues.length)]();
        sliderContainer.forEach((e) => e.classList.remove("active"));
        adjustButton.forEach((e) => e.classList.remove("active"));
        lockButtons.forEach((e) => {
          if (
            e.parentElement.parentElement.parentElement.classList.contains(
              "locked"
            )
          ) {
            e.classList.add("active");
          } else {
            e.classList.remove("active");
          }
        });
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
    // function changeGridTemplateColumns(layout) {
    //   gsap.to(".container", {
    //     duration: 1.1,
    //     ease: "power3.out",
    //     gridTemplateColumns: layout,
    //   });
    // }
    function resetColumns(layout) {
      gsap.to(".container", {
        duration: 0,
        gridTemplateColumns: layout,
      });
    }
    function resetRows(layout) {
      gsap.to(".container", {
        duration: 0,
        gridTemplateRows: layout,
      });
    }

    function hue1() {
      changeGridTemplateRows("4fr 1fr 1fr 1fr 1fr 1fr");
    }
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
    function hue7() {
      resetRows("4fr 1fr 1fr 1fr 1fr 1fr");
      resetColumns("1fr");
      // changeGridTemplateAreas("a", "b", "c");
    }
    hueZ.forEach((div) => {
      div.addEventListener("click", () => {
        sliderContainer.forEach((e) =>
          e != div ? e.classList.remove("active") : ""
        );
        adjustButton.forEach((e) =>
          e != div ? e.classList.remove("active") : ""
        );
        lockButtons.forEach((e) => {
          if (
            e.parentElement.parentElement.parentElement.classList.contains(
              "locked"
            ) &&
            e != div
          ) {
            e.classList.add("active");
          } else {
            e.classList.remove("active");
          }
        });
      });
    });

    hueA.addEventListener("click", function () {
      changeGridTemplateRows("4fr 1fr 1fr 1fr 1fr 1fr");
      sliderContainer[0].classList.add("active");
      adjustButton[0].classList.add("active");
      lockButtons[0].classList.add("active");
    });
    hueB.addEventListener("click", function () {
      changeGridTemplateRows("1fr 4fr 1fr 1fr 1fr 1fr");
      sliderContainer[1].classList.add("active");
      adjustButton[1].classList.add("active");
      lockButtons[1].classList.add("active");
    });
    hueC.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 4fr 1fr 1fr 1fr");
      sliderContainer[2].classList.add("active");
      adjustButton[2].classList.add("active");
      lockButtons[2].classList.add("active");
    });
    hueD.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 1fr 4fr 1fr 1fr");
      sliderContainer[3].classList.add("active");
      adjustButton[3].classList.add("active");
      lockButtons[3].classList.add("active");
    });
    hueE.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 1fr 1fr 4fr 1fr");
      sliderContainer[4].classList.add("active");
      adjustButton[4].classList.add("active");
      lockButtons[4].classList.add("active");
    });
    hueF.addEventListener("click", function () {
      changeGridTemplateRows("1fr 1fr 1fr 1fr 1fr 4fr");
      sliderContainer[5].classList.add("active");
      adjustButton[5].classList.add("active");
      lockButtons[5].classList.add("active");
    });
    window.addEventListener("resize", hue7);
  },
  all: function () {},
});
