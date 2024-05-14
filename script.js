// C A R T


// add/remove the same article
let amountItem = 1;

function decrease(id) {
  let input = document.getElementById(id);

  if (amountItem > 1) {
    amountItem--;
    input.value = amountItem;
  }
}

function increase(id) {
  let input = document.getElementById(id);

  amountItem++;

  input.value = amountItem;
}


//heart button

const btnHeart =document.getElementById("cart-btn-heart")
const heart = document.getElementById("cart-heart");
const wishList = document.getElementById("wish-list");

let heartIsNotFilled = true;
btnHeart.addEventListener("click", () => {
  if (heartIsNotFilled) {
    heart.classList.replace("bi-heart", "bi-heart-fill");
    wishList.textContent = `Quitar de la lista de deseos`;
    heartIsNotFilled = false;
  } else {
    heart.classList.replace("bi-heart-fill", "bi-heart");
    wishList.textContent = `Añadir a la lista de deseos`;
    heartIsNotFilled = true;
  }
});

//promo code button

const btnPromo = document.getElementById("cart-promo-button");
const iconArrow = document.getElementById("cart-icon");
const promoBox = document.getElementById("cart-promo-open");

let promoBoxIsClosed = true;
btnPromo.addEventListener("click", () => {
  promoBox.classList.toggle("cart-display-none");

  if (promoBoxIsClosed) {
    iconArrow.classList.replace("rotate-down", "rotate-up");
    promoBoxIsClosed = false;
  } else {
    iconArrow.classList.replace("rotate-up", "rotate-down");
    promoBoxIsClosed = true;
  }
});


