const closeBtn = document.querySelector(".close-btn");
const images = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
const mainImg = document.querySelector(".main-img");
const modalList = document.querySelector(".modal-images");

const sectionCity = document.querySelector(".section.city");
const sectionNature = document.querySelector(".section.nature");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const app = {
  handleEvents: function () {
    const _this = this;
    images.forEach((img) => {
      img.onclick = function (e) {
        modal.classList.add("open");
        // mainImg.src = e.target.src;
        console.log(img.dataset.id);
        console.log(img.parentNode.classList[1]);
        if (img.parentNode.classList[1] === "city") {
          modalList.innerHTML = [...sectionCity.children]
            .map((item) => {
              return `
          <img src="${item.src}" title="${item.title}" data-id="${
                item.dataset.id
              }" class="${
                img.dataset.id === item.dataset.id
                  ? "modal-img selected"
                  : "modal-img"
              }"/>
          `;
            })
            .join("");
          [...modalList.children].forEach((item) => {
            if (item.classList.contains("selected")) {
              mainImg.src = e.target.src;
            }
          });
          const modalImgs = document.querySelectorAll(".modal-img");

          nextBtn.onclick = (e) => {
            const modalImgSelected = document.querySelector(
              ".modal-img.selected"
            );
            let currentIndex = modalImgSelected.dataset.id;
            currentIndex++;
            if (currentIndex > modalImgs.length) {
              currentIndex = 1;
            }
            console.log(currentIndex);
            modalImgs.forEach((item) => {
              if (currentIndex == item.dataset.id) {
                modalImgSelected.classList.remove("selected");
                item.classList.add("selected");
                mainImg.src = item.src;
              }
            });
          };
          prevBtn.onclick = (e) => {
            const modalImgSelected = document.querySelector(
              ".modal-img.selected"
            );
            let currentIndex = modalImgSelected.dataset.id;
            currentIndex--;
            if (currentIndex < 1) {
              currentIndex = modalImgs.length;
            }
            console.log(currentIndex);
            modalImgs.forEach((item) => {
              if (currentIndex == item.dataset.id) {
                modalImgSelected.classList.remove("selected");
                item.classList.add("selected");
                mainImg.src = item.src;
              }
            });
          };
          modalImgs.forEach((modalImg, index) => {
            modalImg.onclick = function (e) {
              console.log("currentIndex: ", currentIndex);
              console.log(modalImgs[index].dataset.id);
              console.log(e.target.dataset.id);
              const modalImgSelected = document.querySelector(
                ".modal-img.selected"
              );
              modalImgSelected.classList.remove("selected");
              if (modalImgs[index].dataset.id === e.target.dataset.id) {
                e.target.classList.add("selected");
                mainImg.src = e.target.src;
              }
            };
          });
        } else if (img.parentNode.classList[1] === "nature") {
          modalList.innerHTML = [...sectionNature.children]
            .map((item) => {
              return `
          <img src="${item.src}" title="${item.title}" data-id="${
                item.dataset.id
              }" class="${
                img.dataset.id === item.dataset.id
                  ? "modal-img selected"
                  : "modal-img"
              }"/>
          `;
            })
            .join("");
          [...modalList.children].forEach((item) => {
            if (item.classList.contains("selected")) {
              mainImg.src = e.target.src;
            }
          });
          const modalImgs = document.querySelectorAll(".modal-img");

          modalImgs.forEach((modalImg, index) => {
            modalImg.onclick = function (e) {
              console.log(modalImgs.length);
              console.log(currentIndex);
              console.log(e.target.dataset.id);
              const modalImgSelected = document.querySelector(
                ".modal-img.selected"
              );
              modalImgSelected.classList.remove("selected");
              if (modalImgs[index].dataset.id === e.target.dataset.id) {
                e.target.classList.add("selected");
                mainImg.src = e.target.src;
              }
            };
          });
        }
      };
    });
    closeBtn.onclick = function () {
      modal.classList.remove("open");
    };
  },
  changeImg: function () {},

  start: function () {
    this.handleEvents();
  },
};

app.start();
