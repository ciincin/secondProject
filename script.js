// C A R T

//Promotion button

let btnPromo = document.getElementById("cart-promo-button");
let iconArrow = document.getElementById("cart-icon-down");
let promoBox = document.getElementById("cart-promo-open");

let promoBoxIsOpen = true;
btnPromo.addEventListener("click", () => {
  if (promoBoxIsOpen) {
    iconArrow.classList.remove("bi-chevron-down");
    iconArrow.classList.add("bi-chevron-up");
    promoBox.classList.add("display-none");
    promoBoxIsOpen=false;
  } else {
    iconArrow.classList.remove("bi-chevron-up");
    iconArrow.classList.add("bi-chevron-down");
    promoBox.classList.remove("display-none");
    promoBoxIsOpen=true;
  }
});

