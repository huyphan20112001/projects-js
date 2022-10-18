const allProductsUrl = "https://course-api.com/javascript-store-products";
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

let cart = [];

const toggleNavbar = document.querySelector(".toggle-nav");
const overlay = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".sidebar-close");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".cart-close");
const toggleCartBtn = document.querySelector(".toggle-cart");

toggleCartBtn.onclick = function () {
  cartOverlay.classList.add("show");
};
closeCartBtn.onclick = function () {
  cartOverlay.classList.remove("show");
};

toggleNavbar.onclick = function () {
  overlay.classList.add("show");
};
closeBtn.onclick = function () {
  overlay.classList.remove("show");
};

const getFollowers = async () => {
  const data = await fetch(allProductsUrl).then((res) => res.json());
  return data;
};
const handle = async () => {
  const followers = await getFollowers();
  const featureds = followers.filter(
    (follower) => follower.fields.featured === true
  );

  const renderFeatured = featureds.map((featured) => {
    const {
      id,
      fields: { name, price, image: img },
    } = featured;
    const image = img[0].thumbnails.large.url;

    return `
      <article class="product">
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
        <h4 class="product-price">$ ${price}</h4>
      </footer>
    </article>
    `;
  });
  document.querySelector(".section-center").innerHTML = renderFeatured.join("");

  const findProduct = (id) => {
    let product = followers.find((product) => product.id === id);
    return product;
  };

  const productCartItems = [...document.querySelectorAll(".product-cart-btn")];
  productCartItems.forEach((productCartItem) => {
    productCartItem.onclick = function () {
      cartOverlay.classList.add("show");
    };
  });

  const handleCart = (() => {
    const cartItemCount = document.querySelector(".cart-item-count");
    const cartTotal = document.querySelector(".cart-total");
    const cartItems = document.querySelector(".cart-items");

    const setUpCountItem = () => {
      const amount = cart.reduce((total, cartItem) => {
        console.log(cartItem.amount);
        return (total += cartItem.amount);
      }, 0);
      cartItemCount.innerText = amount;
    };
    setUpCountItem();

    const setUpTotal = () => {
      let total = cart.reduce((total, cartItem) => {
        return (total += cartItem.fields.price * cartItem.amount);
      }, 0);
      cartTotal.innerText = `$ ${total}`;
    };
    setUpTotal();

    const addToCart = (() => {
      productCartItems.map((productCartItem) => {
        productCartItem.onclick = function () {
          followers.map((follower) => {
            // let product = findProduct(follower.id);
            // product = { ...product, amount: 1 };
            // console.log(product);

            // console.log(cart);
            // cart = [...cart, product];
            // console.log(cart);
            follower = { ...follower, amount: 1 };
            if (productCartItem.dataset.id === follower.id) {
              console.log("cart", cart);
              cart.push(follower);
              console.log(cart);
              const html = cart.map((item) => {
                const {
                  id,
                  fields: { name, price, image: img },
                } = item;
                const image = img[0].thumbnails.large.url;
                console.log(image);
                return `
                <article class="cart-item" data-id="${id}">
                  <img src="${image}" class="cart-item-img" alt="${name}">  
                  <div>
                    <h4 class="cart-item-name">${name}</h4>
                    <p class="cart-item-price">$ ${price}</p>
                    <button class="cart-item-remove-btn" data-id="${id}">remove</button>
                  </div>
          
                  <div>
                    <button class="cart-item-increase-btn" data-id="${id}">
                      <i class="fas fa-chevron-up"></i>
                    </button>
                    <p class="cart-item-amount" data-id="${id}">1</p>
                    <button class="cart-item-decrease-btn" data-id="${id}">
                      <i class="fas fa-chevron-down"></i>
                    </button>
                    </div>
                </article>
                `;
              });
              cartItems.innerHTML = html.join("");
              setUpCountItem();
              setUpTotal();
            }
          });
        };
      });
    })();
  })();
};

handle();
