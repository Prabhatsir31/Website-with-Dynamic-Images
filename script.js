var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
  "Img/bg1.png",
  "Img/bg2.png",
  "Img/bg3.png",
  "Img/bg4.png",
  "Img/bg5.png",
);

let i = 0;
next.onclick = function () {
  if (i < 4) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
    thumbnail[i + 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
};
prev.onclick = function () {
  if (i > 0) {
    hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
    thumbnail[i - 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
};