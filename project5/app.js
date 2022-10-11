const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

const app = {
  handleEvents: function () {
    sidebarToggle.onclick = function () {
      sidebar.classList.toggle("show-sidebar");
    };
    closeBtn.onclick = function () {
      sidebar.classList.remove("show-sidebar");
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
