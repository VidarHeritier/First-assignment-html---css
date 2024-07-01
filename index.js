// IMGS in fullscreen

const imgs = document.querySelectorAll("#imgs div img");
const fullPage = document.querySelector("#fullpage");

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  fullPage.style.backgroundImage = "url(" + imgs[index].src + ")";
  fullPage.style.display = "block";
}

imgs.forEach((img, index) => {
  img.addEventListener("click", function () {
    showImage(index);
  });
});

document.addEventListener("keydown", function (e) {
  if (fullPage.style.display === "block") {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
      showImage(currentIndex);
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % imgs.length;
      showImage(currentIndex);
    } else if (e.key === "Escape") {
      fullPage.style.display = "none";
    }
  }
});

fullPage.addEventListener("click", function (e) {
  if (e.target === fullPage) {
    fullPage.style.display = "none";
  }
});

let startX;
fullPage.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

fullPage.addEventListener("touchend", function (e) {
  let endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    currentIndex = (currentIndex + 1) % imgs.length;
    showImage(currentIndex);
  } else if (startX < endX - 50) {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    showImage(currentIndex);
  }
});
