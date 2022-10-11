const app = {
  products: [
    {
      id: 1,
      title: "high-back bench",
      company: "ikea",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 9.99,
    },
    {
      id: 2,
      title: "albany table",
      company: "marcos",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 79.99,
    },
    {
      id: 3,
      title: "accent chair",
      company: "caressa",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 25.99,
    },
    {
      id: 4,
      title: "wooden table",
      company: "caressa",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80-1139785.jpg",
      price: 45.99,
    },
    {
      id: 5,
      title: "dining table",
      company: "caressa",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 6.99,
    },
    {
      id: 6,
      title: "sofa set",
      company: "liddy",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 69.99,
    },
    {
      id: 7,
      title: "modern bookshelf",
      company: "marcos",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 8.99,
    },
    {
      id: 8,
      title: "emperor bed",
      company: "liddy",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 21.99,
    },
    {
      id: 9,
      title: "utopia sofa",
      company: "marcos",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 39.95,
    },
    {
      id: 10,
      title: "entertainment center",
      company: "liddy",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 29.98,
    },
    {
      id: 11,
      title: "albany sectional",
      company: "ikea",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 10.99,
    },
    {
      id: 12,
      title: "leather sofa",
      company: "liddy",
      image:
        "https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 9.99,
    },
  ],
  renderContemt: function (menuItems) {
    const html = menuItems.map((item) => {
      return `
      <article class="product" data-id="${item.id}">
          <img
            src="${item.image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${item.title}</h5>
            <span class="product-price">${item.price}</span>
            </footer>
            </article>
            `;
    });
    document.querySelector(".products-container").innerHTML = html.join("");
  },
  renderTab: function () {
    const tabs = this.products.reduce(
      (values, item) => {
        if (!values.includes(item.company)) {
          values.push(item.company);
        }
        return values;
      },
      ["all"]
    );
    const tabBtn = tabs
      .map((tab) => {
        return `
        <button class='company-btn' data-id="${tab}">${tab}</button>`;
      })
      .join("");
    document.querySelector(".companies").innerHTML = tabBtn;
  },
  handleEvents: function () {
    const _this = this;
    const categories = document.querySelectorAll(".company-btn");
    categories.forEach((category) => {
      category.onclick = function (e) {
        const categoryId = e.target.dataset.id;
        const menuFilter = _this.products.filter((item) => {
          if (item.company === categoryId) {
            return item;
          }
        });
        if (categoryId === "all") {
          _this.renderContemt(_this.products);
        } else {
          _this.renderContemt(menuFilter);
        }
      };
    });
  },

  start: function () {
    this.renderContemt(this.products);
    this.renderTab();
    this.handleEvents();
  },
};

app.start();
