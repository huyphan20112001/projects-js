const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const app = {
  products: [
    {
      id: "rec43w3ipXvP28vog",
      fields: {
        company: "ikea",
        colors: ["#f15025", "#222"],
        featured: true,
        price: 999,
        name: "high-back bench",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attcvDDMikF6G2iNi",
            width: 1000,
            height: 639,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            filename: "product-1.jpeg",
            size: 62864,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 56,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 801,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "rec4f2RIftFCb7aHh",
      fields: {
        company: "marcos",
        colors: ["#f15025", "#222"],
        price: 7999,
        name: "albany table",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attP2cUyxU35M1zbw",
            width: 1000,
            height: 1500,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            filename: "product-1.jpeg",
            size: 119274,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 24,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 512,
                height: 768,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "rec8kkCmSiMkbkiko",
      fields: {
        company: "caressa",
        colors: ["#222", "#0000ff", "#f15025"],
        price: 2599,
        name: "accent chair",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attIieysyB9zQmQo9",
            width: 1000,
            height: 667,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-4.jpeg",
            filename: "product-4.jpeg",
            size: 49641,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 54,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 768,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recBohCqQsot4Q4II",
      fields: {
        company: "caressa",
        colors: ["#ff0000", "#0000ff"],
        price: 4599,
        name: "wooden table",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attXaEED3KJcY2cjY",
            width: 1280,
            height: 1891,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/pexels-dominika-roseclay-1139785.jpg",
            filename: "pexels-dominika-roseclay-1139785.jpg",
            size: 203105,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 24,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 512,
                height: 756,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recDG1JRZnbpRHpoy",
      fields: {
        company: "caressa",
        colors: ["#ff0000", "#f15025"],
        price: 699,
        name: "dining table",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attxkKEEgmBnutpwI",
            width: 1280,
            height: 1858,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-8.jpg",
            filename: "product-8.jpg",
            size: 281908,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 25,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 512,
                height: 743,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recNWGyP7kjFhSqw3",
      fields: {
        company: "liddy",
        colors: ["#0000ff"],
        price: 6999,
        name: "sofa set",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "att5iyl4TJvd3oepN",
            width: 1000,
            height: 625,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            filename: "product-1.jpeg",
            size: 56151,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 58,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 819,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recZEougL5bbY4AEx",
      fields: {
        company: "marcos",
        colors: ["#00ff00", "#f15025", "#ff0000"],
        price: 899,
        name: "modern bookshelf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attDj1C6GxJMsJ1he",
            width: 1280,
            height: 720,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-7.jpg",
            filename: "product-7.jpg",
            size: 162415,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 64,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 910,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recjMK1jgTb2ld7sv",
      fields: {
        company: "liddy",
        colors: ["#f15025"],
        price: 2199,
        name: "emperor bed",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attiwrd7gSI1oGxRK",
            width: 1280,
            height: 720,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-6.jpg",
            filename: "product-6.jpg",
            size: 178908,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 64,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 910,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recmg2a1ctaEJNZhu",
      fields: {
        company: "marcos",
        colors: ["#00ff00", "#0000ff"],
        featured: true,
        price: 3995,
        name: "utopia sofa",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attqutUt355traBeS",
            width: 1280,
            height: 846,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-3.jpg",
            filename: "product-3.jpg",
            size: 196312,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 54,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 775,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recvKMNR3YFw0bEt3",
      fields: {
        company: "liddy",
        colors: ["#ff0000", "#00ff00"],
        featured: true,
        price: 2998,
        name: "entertainment center",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "atttOzyYI8P1XfJu8",
            width: 1280,
            height: 924,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-2.jpg",
            filename: "product-2.jpg",
            size: 195175,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 50,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 709,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recxaXFy5IW539sgM",
      fields: {
        company: "ikea",
        colors: ["#00ff00", "#ff0000"],
        price: 1099,
        name: "albany sectional",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attjWNxk7KKzcLPDx",
            width: 1000,
            height: 652,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            filename: "product-1.jpeg",
            size: 61946,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 55,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 785,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
    {
      id: "recyqtRglGNGtO4Q5",
      fields: {
        company: "liddy",
        colors: ["#222"],
        price: 999,
        name: "leather sofa",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: [
          {
            id: "attnZHyyOUTBzJ1ZD",
            width: 1280,
            height: 960,
            url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80/product-5.jpg",
            filename: "product-5.jpg",
            size: 189559,
            type: "image/jpeg",
            thumbnails: {
              small: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 48,
                height: 36,
              },
              large: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 683,
                height: 512,
              },
              full: {
                url: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                width: 3000,
                height: 3000,
              },
            },
          },
        ],
      },
    },
  ],
  render: function () {
    const html = this.products.map((product) => {
      console.log(id);
      console.log(product.id);
      if (id === product.id) {
        const img = product.fields.image[0].url;
        return `
        <div class="product-wrapper">
        <img src="${img}" class="img" alt="${product.id}" />
        <div class="product-info">
          <h3>${product.fields.name}</h3>
          <h5>${product.fields.company}</h5>
          <span>${product.fields.price / 100}</span>
          <div class="colors">
            ${product.fields.colors}
            
          </div>
          <p>
           ${product.fields.description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>
        `;
      }
    });
    document.querySelector(".product").innerHTML = html.join("");
  },
  handleEvents: function () {},
  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
