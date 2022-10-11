const menuMobile = document.querySelector(".nav-toggle");
const menuList = document.querySelector(".links-container");
const links = document.querySelector(".links");

const app = {
  handleEvents: function () {
    menuMobile.onclick = function () {
      const linksHeight = links.getBoundingClientRect().height;
      const menuListHeight = menuList.getBoundingClientRect().height;
      menuListHeight === 0
        ? (menuList.style.height = `${linksHeight}px`)
        : (menuList.style.height = 0);
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
