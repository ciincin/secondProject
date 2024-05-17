let cartList = [
  {
    id: 0,
    image: "assets/disney-sets/cabañaBlancanieves/cabaña-600x450.webp",
    title: "Cabaña de Blancanieves y los Siete Enanitos",
    price: 219.99,
    amount: 1,
    emptyHeart: true,
    minAge: 18,
    pieces: 2228,
  },
  {
    id: 1,
    image: "assets/disney-sets/castilloDisney/disney-417x600.webp",
    title: "Castillo Disney",
    price: 399.99,
    amount: 1,
    emptyHeart: true,
    minAge: 18,
    pieces: 4837,
  },
  {
    id: 2,
    image: "assets/disney-sets/frozen/frozen-600x450.webp",
    title: "Palacio de Hielo de Elsa",
    price: 99.99,
    amount: 1,
    emptyHeart: true,
    minAge: 6,
    pieces: 630,
  },
  {
    id: 3,
    image: "assets/disney-sets/insideOut/insideOut-600x400.webp",
    title: "Inside Out 2 Mood Cubes",
    price: 34.99,
    amount: 1,
    emptyHeart: true,
    minAge: 9,
    pieces: 394,
  },
  {
    id: 4,
    image: "assets/disney-sets/reyLeon/reyLeon-600x450.webp",
    title: "El Rey León: Simba Cachorro",
    price: 19.99,
    amount: 1,
    emptyHeart: true,
    minAge: 6,
    pieces: 222,
  },
  {
    id: 5,
    image: "assets/disney-sets/sirenita/sirenita-600x450.webp",
    title: "Mini Castillo de Disney Ariel",
    price: 39.99,
    amount: 1,
    emptyHeart: true,
    minAge: 12,
    pieces: 557,
  },
  {
    id: 6,
    image: "assets/disney-sets/stitch/stitch-600x450.webp",
    title: "Stitch",
    price: 64.99,
    amount: 1,
    emptyHeart: true,
    minAge: 9,
    pieces: 730,
  },
  {
    id: 7,
    image: "assets/disney-sets/up/up-600x450.webp",
    title: "Casa de Up",
    price: 54.99,
    amount: 1,
    emptyHeart: true,
    minAge: 9,
    pieces: 598,
  },
  {
    id: 8,
    image: "assets/disney-sets/wall-e/walle-600x450.webp",
    title: "EVA y WALL•E",
    price: 14.99,
    amount: 1,
    emptyHeart: true,
    minAge: 10,
    pieces: 155,
  },
];

// D I S N E Y  S E T S //
const disneyLayout = document.getElementById("disney-set-layout")

function disneySetsTemplate(title, image, price, age, pieces){
  let disneyTemplateItem = `
  <div class="disney-card1">
                <div class="disney-card1-likeButton-banner"></div>
                <div class="disney-card1-imageSet-container">
                    <!-- aqui es donde va el carrousel -->
                    <img class="disney-card1-imageSet" src=${image}
                        alt=${title} />
                </div>
                <div class="disney-card1-infoSet-container">
                    <div class="disney-icon-container">
                        <img  class="disney-age-icon" src="assets/disney-sets/age-o.svg" alt="age-icon">
                    </div>
                    <div class="disney-textIcon-container">
                        <span class="disney-age-text">${age}+</span>
                    </div>
                    <div class="disney-icon-container">
                        <img  class="disney-age-icon" src="assets/disney-sets/brick-o.svg" alt="age-icon">
                    </div>
                    <div class="disney-textIcon-container">
                        <span class="disney-age-text">${pieces}</span>
                    </div>
                </div>
                <div class="disney-card1-titleSet-container">
                    <span>${title}</span>
                </div>
                <div class="disney-card1-priceSet-container">
                    <span><b>${price}</b><i class="bi bi-currency-euro"></i></span>
                </div>
                <div class="disney-card1-addToCart-container">
                    <button type="button" class="btn btn-primary disney-btn-addToCart">
                        <div class="disney-card1-addToCart-innerContainer">
                            <div class="disney-bagIcon-container">
                                <img  class="disney-bag-icon" src="assets/disney-sets/shopping-bag-o.svg" alt="age-icon">
                            </div>
                            <span class="disney-btn-addToCart-text">Añadir a la Bolsa</span>
                        </div>
                    </button>
                </div>
            </div>`;
            return disneyTemplateItem;
}

cartList.forEach(item => {
  disneyLayout.innerHTML += disneySetsTemplate(
    item.title,
    item.image,
    item.price,
    item.minAge,
    item.pieces
  )
})

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


