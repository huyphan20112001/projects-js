const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
// const url = "https://randomuser.me/api/";

const app = {
  handleEvents: function () {
    const getFollowers = async () => {
      const data = await fetch(url).then((res) => res.json());

      console.log(data);
      data.map((res) => {
        const { avatar_url } = res;
        console.log(avatar_url);
      });
    };
    getFollowers();
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
