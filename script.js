//! RECUERDA !! Index 0 corresponde con id 1

let cartListPrueba = [
  {
    id: 1,
    image: "assets/disney-sets/cabañaBlancanieves/cabaña-600x450.jpg",
    title: "Cabaña de Blancanieves y los Siete Enanitos",
    price: 219.99,
    emptyHeart: true,
    minAge: 18,
    pieces: 2228,
  },
  {
    id: 2,
    image: "assets/disney-sets/cars/cars-600x450.jpg",
    title: "Diversión en el Autolavado con Rayo McQueen y Mate",
    price: 34.99,
    emptyHeart: true,
    minAge: 2,
    pieces: 29,
  },
  {
    id: 3,
    image: "assets/disney-sets/frozen/frozen-600x450.jpg",
    title: "Palacio de Hielo de Elsa",
    price: 99.99,
    emptyHeart: true,
    minAge: 6,
    pieces: 630,
  },
  {
    id: 4,
    image: "assets/disney-sets/insideOut/insideOut-600x400.jpg",
    title: "Inside Out 2 Mood Cubes",
    price: 34.99,
    emptyHeart: true,
    minAge: 9,
    pieces: 394,
  },
  {
    id: 5,
    image: "assets/disney-sets/reyLeon/reyLeon-600x450.jpg",
    title: "El Rey León: Simba Cachorro",
    price: 19.99,
    emptyHeart: true,
    minAge: 6,
    pieces: 222,
  },
  {
    id: 6,
    image: "assets/disney-sets/sirenita/sirenita-600x450.jpg",
    title: "Mini Castillo de Disney Ariel",
    price: 39.99,
    emptyHeart: true,
    minAge: 12,
    pieces: 557,
  },
  {
    id: 7,
    image: "assets/disney-sets/stitch/stitch-600x450.jpg",
    title: "Stitch",
    price: 64.99,
    emptyHeart: true,
    minAge: 9,
    pieces: 730,
  },
  {
    id: 8,
    image: "assets/disney-sets/up/up-600x450.jpg",
    title: "Casa de Up",
    price: 54.99,
    emptyHeart: true,
    minAge: 9,
    pieces: 598,
  },
  {
    id: 9,
    image: "assets/disney-sets/wall-e/walle-600x450.jpg",
    title: "EVA y WALL•E",
    price: 14.99,
    emptyHeart: true,
    minAge: 10,
    pieces: 155,
  },
];

// la constante fullUrl almacena el valor de la referencia del .html
const fullUrl = window.location.href;

// Event listener que pinta en pantalla las cards (o el shoppingCart) dependiendo del href del html
window.addEventListener("DOMContentLoaded", () => {
  if (fullUrl === "http://127.0.0.1:5500/disney.html") {
    cartListPrueba.forEach((item) => {
      disneyLayout.innerHTML += disneySetsTemplate(
        item.id,
        item.title,
        item.image,
        item.price,
        item.minAge,
        item.pieces
      );
    });
    emptyHeartCheck();
  } else if (fullUrl === "http://127.0.0.1:5500/index-cart.html") {
    //Cart website
    findProduct(getProductToLocalStorage()).forEach((item) => {
      cartContainer.innerHTML += modifiedTemplate(
        item.id,
        item.title,
        item.image,
        item.price,
        item.amount
      );
    });

    btnCode();
    productCounter(getProductToLocalStorage());
    sumPriceCart();
    emptyHeartCheck();
    shoppingCartEmpty(); // Esto funciona, solo hay que inicializarlo
  } else {
    // M A I N  W E B P A G E

    // Slider del header
    const buttonPrev = document.querySelector(".prev-slider");
    const buttonNext = document.querySelector(".next-slider");
    const sliderInner = document.querySelector(".slider-p-inner");
    let sliderHeaderIndex = 0;

    function updateSliderPosition() {
      const width = document.querySelector(".slider-p").clientWidth;
      sliderInner.style.transform = `translateX(${
        -sliderHeaderIndex * width
      }px)`;
    }

    buttonPrev.addEventListener("click", () => {
      if (sliderHeaderIndex > 0) {
        sliderHeaderIndex--;
        updateSliderPosition();
      }
    });

    buttonNext.addEventListener("click", () => {
      if (sliderHeaderIndex < sliderInner.children.length - 1) {
        sliderHeaderIndex++;
        updateSliderPosition();
      }
    });

    // Scroll del carrusel
    document.addEventListener("DOMContentLoaded", () => {
      const carrouselWrapper = document.querySelector(".carrousel-wrapper");
      const scrollLeftButton = document.querySelector(".scroll-left-button");
      const scrollRightButton = document.querySelector(".scroll-right-button");

      scrollLeftButton.addEventListener("click", () => {
        carrouselWrapper.scrollBy({
          left: -1080,
          behavior: "smooth",
        });
      });

      scrollRightButton.addEventListener("click", () => {
        carrouselWrapper.scrollBy({
          left: 1080,
          behavior: "smooth",
        });
      });
    });
  }
});

// D I S N E Y  S E T S //

const disneyLayout = document.getElementById("disney-set-layout");

