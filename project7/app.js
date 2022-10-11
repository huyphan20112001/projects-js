// const questions = document.querySelector(".question")
const questionsTitle = document.querySelectorAll(".question-title");

const app = {
  handleEvents: function () {
    questionsTitle.forEach((questionTitle) => {
      questionTitle.addEventListener("click", () => {
        questionTitle.parentNode.classList.toggle("show-text");
      });
    });
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
