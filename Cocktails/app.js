const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const listProduct = document.querySelector(".section-center");
const loading = document.querySelector(".loading");

const fecthData = async function () {
  loading.innerHTML =
    '<img src="https://vannilla-js-basic-project-24-cocktails.netlify.app/loading.gif" alt="">';
  try {
    const data = await fetch(url).then((res) => res.json());
    loading.innerHTML = "";
    return data.drinks;
  } catch (error) {}
};
function renderProducts(list) {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { strDrink: title } = product;
      const { strDrinkThumb: img } = product;
      return `<a href="./drink.html" >
      <article class="cocktail" data-id="${id}" >
      <img src="${img}" alt="${title}" />
      <h3>${title}</h3>
      </article>
      </a>`;
    })
    .join("");
  listProduct.innerHTML = productList;
}

let drinks;
const get = async () => {
  const data = await fecthData();
  drinks = data;
  renderProducts(data);

  return data;
};
get();
console.log(drinks);

const form = document.querySelector(".search-form");
form.addEventListener("keyup", async function (e) {
  e.preventDefault();
  const input = form.querySelector("input");
  console.log(input);
  if (input) {
    const data = await fecthData();
    renderProducts(
      data.filter((product) => {
        return product.strDrink.includes(input.value);
      })
    );
  }
});
