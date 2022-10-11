const app = {
  randomIndex: 1,
  people: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Phan Ba Huy",
      email: "vwb86884@nezid.com",
      age: "21",
      address: "Hue",
      phone: "0987654321",
      password: "huyphanba",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Phan Chi Tai",
      email: "csf56464@xcoxc.com",
      age: "21",
      address: "Hue",
      phone: "0987654321",
      password: "phanchitai",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Le Quang Bao Lam",
      email: "cos74863@nezid.com",
      age: "21",
      address: "Hue",
      phone: "0359845123",
      password: "lequangbaolam",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Nguyen Thien Giao",
      email: "yak88514@xcoxc.com",
      age: "21",
      address: "Hue",
      phone: "1234567890",
      password: "nguyenthiengiao",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Nguyen Minh Hoang",
      email: "dgo00297@nezid.com",
      age: "21",
      address: "Hue",
      phone: "0002221113",
      password: "nguyenminhhoang",
    },
  ],
  render: function () {
    const html = this.people.map((person) => {
      const iconActive = document.querySelector(".icon.active");
      console.log(iconActive.classList.contains("active"));
      if (this.randomIndex === person.id) {
        return `
      
        <img
          src="${person.img}"
          class="user-img"
          alt="user "
        />
        
        <p class="user-title">My ${iconActive.dataset.label} is</p>
        <p class="user-value">${person.name}</p>
        <div class="values-list">
          <!-- single icon -->
          <button class="icon active" data-label="name">
            <span class="far fa-user"></span>
          </button>
          <!-- end of icon -->
          <!-- single icon -->
          <button class="icon" data-label="email">
            <span class="far fa-envelope-open"></span>
          </button>
          <!-- end of icon -->
          <!-- single icon -->
          <button class="icon" data-label="age">
            <span class="far fa-calendar-times"></span>
          </button>
          <!-- end of icon -->
          <!-- single icon -->
          <button class="icon" data-label="street">
            <span class="far fa-map"></span>
          </button>
          <!-- end of icon -->
          <!-- single icon -->
          <button class="icon" data-label="phone">
            <span class="fas fa-phone"></span>
          </button>
          <!-- end of icon -->
          <!-- single icon -->
          <button class="icon" data-label="password">
            <span class="fas fa-user-lock"></span>
          </button>
          <!-- end of icon -->
        </div>
        <button class="btn" type="button">random user</button>`;
      }
    });
    document.querySelector(".container").innerHTML = html.join("");
  },
  handleEvents: function () {
    const icons = document.querySelectorAll(".icon");
    const randomBtn = document.querySelector(".btn");

    const _this = this;
    icons.forEach((icon) => {
      icon.onclick = function () {
        const iconActive = document.querySelector(".icon.active");
        console.log(icon.dataset.label);
        iconActive.classList.remove("active");
        icon.classList.add("active");
      };
    });
    randomBtn.onclick = function () {
      _this.randomIndex = Math.floor(Math.random() * _this.people.length) + 1;
      console.log(_this.randomIndex);
      _this.render();
      _this.handleEvents();
    };
  },

  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
