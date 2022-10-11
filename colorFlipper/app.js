const colors = ["red", "blue", "yellow", "black", "puple"];
const clickBtn = document.querySelector(".btn");
const currentColor = document.querySelector(".color");

const app = {
  handleEvents: function () {
    clickBtn.onclick = function () {
      const number = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[number];
      currentColor.innerText = colors[number];
    };
  },
  start: function () {
    this.handleEvents();
  },
};

app.start();
