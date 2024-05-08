// C A R T

let btnPromo = document.getElementById("cart-promo-button");
let iconArrow = document.getElementById("cart-icon-down");
let promoBox = document.getElementById("cart-promo-open");

let promoBoxIsOpen = false;
btnPromo.addEventListener("click", () => {
  if (promoBoxIsOpen) {
    iconArrow.classList.remove("bi-chevron-up");
    iconArrow.classList.add("bi-chevron-down");
    promoBox.classList.add("cart-display-none");
    promoBoxIsOpen = false;
  } else {
    iconArrow.classList.remove("bi-chevron-down");
    iconArrow.classList.add("bi-chevron-up");
    promoBox.classList.remove("cart-display-none");
    promoBoxIsOpen = true;
  }
});
