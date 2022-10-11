// console.log( prevBtn);
// prevBtn.addEventListener("click", function () {
//   console.log(123);
// });
const app = {
  currentReview: 1,
  data: [
    {
      id: 1,
      name: "Phan huy",
      job: "web developer",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Hello World",
    },
    {
      id: 2,
      name: "chi tai",
      job: "web designer",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Hello World",
    },
    {
      id: 3,
      name: "hung tran",
      job: "intern",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Hello World",
    },
    {
      id: 4,
      name: "abcn",
      job: "the boss",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Hello World ",
    },
  ],
  render: function () {
    const html = this.data.map((item) => {
      return this.currentReview === item.id
        ? `
      
      <article class="review">
          <div class="img-container">
            <img src=${item.img} id="person-img" alt="" />
          </div>
          <h4 id="author">${item.name}</h4>
          <p id="job">${item.job}</p>
          <p id="info">
           ${item.text}
          </p>
          <!-- prev next buttons-->
          <div class="button-container">
            <button class="prev-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <!-- random button -->
          <button class="random-btn">surprise me</button>
        </article>
      `
        : ``;
    });
    document.querySelector(".wrapper-review").innerHTML = html.join("");
    console.log("abc: ", this.currentReview);
  },

  handleEvents: function () {
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const randomBtn = document.querySelector(".random-btn");
    const _this = this;
    prevBtn.onclick = function () {
      console.log(123);
      _this.currentReview--;
      if (_this.currentReview < 1) {
        _this.currentReview = _this.data.length;
      }
      console.log(_this.currentReview);
      _this.render();
      _this.handleEvents();
    };
    nextBtn.onclick = function () {
      console.log("asdadasd");
      _this.currentReview++;
      if (_this.currentReview > _this.data.length) {
        _this.currentReview = 1;
      }
      console.log(_this.currentReview);
      _this.render();
      _this.handleEvents();
    };
    randomBtn.onclick = function () {
      _this.currentReview = Math.floor(Math.random() * _this.data.length) + 1;

      console.log(_this.currentReview);
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
