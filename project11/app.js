const about = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

const app = {
  handleEvents: function () {
    about.onclick = function (e) {
      const btnId = e.target.dataset.id;
      // console.log(btnId);
      if (btnId) {
        tabBtns.forEach((tabBtn) => {
          tabBtn.classList.remove("active");
        });
        e.target.classList.add("active");
        contents.forEach((content) => {
          content.classList.remove("active");
        });
        const id = document.getElementById(btnId);
        id.classList.add("active");
      }
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
