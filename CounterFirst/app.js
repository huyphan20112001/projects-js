let count = 0;
const btnDecrease = document.querySelector(".decrease");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const value = document.querySelector("#value");

const app = {
  handleEvents: function () {
    btnDecrease.onclick = function () {
      count--;
      value.innerText = count;
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
    };
    btnIncrease.onclick = function () {
      count++;
      value.innerText = count;
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
    };
    btnReset.onclick = function () {
      count = 0;
      value.innerText = count;
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
