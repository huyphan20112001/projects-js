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
