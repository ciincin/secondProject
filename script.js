// C A R T

let btnPromo = document.getElementById("cart-promo-button");
let iconArrow = document.getElementById("cart-icon");
let promoBox = document.getElementById("cart-promo-open");

let promoBoxIsOpen = false;
btnPromo.addEventListener("click", () => {
  if (promoBoxIsOpen) {
    iconArrow.classList.remove("rotate-up");
    iconArrow.classList.add("rotate-down");
    promoBox.classList.add("cart-display-none");
    promoBoxIsOpen = false;
  } else {
    iconArrow.classList.remove("rotate-down");
    iconArrow.classList.add("rotate-up");
    promoBox.classList.remove("cart-display-none");
    promoBoxIsOpen = true;
  }
});
