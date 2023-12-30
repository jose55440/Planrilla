const posthtml = require("posthtml");
const include = require("posthtml-include");
const Swiper = require("swiper/swiper-bundle.min.js");

// Assuming index.html is in the same directory as your main.js
const htmlPath = "index.html";

// Fetch the HTML content asynchronously
fetch(htmlPath)
  .then((response) => response.text())
  .then((html) => {
    // Process HTML using posthtml and posthtml-include
    return posthtml([include({ encoding: "utf8" })]).process(html);
  });

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  disabledClass: "swiper-button-disabled",
  enabled: true,
  hiddenClass: "swiper-button-hidden",
  hideOnClick: false,
  lockClass: "swiper-button-lock",
  navigationDisabledClass: "swiper-navigation-disabled",
  disableOnInteraction:true,
  pauseOnMouseEnter:false,
  reverseDirection:false,
  stopOnLastSlide:false,
  waitForTransition:true
});
document.querySelector("#next").addEventListener("click", function () {
  swiper.slideNext();
});
document.querySelector("#prev").addEventListener("click", function () {
  swiper.slidePrev();
});




