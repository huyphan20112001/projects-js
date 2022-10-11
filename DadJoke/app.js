const app = {
  randomIndex: 1,
  data: [
    {
      id: 1,
      content:
        "Taking ownership of your time means I only have this much time to live, I’d better make the most of it, I’d better make it alive time, I’d better be urgent, have a bit of an edge, be aware of each moment as it’s passing and not in a fog",
    },
    {
      id: 2,
      content:
        "And when we sincerely choose happiness as a governing principle of our lives, we quickly learn that circumstance has no inherent power. Any power that our life circumstance holds, is power that we give it. To borrow a line from one of my personal heroes, Viktor Frankl (Man’s Search for Meaning)",
    },
    {
      id: 3,
      content:
        "It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest. - Adam Smith",
    },
  ],
  render: function () {
    const html = this.data.map((item) => {
      if (this.randomIndex === item.id) {
        return `
      
      <p class="result">
         ${item.content}
        </p>`;
      }
    });
    document.querySelector(".container").innerHTML = html.join("");
  },
  handleEvents: function () {
    const _this = this;
    const randomBtn = document.querySelector(".btn");
    randomBtn.onclick = function () {
      _this.randomIndex = Math.floor(Math.random() * _this.data.length) + 1;
      _this.render();
    };
  },

  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
