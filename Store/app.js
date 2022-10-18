const allProductsUrl = "https://course-api.com/javascript-store-products";
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const toggleNavbar = document.querySelector(".toggle-nav");
const overlay = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".sidebar-close");

toggleNavbar.onclick = function () {
  overlay.classList.add("show");
};
closeBtn.onclick = function () {
  overlay.classList.remove("show");
};

const fetchAllProducts = async () => {
  const data = await fetch(allProductsUrl).then((res) => res.json());
  return data;
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const showProducts = (products, feature, filters) => {
  feature.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return ` <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
           
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article> `;
    })
    .join("");
  // if (filters) return;
};
let store = getStorageItem("store");
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem("store", store);
};
const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    return response.json();
  }
  return response;
};

const init = async () => {
  const products = await fetchProducts();
  console.log(products);
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    showProducts(featured, document.querySelector(".featured-center"));
  }
};

window.addEventListener("DOMContentLoaded", init);
