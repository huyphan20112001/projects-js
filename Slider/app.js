const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const app = {
  currentIndex: 1,
  people: [
    {
      id: 1,
      name: "Phan Ba Huy",
      career: "Student",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      id: 2,
      name: "Phan Chi Tai",
      career: "Student",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      id: 3,
      name: "Le Quang Bao Lam",
      career: "Student",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      id: 4,
      name: "Nguyen Thien Giao",
      career: "Student",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      id: 5,
      name: "Nguyen Minh Hoang",
      career: "Student",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?",
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
  ],
  render: function () {
    const html = this.people.map((person) => {
      if (this.currentIndex === person.id) {
        return `
     <article class="slide active">
      <img
        src="${person.src}"
        class="img"
        alt="${person.name}"
      />
      <h4>${person.name}</h4>
      <p class="title">${person.career}</p>
      <p class="text">
        ${person.description}
      </p>
      <div class="quote-icon">
        <i class="fas fa-quote-right"></i>
      </div>
    </article>
      `;
      }
    });
    document.querySelector(".slide-container").innerHTML = html.join("");
  },
  handleEvents: function () {
    const _this = this;
    prevBtn.onclick = function () {
      _this.currentIndex--;
      if (_this.currentIndex < _this.people.length) {
        _this.currentIndex = _this.people.length;
      }
      _this.render();
    };
    nextBtn.onclick = function () {
      _this.currentIndex++;
      if (_this.currentIndex > _this.people.length) {
        _this.currentIndex = 1;
      }
      _this.render();
    };
  },

  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
