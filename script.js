let cartList = [
  {
    id: 0,
    image: "assets/disney-sets/cabañaBlancanieves/cabaña600x450.webp",
    title: "Cabaña de Blancanieves y los Siete Enanitos",
    price: 219.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 1,
    image: "assets/disney-sets/castilloDisney/disney417x600.webp",
    title: "Castillo Disney",
    price: 399.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 2,
    image: "assets/disney-sets/frozen/frozen600x450.webp",
    title: "Palacio de Hielo de Elsa",
    price: 99.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 3,
    image: "assets/disney-sets/insideOut/insideOut600x400.webp",
    title: "Inside Out 2 Mood Cubes",
    price: 34.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 4,
    image: "assets/disney-sets/reyLeon/reyLeon600x450.webp",
    title: "El Rey León: Simba Cachorro",
    price: 19.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 5,
    image: "assets/disney-sets/sirenita/sirenita600x450.webp",
    title: "Mini Castillo de Disney Ariel",
    price: 39.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 6,
    image: "assets/disney-sets/stitch/stitch600x450.webp",
    title: "Stitch",
    price: 64.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 7,
    image: "assets/disney-sets/up/up600x450.webp",
    title: "Casa de Up",
    price: 54.99,
    amount: 1,
    emptyHeart: true,
  },
  {
    id: 8,
    image: "assets/disney-sets/wall-e/wall-e600x450.webp",
    title: "EVA y WALL•E",
    price: 14.99,
    amount: 1,
    emptyHeart: true,
  },
];



// C A R T

// add/remove the same article
let amountItem = 1;

function decrease(id) {
  let ourId = id.split("-")[2];

  let ourIdInNumber = Number(ourId);

  let input = document.getElementById(`cart-input-${ourIdInNumber}`);
  input.value = decreaseAmount(ourIdInNumber);
}

function decreaseAmount(idOfTheObj) {
  let amount = 1;

  cartList.forEach((obj) => {
    if (obj.id == idOfTheObj) {
      if (obj.amount > 1) {
        obj.amount--;
        amount = obj.amount;
      }
    }
  });

  return amount;
}

function increase(id) {
  let ourId = id.split("-")[2];

  let ourIdInNumber = Number(ourId);

  let input = document.getElementById(`cart-input-${ourIdInNumber}`);
  input.value = increaseAmountObj(ourIdInNumber);
}

function increaseAmountObj(idOfTheObj) {
  let amount;
  cartList.forEach((obj) => {
    if (obj.id == idOfTheObj) {
      obj.amount++;
      amount = obj.amount;
    }
  });
  return amount;
}

//heart button

function addToTheWishList(idOfTheObj) {
  let ourId = idOfTheObj.split("-")[3];

  let ourIdInNumber = Number(ourId);

  const heart = document.getElementById(`cart-icon-heart-${ourIdInNumber}`);
  const wishList = document.getElementById(`add-wish-list-${ourIdInNumber}`);

  cartList.forEach((obj) => {
    if (obj.id == ourIdInNumber) {
      if (obj.emptyHeart) {
        // fill the heart
        heart.classList.replace("bi-heart", "bi-heart-fill");
        wishList.textContent = `Quitar de la lista de deseos`;
        obj.emptyHeart = false;
        return;
      } else {
        // empty the heart
        heart.classList.replace("bi-heart-fill", "bi-heart");
        wishList.textContent = `Añadir a la lista de deseos`;
        obj.emptyHeart = true;
        return;
      }
    }
  });
}

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

// Add new items to cart



localStorage.setItem("cart", JSON.stringify(cartList));

function modifiedTemplate(id) {
  let templateItem = `
  <div class="cart-article-fex">
  <div class="cart-img-container">
    <img
      alt="Cabaña de Blancanieves y los Siete Enanitos"
      src="assets/disney-sets/cabañaBlancanieves/cabaña600x450.webp"
    />
  </div>

  <div class="cart-information-container">
    <div class="cart-name">
      <h3><a href="#">Cabaña de Blancanieves y los Siete Enanitos</a></h3>
    </div>

    <div class="cart-margin"></div>

    <div class="cart-price-add">
      <div class="cart-price">219.99 €</div>

      <div class="cart-add-more">
        <div class="cart-add-more-content">
          <button
            class="cart-rest-article"
            id="button-decrease-${id}"
            onclick="decrease(this.id)"
          >
            <i class="bi bi-dash-lg"></i>
          </button>

          <div class="cart-number-articles">
            <input
              type="text"
              value="1"
              min="1"
              id="cart-input-${id}"
            />
          </div>

          <button
            class="cart-add-article"
            id="button-increase-${id}"
            onclick="increase(this.id)"
          >
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <article class="cart-wish-list">
    <div class="cart-wish-list-container">
      <div class="cart-heart-button-container" >
        <button class="cart-heart-button" id="cart-btn-heart-${id}" onclick="addToTheWishList(this.id)">
          <i class="bi bi-heart" id="cart-icon-heart-${id}" ></i>
        </button>
      </div>

      <div class="cart-wish-list-text" id="add-wish-list-${id}">
        Añadir a la lista de deseos
      </div>
    </div>
  </article>

  <div class="cart-trash">
    <button class="cart-trash-button">
      <i class="bi bi-trash3"></i>
    </button>
  </div>
</div>
  `;
  return templateItem;
}

let cartContainer = document.getElementById("cart-container");

cartList.forEach((item) => {
  cartContainer.innerHTML += modifiedTemplate(item.id);
});

//sum the total price of the cart

let totalPrice = document.getElementById("cart-sum-total-price");

const suma = cartList.reduce((acc, item) => acc + item.price, 0);
totalPrice.textContent = `${suma.toFixed(2)} €`;
