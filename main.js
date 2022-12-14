const listProjecs = document.querySelector(".list-projects");
console.log(listProjecs);

const app = {
  projects: [
    {
      id: 1,
      name: "Color Flipper",
      img: "./images/colorFlipper.png",
      page: "./colorFlipper/index.html",
    },
    {
      id: 2,
      name: "Counter First",
      img: "./images/CounterFirst.png",
      page: "./CounterFirst/index.html",
    },
    {
      id: 3,
      name: "Reviews",
      img: "./images/Review.png",
      page: "./project3/index.html",
    },
    {
      id: 4,
      name: "Narbar",
      img: "./images/Navbar.png",
      page: "./project4/index.html",
    },
    {
      id: 5,
      name: "Sidebar",
      img: "./images/Sidebar.png",
      page: "./project5/index.html",
    },
    {
      id: 6,
      name: "Modal",
      img: "./images/Modal.png",
      page: "./project6/index.html",
    },
    {
      id: 7,
      name: "Questions",
      img: "./images/Questions.png",
      page: "./project7/index.html",
    },
    {
      id: 8,
      name: "Menu",
      img: "./images/Menu.png",
      page: "./project8/index.html",
    },
    {
      id: 9,
      name: "Video",
      img: "./images/Video.png",
      page: "./project9/index.html",
    },
    {
      id: 10,
      name: "Scroll",
      img: "./images/Scroll.png",
      page: "./project10/index.html",
    },
    {
      id: 11,
      name: "Tabs",
      img: "./images/Tabs.png",
      page: "./project11/index.html",
    },
    {
      id: 12,
      name: "Lorem",
      img: "./images/Lorem.png",
      page: "./Lorem/index.html",
    },
    {
      id: 13,
      name: "Counter Second",
      img: "./images/CounterSecond.png",
      page: "./Counter/index.html",
    },
    {
      id: 14,
      name: "Gallery",
      img: "./images/Gallery.png",
      page: "./Gallery/index.html",
    },
    {
      id: 15,
      name: "Dark Mode",
      img: "./images/DarkTheme.png",
      page: "./DarkTheme/index.html",
    },
    {
      id: 16,
      name: "Filters",
      img: "./images/Filters.png",
      page: "./Filter/index.html",
    },
    {
      id: 17,
      name: "DadJoke",
      img: "./images/DadJoke.png",
      page: "./DadJoke/index.html",
    },
    {
      id: 18,
      name: "Products",
      img: "./images/Products.png",
      page: "./Products/index.html",
    },
    {
      id: 19,
      name: "Slider",
      img: "./images/Slider.png",
      page: "./Slider/index.html",
    },
    {
      id: 20,
      name: "CountDown",
      img: "./images/CountDown.png",
      page: "./Countdown/index.html",
    },
    {
      id: 21,
      name: "Grocery",
      img: "./images/Grocery.png",
      page: "./Grocery/index.html",
    },
    {
      id: 22,
      name: "SliderFirst",
      img: "./images/SliderFirst.png",
      page: "./SliderFirst/index.html",
    },
    {
      id: 23,
      name: "Cocktails",
      img: "./images/Cocktails.png",
      page: "./Cocktails/index.html",
    },
    {
      id: 24,
      name: "Wiki",
      img: "./images/Wiki.png",
      page: "./Wiki/index.html",
    },
    {
      id: 25,
      name: "RandomPerson",
      img: "./images/RandomPerson.png",
      page: "./RandomPerson/index.html",
    },
    {
      id: 26,
      name: "Number",
      img: "./images/Number.png",
      page: "./Number/index.html",
    },
    {
      id: 27,
      name: "Stripe",
      img: "./images/Stripe.png",
      page: "./Stripe/index.html",
    },
    {
      id: 28,
      name: "Pagination",
      img: "./images/Pagination.png",
      page: "./Pagination/index.html",
    },
    {
      id: 29,
      name: "Store",
      img: "./images/Store.png",
      page: "./Store/index.html",
    },
    {
      id: 30,
      name: "Form",
      img: "./images/Form.png",
      page: "./Form/index.html",
    },
  ],
  render: function () {
    const html = this.projects.map((project) => {
      return `
      <a
        href="${project.page}"
        target="_blank"
        class="project-item"
      >
        <div class="project-img">
          <img src="${project.img}" alt="" />
        </div>
        <footer class="project-footer">
          <h3>${project.name}</h3>
        </footer>
      </a>
      `;
    });
    listProjecs.innerHTML = html.join("");
  },
  start: function () {
    this.render();
  },
};
app.start();
