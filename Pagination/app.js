const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
// const url = "https://randomuser.me/api/";

const getFollowers = async () => {
  const data = await fetch(url).then((res) => res.json());
  console.log(data);
};
const pagination = (followers) => {
  const itemsPerPage = 12;
  const numberPages = Math.ceil(followers.length / itemsPerPage);
};
