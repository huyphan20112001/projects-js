const decreaseBtns = document.querySelectorAll(".decrease");
const increaseBtns = document.querySelectorAll(".increase");
const resetBtns = document.querySelectorAll(".reset");
const firstValue = document.querySelector(".first-value");
const secondValue = document.querySelector(".second-value");

let firstCount = 0;
let secondCount = 0;

const app = {
  handleEvents: function () {
    decreaseBtns.forEach((decreaseBtn) => {
      decreaseBtn.onclick = function (e) {
        const decreaseBtnId = e.target.dataset.id;
        if (decreaseBtnId === "first-decrease") {
          firstCount--;
          firstValue.textContent = firstCount;
        } else if (decreaseBtnId === "second-decrease") {
          secondCount--;
          secondValue.textContent = secondCount;
        }
      };
    });
    increaseBtns.forEach((increaseBtn) => {
      increaseBtn.onclick = function (e) {
        const increaseBtnId = e.target.dataset.id;
        if (increaseBtnId === "first-increase") {
          firstCount++;
          firstValue.textContent = firstCount;
        } else if (increaseBtnId === "second-increase") {
          secondCount++;
          secondValue.textContent = secondCount;
        }
      };
    });
    resetBtns.forEach((resetBtn) => {
      resetBtn.onclick = function (e) {
        const resetBtnId = e.target.dataset.id;
        if (resetBtnId === "first-reset") {
          firstCount = 0;
          firstValue.textContent = firstCount;
        } else if (resetBtnId === "second-reset") {
          secondCount = 0;
          secondValue.textContent = secondCount;
        }
      };
    });
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