function disneySetsTemplate(id, title, image, price, age, pieces) {
  let disneyTemplateItem = `
  <div class="disney-card1">
                <div class="disney-card1-likeButton-banner">
                <button class="cart-heart-button" id="cart-btn-heart-${id}" onclick="addToTheWishList(${id})">
              <i class="bi bi-heart" id="cart-icon-heart-${id}" ></i>
            </button>
                </div>
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
                    <button type="button" class="btn btn-primary disney-btn-addToCart" onclick="addProductToLocalStorage(${id})">
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

//C A R T

//contenedor donde se le agregan los productos del carrito de compra
const cartContainer = document.getElementById("cart-container");

function increaseAmount(productID) {
  const selectedString = localStorage.getItem(`index: ${productID - 1}`);
  const selectedObj = JSON.parse(selectedString);
  let accumulator = selectedObj.amount;

  accumulator++;

  localStorage.setItem(
    `index: ${productID - 1}`,
    JSON.stringify({
      id: cartListPrueba[productID - 1].id,
      amount: accumulator,
    })
  );

  location.href = location.href;
}

function decreaseAmount(productID) {
  const decreaseBtn = document.getElementById(`button-decrease-${productID}`);
  const selectedString = localStorage.getItem(`index: ${productID - 1}`);
  const selectedObj = JSON.parse(selectedString);
  let accumulator = selectedObj.amount;

  if (accumulator > 1) {
    accumulator--;

    localStorage.setItem(
      `index: ${productID - 1}`,
      JSON.stringify({
        id: cartListPrueba[productID - 1].id,
        amount: accumulator,
      })
    );

    location.href = location.href;
  } else {
    decreaseBtn.attributes = "disabled";
  }
}

//heart button

// funcion que comprueba el estado de emptyHeart, se inicializa en el primer event listener.
function emptyHeartCheck() {
  checkEmptyHeartList = getProductToLocalStorage();
  checkEmptyHeartList.forEach((element) => {
    cartListPrueba.forEach((item) => {
      if (element.id === item.id) {
        item.emptyHeart = element.emptyHeart;
        let heart = document.getElementById(`cart-icon-heart-${item.id}`);
        const wishList = document.getElementById(`add-wish-list-${item.id}`);
        if (element.emptyHeart === false) {
          heart.classList.replace("bi-heart", "bi-heart-fill");
          if (fullUrl === "http://127.0.0.1:5500/index-cart.html") {
            wishList.textContent = `Quitar de la lista de deseos`;
          }
        }
      }
    });
  });
}

// Nueva funcion de addToTheWishList -> hay que cambiar ambos templates reemplazar el this.id.
function addToTheWishList(productID) {
  const heart = document.getElementById(`cart-icon-heart-${productID}`);
  const wishList = document.getElementById(`add-wish-list-${productID}`);

  const storedProduct = JSON.parse(
    localStorage.getItem(`index: ${productID - 1}`)
  );

  cartListPrueba.forEach((obj) => {
    if (obj.id == productID) {
      if (obj.emptyHeart) {
        // fill the heart
        heart.classList.replace("bi-heart", "bi-heart-fill");
        if (fullUrl === "http://127.0.0.1:5500/index-cart.html") {
          wishList.textContent = `Quitar de la lista de deseos`;
        }
        if (storedProduct) {
          storedProduct.emptyHeart = false;
        }
        return (obj.emptyHeart = false);
      } else {
        // empty the heart
        heart.classList.replace("bi-heart-fill", "bi-heart");
        if (fullUrl === "http://127.0.0.1:5500/index-cart.html") {
          wishList.textContent = `Añadir a la lista de deseos`;
        }
        if (storedProduct) {
          storedProduct.emptyHeart = true;
        }
        return (obj.emptyHeart = true);
      }
    }
  });

  if (storedProduct) {
    localStorage.setItem(
      `index: ${productID - 1}`,
      JSON.stringify({
        id: cartListPrueba[productID - 1].id,
        amount: storedProduct.amount,
        emptyHeart: cartListPrueba[productID - 1].emptyHeart,
      })
    );
  } else {
    localStorage.setItem(
      `index: ${productID - 1}`,
      JSON.stringify({
        id: cartListPrueba[productID - 1].id,
        amount: 0,
        emptyHeart: cartListPrueba[productID - 1].emptyHeart,
      })
    );
  }
}

//promo code button
function btnCode() {
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
}
//Esto es una prueba para añadir los articulos al carrito

// función que será inicializada a través de la propiedad "onclick" del tag <button>
// cada botón tendrá el "id" del objeto "catalogo"
function addProductToLocalStorage(productID) {
  let accumulator = 0;

  const storedProduct = JSON.parse(
    localStorage.getItem(`index: ${productID - 1}`)
  );
  if (storedProduct) {
    accumulator = storedProduct.amount;
  }
  accumulator++;

  localStorage.setItem(
    `index: ${productID - 1}`,
    JSON.stringify({
      id: cartListPrueba[productID - 1].id,
      amount: accumulator,
    })
  );
  if (fullUrl === "http://127.0.0.1:5500/index-cart.html") {
    location.href = location.href;
  }
}

// inicializamos la función para testear como funcionaría en los respectivos botones.;

//función que se encarga de recoger la información del "localstorage" y la devuelve dentro de una lista nueva
function getProductToLocalStorage() {
  let cartArray = [];

  for (let i = 0; i < cartListPrueba.length; i++) {
    let jsonItem = localStorage.getItem(`index: ${i}`);

    if (jsonItem !== null) {
      jsonItem = localStorage.getItem(`index: ${i}`);

      let itemObj = JSON.parse(jsonItem);

      cartArray.push(itemObj);
    }
  }

  return cartArray;
}

// console.log(getProductToLocalStorage());

function shoppingCartEmpty() {
  const cartFullContainer = document.getElementById("cart-full-container");
  const cartEmptyContainer = document.getElementById("cart-empty-cart");

  if (getProductToLocalStorage().length == 0) {
    cartFullContainer.classList.toggle("cart-display-none");
  } else {
    cartEmptyContainer.classList.toggle("cart-display-none");
  }
}

// esta funcion se encarga de buscar del catalogo las cosas que esten en el get del localstorage
function findProduct(cartArray) {
  const productsInCart = [];
  cartArray.forEach((shoppingProduct) => {
    // console.log("shopping product", shoppingProduct);
    cartListPrueba.forEach((item) => {
      if (shoppingProduct.id === item.id) {
        // console.log("product found in catalog", shoppingProduct.id);
        productsInCart.push({ ...item, amount: shoppingProduct.amount });
      }
    });
  });
  return productsInCart;
}

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
        <div class="cart-add-more-content"  id="cart-article-display-${id}">
          <button
            class="cart-rest-article"
            id="button-decrease-${id}"
            onclick="decreaseAmount(${id})"
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
             onclick="increaseAmount(${id})"  >
          
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>


      <article class="cart-wish-list">
        <div class="cart-wish-list-container">
          <div class="cart-heart-button-container" >
            <button class="cart-heart-button" id="cart-btn-heart-${id}" onclick="addToTheWishList(${id})">
              <i class="bi bi-heart" id="cart-icon-heart-${id}" ></i>
            </button>
          </div>

          <div class="cart-wish-list-text" id="add-wish-list-${id}">
            Añadir a la lista de deseos
          </div>
        </div>
      </article>

      <div class="cart-trash">
        <button class="cart-trash-button" onclick="deleteArticles(${id})">
          <i class="bi bi-trash3"></i>
        </button>

        <button class="cart-edit-button" id="cart-edit-btn-${id}" onclick="editButtonQuery(${id})">
          <span class="cart-text-edit">(Editar)</span>
        </button>
    </div>

  </div>
  `;
  return templateItem;
}

