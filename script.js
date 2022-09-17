const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
];

const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
};

let currentImage = null;
const leftArrowEl = document.getElementById("leftArrow");
const rightArrowEl = document.getElementById("rightArrow");

const createImages = () => {
  const containerEl = document.querySelector(".images-container");
  images.forEach((imageSrc) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imageSrc);
    containerEl.append(imgEl);
  });
};

createImages();

const setActiveImage = (targetImage, direction) => {
  currentImage = targetImage;
  const activeImgEl = document.querySelector(".images-container img.active");
  if (activeImgEl) {
    activeImgEl.classList.forEach((cssClass) => {
      if (cssClass.startsWith("animation-")) {
        activeImgEl.classList.remove(cssClass);
      }
    });
    if (direction === DIRECTIONS.LEFT) {
      activeImgEl.classList.add("animation-slide-to-left");
    } else if (direction === DIRECTIONS.RIGHT) {
      activeImgEl.classList.add("animation-slide-to-right");
    }
    activeImgEl.classList.remove("active");
  }
  const nextActiveEl = document.querySelector(`img[src="${currentImage}"]`);
  nextActiveEl.classList.add("active");
  if (direction === DIRECTIONS.LEFT) {
    nextActiveEl.classList.add("animation-slide-from-right");
  } else if (direction === DIRECTIONS.RIGHT) {
    nextActiveEl.classList.add("animation-slide-from-left");
  }
};

setActiveImage(images[0], DIRECTIONS.LEFT);

leftArrowEl.addEventListener("click", () => {
  let currentIndex = images.indexOf(currentImage);
  if (currentIndex - 1 < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  setActiveImage(images[currentIndex], DIRECTIONS.LEFT);
});

rightArrowEl.addEventListener("click", () => {
  let currentIndex = images.indexOf(currentImage);
  if (currentIndex + 1 === images.length) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setActiveImage(images[currentIndex], DIRECTIONS.RIGHT);
});
