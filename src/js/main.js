// Atajos
const { readFileSync } = require("fs");

const posthtml = require("posthtml");
const include = require("posthtml-include");

const html = readFileSync("index.html");

posthtml([include({ encoding: "utf8" })])
  .process(html)
  .then((result) => console.log(result.html));

  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000, // Esto también configura el tiempo de reproducción automática
    },
  });