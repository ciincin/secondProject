let cartList = [
  {
    id: 0,
    image: "assets/disney-sets/cabañaBlancanieves/cabaña600x450.webp",
    title: "Cabaña de Blancanieves y los Siete Enanitos",
    price: 219.99,
    amount: 1,
    emptyHeart: true,
    minAge: 18,
    pieces: 2228,
  },
  {
    id: 1,
    image: "assets/disney-sets/castilloDisney/disney417x600.webp",
    title: "Castillo Disney",
    price: 399.99,
    amount: 1,
    emptyHeart: true,
    minAge: 18,
    pieces: 4837,
  },
  {
    id: 2,
    image: "assets/disney-sets/frozen/frozen600x450.webp",
    title: "Palacio de Hielo de Elsa",
    price: 99.99,
    amount: 1,
    emptyHeart: true,
    minAge: 6,
    pieces: 630,
  },
  {
    id: 3,
    image: "assets/disney-sets/insideOut/insideOut600x400.webp",
    title: "Inside Out 2 Mood Cubes",
    price: 34.99,
    amount: 1,
    emptyHeart: true,
    minAge: 9,
    pieces: 394,
  },
  {
    id: 4,
    image: "assets/disney-sets/reyLeon/reyLeon600x450.webp",
    title: "El Rey León: Simba Cachorro",
    price: 19.99,
    amount: 1,
    emptyHeart: true,
    minAge: 6,
    pieces: 222,
  },
  {
    id: 5,
    image: "assets/disney-sets/sirenita/sirenita600x450.webp",
    title: "Mini Castillo de Disney Ariel",
    price: 39.99,
    amount: 1,
    emptyHeart: true,
    minAge: 12,
    pieces: 557,
  },
  {
    id: 6,
    image: "assets/disney-sets/stitch/stitch600x450.webp",
    title: "Stitch",
    price: 64.99,
    amount: 1,
    emptyHeart: true,
    minAge: 9,
    pieces: 730,
  },
  {
    id: 7,
    image: "assets/disney-sets/up/up600x450.webp",
    title: "Casa de Up",
    price: 54.99,
    amount: 1,
    emptyHeart: true,
    minAge: 9,
    pieces: 598,
  },
  {
    id: 8,
    image: "assets/disney-sets/wall-e/wall-e600x450.webp",
    title: "EVA y WALL•E",
    price: 14.99,
    amount: 1,
    emptyHeart: true,
    minAge: 10,
    pieces: 155,
  },
];

// D I S N E Y  S E T S //



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


