const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let currentIndex = 0;

const app = {
  handleEvents: function () {
    const _this = this;
    slides.forEach(function (slide, index) {
      slide.style.left = `${index * 100}%`;
    });
    nextBtn.onclick = function () {
      currentIndex++;
      _this.showSlide();
    };
    prevBtn.onclick = function () {
      currentIndex--;
      _this.showSlide();
    };
  },
  showSlide: function () {
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    if (currentIndex < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (currentIndex > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
