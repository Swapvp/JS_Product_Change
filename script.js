let img = document.querySelectorAll(".slides img");
let mainImg = document.querySelector("#product img");

img.forEach((e) => {
  e.addEventListener("mouseover", () => {
    mainImg.src = e.src;
  });
});

// mainImg.addEventListener("mouseover", () => {
//   mainImg.style.scale = "1.3";
// });
// mainImg.addEventListener("mouseleave", () => {
//   mainImg.style.scale = "1";
// });
