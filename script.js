const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
]

let currentImage = null;
const activeImgEl = document.getElementById('activeImage');
const leftArrowEl = document.getElementById('leftArrow');
const rightArrowEl = document.getElementById('rightArrow');


const setActiveImage = (targetImage) => {
  currentImage = targetImage;
  console.log("🚀 ~ file: script.js ~ line 16 ~ setActiveImage ~ currentImage", currentImage)
  activeImgEl.setAttribute('src', targetImage);
}

setActiveImage(images[3])

leftArrowEl.addEventListener('click', () => {
  let currentIndex = images.indexOf(currentImage);
  if (currentIndex - 1 < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  setActiveImage(images[currentIndex])
})

rightArrowEl.addEventListener('click', () => {
  let currentIndex = images.indexOf(currentImage);
  if (currentIndex + 1 === images.length) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setActiveImage(images[currentIndex])
})
