const video = document.querySelector(".video-container");
const loading = document.querySelector(".preloader");
const switchBtn = document.querySelector(".switch-btn");

const app = {
  handleEvents: function () {
    window.onload = function () {
      loading.classList.add("hide-preloader");
    };
    switchBtn.onclick = function () {
      if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        video.pause();
      } else {
        switchBtn.classList.remove("slide");
        video.play();
      }
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
