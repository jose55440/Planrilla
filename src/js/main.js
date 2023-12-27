const posthtml = require('posthtml');
const include = require('posthtml-include');
const Swiper = require('swiper/swiper-bundle.min.js');

// Assuming index.html is in the same directory as your main.js
const htmlPath = 'index.html';

// Fetch the HTML content asynchronously
fetch(htmlPath)
  .then((response) => response.text())
  .then((html) => {
    // Process HTML using posthtml and posthtml-include
    return posthtml([include({ encoding: 'utf8' })])
      .process(html);
  })
  .then((result) => {
    // Log the processed HTML
   

    // Initialize Swiper after processing HTML
    const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000, // 5000 milliseconds (5 seconds) - adjust as needed
      },
    });
  })
  .catch((error) => {
    console.error('Error processing HTML:', error);
  });