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

// la constante fullUrl almacena el valor de la referencia del .html
const fullUrl = window.location.href;

// Event listener que activa el forEach del objeto cartList dependiendo del href del html
window.addEventListener("DOMContentLoaded", () => {
  fullUrl === "http://127.0.0.1:5500/disney.html"
    ? cartList.forEach((item) => {
        disneyLayout.innerHTML += disneySetsTemplate(
          item.title,
          item.image,
          item.price,
          item.minAge,
          item.pieces
        );
      })
    : cartList.forEach((item) => {
        cartContainer.innerHTML += modifiedTemplate(
          item.id,
          item.title,
          item.image,
          item.price,
          getProductToLocalStorage()[item.id].amount
        );
      });
});

// D I S N E Y  S E T S //
const disneyLayout = document.getElementById("disney-set-layout");

function disneySetsTemplate(title, image, price, age, pieces) {
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

// C A R T

// cartList.forEach((item) => {
//   localStorage.setItem(
//     `item ${item.id}`,
//     JSON.stringify({
//       id: item.id,
//       shortTitle: item.shortTitle,
//       amount: item.amount,
//     })
//   );
// });

// let jsonCart =localStorage.setItem("cart", JSON.stringify(cartList)); // guarda todo el carrito

// let cartArrayObject = JSON.parse(jsonCart);

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

//Esto es una prueba para añadir los articulos al carrito

// function addProductToLocalStorage(productID) {
//   let accumulator = 0;
//   btnPromo.addEventListener("click", () => {
//     accumulator++;

//     localStorage.setItem(
//       `index: ${productID}`,
//       JSON.stringify({
//         id: cartList[productID].id,
//         shortTitle: cartList[productID].shortTitle,
//         amount: accumulator,
//       })
//     );
//   });
// }

function addProductToLocalStorage(productID) {
  let accumulator = 0;
  btnPromo.addEventListener("click", () => {
    accumulator++;

    localStorage.setItem(
      `index: ${productID}`,
      JSON.stringify({
        id: cartList[productID].id,
        shortTitle: cartList[productID].shortTitle,
        amount: accumulator,
      })
    );

    localStorage.setItem(
      `index: 0`,
      JSON.stringify({
        id: cartList[0].id,
        shortTitle: cartList[0].shortTitle,
        amount: 12,
      })
    );
  });
}

addProductToLocalStorage(0);
addProductToLocalStorage(2);
addProductToLocalStorage(3);
addProductToLocalStorage(4);
// addProductToLocalStorage(0);

function getProductToLocalStorage() {
  let cartArray = [];

  for (let i = 0; i < cartList.length; i++) {
    let jsonItem = localStorage.getItem(`index: ${i}`);

    if (jsonItem !== null) {
      jsonItem = localStorage.getItem(`index: ${i}`);

      let itemObj = JSON.parse(jsonItem);

      cartArray.push(itemObj);
    }
  }

  return cartArray;
}
getProductToLocalStorage();

// Add new items to cart

function modifiedTemplate(id, title, image, price, amount) {
  let templateItem = `
  <div class="cart-article-fex">
  <div class="cart-img-container">
    <img
      alt=${title}
      src= ${image}
    />
  </div>

  <div class="cart-information-container">
    <div class="cart-name">
      <h3><a href="#">${title}</a></h3>
    </div>

    <div class="cart-margin"></div>

    <div class="cart-price-add">
      <div class="cart-price">${price} €</div>

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
              value="${amount}"
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

        <button class="cart-edit-button">
          <span class="cart-text-edit">(Editar)</span>
        </button>
    </div>
  
  </div>
  `;
  return templateItem;
}

let cartContainer = document.getElementById("cart-container");
// let amountAux = getProductToLocalStorage();

// for (let i = 0; i < cartList.length; i++) {
//   console.log(amountAux);
//   cartContainer.innerHTML += modifiedTemplate(
//     cartList[i].id,
//     cartList[i].title,
//     cartList[i].image,
//     cartList[i].price,
//     2
//   );
// }

//sum the total price of the cart

let subtotal = document.getElementById("cart-sum-total-price");
let totalPrice = document.getElementById("cart-total-price");
let iva = document.getElementById("cart-IVA");
let paypal = document.getElementById("paypal-3-payments");

const sumSubtotal = cartList.reduce((acc, item) => acc + item.price, 0);
subtotal.textContent = `${sumSubtotal.toFixed(2)} €`;

const sumTotalPrice = cartList.reduce((acc, item) => acc + item.price, 0);
totalPrice.textContent = `${sumTotalPrice.toFixed(2)} €`;

const ivaTotal = sumSubtotal * 0.21;
iva.textContent = `${ivaTotal.toFixed(2)} €`;

const paypalPayments = sumSubtotal / 3;
paypal.textContent = `${paypalPayments.toFixed(2)} €`;
