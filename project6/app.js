const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

const app = {
  handleEvents: function () {
    openBtn.onclick = function () {
      overlay.classList.add("open-modal");
    };
    closeBtn.onclick = function () {
      overlay.classList.remove("open-modal");
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
