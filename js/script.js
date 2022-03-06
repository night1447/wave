const MobileButton = document.querySelector(".mobile-menu__button");
const MobileMenu = document.querySelector(".main-menu");
const closeButton = document.querySelector(".jsModalClose");
const ModalForm = document.querySelector(".modal-form");
const Preloader = document.querySelector(".preloader");
const Bar = document.querySelectorAll(".bar");

setTimeout((event) => {
  Preloader.classList.add("jsVisuallyHidden");
  Bar.forEach((item) => {
    item.classList.add("animationPause");
  });
}, 3000);

const ContactButton = document
  .querySelectorAll(".jsModalOpen")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      ModalForm.classList.toggle("jsVisuallyVisible");
    });
  });
closeButton.addEventListener("click", (event) => {
  ModalForm.classList.toggle("jsVisuallyVisible");
});

MobileButton.addEventListener("click", (events) => {
  MobileMenu.classList.toggle("jsVisuallyVisible");
  MobileButton.classList.toggle("jsAnimationMenu");
});

window.onclick = function (e) {
  if (e.target.className === "modal-form jsVisuallyVisible") {
    ModalForm.classList.toggle("jsVisuallyVisible");
  }
  if (e.target.className === "main-menu jsVisuallyVisible") {
    MobileMenu.classList.toggle("jsVisuallyVisible");
  }
};