//!Función para desplegar el boton Edit y poder añadir más contenido a la bolsa

function editButtonQuery(productID) {
  const displayArticle = document.getElementById(
    `cart-article-display-${productID}`
  );

  displayArticle.classList.add("cart-display-flex");
  //  console.log(displayArticle.className=== "cart-add-more-content cart-display-flex")
  if (
    displayArticle.className === "cart-add-more-content cart-display-flex" &&
    window.screen.availWidth < 900
  ) {
    // displayArticle.className ="cart-add-more-content cart-display-flex";
    displayArticle.classList.add("cart-display-flex");
  }
}

//sum the total price of the cart

function sumPriceCart() {
  let subtotal = document.getElementById("cart-sum-total-price");
  let totalPrice = document.getElementById("cart-total-price");
  let iva = document.getElementById("cart-IVA");
  let paypal = document.getElementById("paypal-3-payments");

  let localStorageProduct = getProductToLocalStorage();

  let productTotalPrice = 0;
  cartListPrueba.forEach((priceItem) => {
    localStorageProduct.forEach((idItem) => {
      if (priceItem.id == idItem.id) {
        let productPrice = priceItem.price;
        let productAmount = idItem.amount;

        let multiplyAmountbyPrice = productAmount * productPrice;

        productTotalPrice = multiplyAmountbyPrice + productTotalPrice;
        subtotal.textContent = `${productTotalPrice.toFixed(2)} €`;

        totalPrice.textContent = `${productTotalPrice.toFixed(2)} €`;

        const ivaTotal = productTotalPrice * 0.21;
        iva.textContent = `${ivaTotal.toFixed(2)} €`;

        const paypalPayments = productTotalPrice / 3;
        paypal.textContent = `${paypalPayments.toFixed(2)} €`;
      }
    });
  });
}

// función para poner el numero de articulos del carrito

function productCounter(getProductLS) {
  let totalAmount = 0;
  getProductLS.forEach((item) => {
    totalAmount = totalAmount + item.amount;
  });

  const myCart = document.getElementById("cart-product-amount");
  myCart.innerHTML = `Mi bolsa (${totalAmount})`;

  const valueProduct = document.getElementById("cart-value-product-amount");
  valueProduct.innerHTML = `Valor del pedido de (${totalAmount}) articulos`;
}

// Función para eliminar articulos

function deleteArticles(id) {
  localStorage.removeItem(`index: ${id - 1}`);
  location.href = location.href;
}
