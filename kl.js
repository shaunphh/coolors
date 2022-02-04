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
