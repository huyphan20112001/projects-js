const toggleBtn = document.querySelector(".btn");
const app = {
  handleEvents: function () {
    toggleBtn.onclick = function () {
      document.documentElement.classList.toggle("dark-theme");
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
