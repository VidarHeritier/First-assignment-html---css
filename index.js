// IMGS in fullscreen
function getPics() {}
const test = document.getElementsByClassName("test-imgs");
const imgs = document.querySelectorAll("#imgs div img");
const fullPage = document.querySelector("#fullpage");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
  });
});
console.log(test);

// Dropdown
