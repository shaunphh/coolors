//global selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll("h2");
const slides = document.getElementsByTagName("input");
const icons = document.querySelectorAll(".controls button");
const controls = document.querySelectorAll(".controls");
const popup = document.querySelector(".popup");
const sliderContainer = document.querySelectorAll(".sliders");
const adjustButton = document.querySelectorAll(".tune");
const lockButtons = document.querySelectorAll(".lock");

// ///sticky hover
// function fix() {
//   var el = this;
//   var par = el.parentNode;
//   var next = el.nextSibling;
//   par.removeChild(el);
//   setTimeout(function () {
//     par.insertBefore(el, next);
//   }, 0);
// }

let initalColors;

sliders.forEach((slider) => {
  slider.addEventListener(
    "mousemove",
    (e) => {
      hslControls(e);
      slider.blur();
    },
    { passive: true }
  );
});

colorDivs.forEach((div, index) => {
  div.addEventListener("change", () => {
    updateTextUI(index);
  });
});

currentHexes.forEach((hex) => {
  hex.addEventListener("click", () => {
    copyToClipboard(hex);
  });
});

popup.addEventListener("transitionend", () => {
  popup.classList.remove("active");
});

//functions
//color generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

let randomHex = generateHex();

function randomColors() {
  //set initalColor array
  initalColors = [];
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0].children[0];
    const randomColor = generateHex();

    //add to array/ check if locked
    if (div.classList.contains("locked")) {
      initalColors.push(hexText.innerText);
      return;
    } else {
      initalColors.push(chroma(randomColor).hex());
    }

    //add color to bg
    div.style.backgroundColor = randomColor;
    removeHash = randomColor.toString();
    hexText.innerText = removeHash.substr(1);
    checkTextContrast(randomColor, hexText);

    //icons
    const icons = div.querySelectorAll(".controls button");
    for (icon of icons) {
      checkTextContrast(randomColor, icon);
    }

    ///color values
    const values = div.querySelectorAll(".slider-container p");
    for (value of values) {
      checkTextContrast(randomColor, value);
    }
    const sliders = div.querySelectorAll(".sliders input");
    for (slider of sliders) {
      checkTextContrast1(randomColor, slider);
      newColor = slider.style.backgroundColor;
      slider.style.setProperty("--color", newColor);
      slider.style.backgroundColor = randomColor;
    }
  });
  //reset inputs
  resetInputs();
}

function checkTextContrast1(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.4) {
    text.style.background = color.darken(2.5);
  } else {
    text.style.background = color.brighten(2.5);
  }
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.4) {
    // text.style.color = "black";
    text.style.color = color.darken(3);
  } else {
    // text.style.color = "white";
    text.style.color = color.brighten(3);
  }
}

function hslControls(e) {
  const index =
    e.target.getAttribute("data-bright") ||
    e.target.getAttribute("data-sat") ||
    e.target.getAttribute("data-hue");
  let sliders = e.target.parentElement.querySelectorAll('input[type ="range"]');

  const hue = sliders[0];
  const brightness = sliders[1];
  const saturation = sliders[2];

  const bgColor = initalColors[index];

  let color = chroma(bgColor)
    .set("hsl.s", saturation.value)
    .set("hsl.l", brightness.value)
    .set("hsl.h", hue.value);

  colorDivs[index].style.backgroundColor = color;
  checkTextContrast(color, currentHexes[index]);

  const icons =
    e.target.parentElement.parentElement.parentElement.querySelectorAll(
      ".controls button"
    );

  for (icon of icons) {
    checkTextContrast(color, icon);
  }
  ///update value headings
  const values = e.target.parentElement.querySelectorAll(".slider-container p");

  for (value of values) {
    checkTextContrast(color, value);
  }
  ///update sliders
  for (slider of sliders) {
    checkTextContrast1(color, slider);
    newColor = slider.style.backgroundColor;
    slider.style.setProperty("--color", newColor);
    slider.style.backgroundColor = color;
  }
}

function updateTextUI(index) {
  const activeDiv = colorDivs[index];
  const color = chroma(activeDiv.style.backgroundColor);
  const textHex = activeDiv.querySelector("h2");
  textHex.innerText = color.hex().substr(1);
}

function resetInputs() {
  const sliders = document.querySelectorAll(".sliders input");
  sliders.forEach((slider) => {
    if (slider.name === "hue") {
      const hueColor = initalColors[slider.getAttribute("data-hue")];
      const hueValue = chroma(hueColor).hsl()[0];
      slider.value = Math.floor(hueValue);
    }
    if (slider.name === "brightness") {
      const brightColor = initalColors[slider.getAttribute("data-bright")];
      const brightValue = chroma(brightColor).hsl()[2];
      slider.value = Math.floor(brightValue * 100) / 100;
    }
    if (slider.name === "saturation") {
      const satColor = initalColors[slider.getAttribute("data-sat")];
      const satValue = chroma(satColor).hsl()[1];
      slider.value = Math.floor(satValue * 100) / 100;
    }
  });
}

function myfunc(e) {
  const newLeft = window.innerWidth && e.pageX - popup.offsetWidth / 2;
  popup.style.left = newLeft + "px";

  const newTop =
    window.innerHeight - e.pageY < popup.offsetHeight
      ? e.pageY - popup.offsetHeight
      : e.pageY;
  popup.style.top = newTop + "px";
}

function copyToClipboard(hex) {
  const el = document.createElement("textarea");
  el.value = hex.innerText;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  ///animation
  popup.classList.add("active");
  ///fix
  document.body.addEventListener("click", myfunc, { once: true });
}

// function openAdjustmentPanel(index) {
//   sliderContainer[index].classList.toggle("active");
// }

randomColors();
