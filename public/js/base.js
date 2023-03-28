const menuBtn = document.querySelector(".menu-btn");
const menuBtnPlus = document.querySelector(".menu-btn span");
const mainNav = document.querySelector(".main-nav");
const nbElems = document.querySelectorAll(".nb");
const bgYElems = document.querySelectorAll(".bg-y");
const cols = document.querySelectorAll(".col");

// Array of letters to generate random letters in the grid boxes
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Setting letters for each column of grid
cols.forEach((col) => {
  col.textContent = letters[Math.trunc(Math.random() * 26)];
});

//Initially Removing no-border(nb) class from no-border elements of nav menu row (Will add back on toggling nav menu bar)
nbElems.forEach((el) => {
  el.classList.remove("nb");
});

// Initially Removing background-yellow(bg-y) class from yellow colured cols of nav menu row (Will add back on toggling nav menu bar)
bgYElems.forEach((el) => {
  el.classList.remove("bg-y");
});

// Aligning each row one after another in the grid
const rows = document.querySelectorAll(".row");
const desktopUnitHeight = 100 / 29;
const mobileUnitHeight = 100 / 30;

if (window.screen.width <= 800) {
  rows.forEach((el, i) => {
    el.style.top = `${i * mobileUnitHeight}vh`;
  });
} else {
  rows.forEach((el, i) => {
    el.style.top = `${i * desktopUnitHeight}vh`;
  });
}

// Menu button in Action
menuBtn.addEventListener("click", function () {
  //1. toggle rotatation of + symbol on menu btn
  menuBtnPlus.classList.toggle("rotatePlus");
  //2. Toggle hiding of nav list
  mainNav.classList.toggle("hide");
  //3. toggling no border class
  nbElems.forEach((el) => {
    el.classList.toggle("nb");
  });

  //4. toggling yellow bg class
  bgYElems.forEach((el) => {
    el.classList.toggle("bg-y");
    if (el.textContent) el.textContent = "";
    else el.textContent = letters[Math.trunc(Math.random() * 26)];
  });
});

// Slider Function
const sliderFunction = (
  slider,
  slides,
  currentSlide,
  rArrow = null,
  lArrow = null
) => {
  console.dir(`${slides[0]}`);
  // slider.style.height = `${getComputedStyle(slides[0]).height}`;
  // console.log(getComputedStyle(slides[0]).height);

  slides.forEach((slide, i) => [
    (slide.style.transform = `translateX(${i * 100}%)`),
  ]);

  const nextSlide = () => {
    // console.log("Calling nextSlide");
    console.log(currentSlide);
    if (currentSlide == slides.length - 1) return;

    // Fading arrow
    if (currentSlide == slides.length - 2) rArrow.style.opacity = 0.2;
    currentSlide++;

    // Removing fade from prev arrow
    lArrow.style.opacity == 0.2 ? (lArrow.style.opacity = 0.6) : null;

    // Slide moving right transform animation
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
  };
  const prevSlide = () => {
    // console.log("Calling prevSlide");
    // console.log(currentSlide);
    if (currentSlide == 0) return;

    if (currentSlide == 1) lArrow.style.opacity = 0.2;
    currentSlide--;

    rArrow.style.opacity == 0.2 ? (rArrow.style.opacity = 0.6) : null;
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
  };

  return [nextSlide, prevSlide];
};

// Footer title y-axis position helper code
const footerTitle = document.querySelector("footer .section-title");
const infoWrapper = document.querySelector("footer .info-wrapper");
