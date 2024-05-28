<div class="cart-article-fex">
  <div class="cart-img-title-price-container">
    <div class="cart-img-container">
      <img
        alt=${title}
        src= ${image}
      />
    </div>

    <div class="cart-information-container">
      <div class="cart-name">
        <h3><span href="#">${title}</span></h3>
      </div>

      <div class="cart-margin"></div>


      <div class="cart-uds-price-container">
        <div class="cart-uds">Uds. ${amount}</div>
        <div class="cart-price">${price} €</div>
      </div>
    </div>

    <article class="cart-wish-list">
      <div class="cart-wish-list-container">
        <div class="cart-heart-button-container" >
          <button class="cart-heart-button" id="cart-btn-heart-${id}" onclick="addToTheWishList(${id})">
            <i class="bi-heart" id="cart-icon-heart-${id}" ></i>
          </button>
        </div>

        <div class="cart-wish-list-text" id="add-wish-list-${id}">
          Añadir a la lista de deseos
        </div>
      </div>
    </article>

    <div class="cart-trash-mq">
      <button class="cart-trash-button-mq" onclick="deleteArticles(${id})">
        <i class="bi bi-trash3"></i>
      </button>

      <button class="cart-edit-button" id="cart-edit-btn-${id}" onclick="editButtonQuery(${id})">
        <span class="cart-text-edit" id="cart-btn-text">(Editar)</span>
      </button>
    </div>

    <div class="cart-add-more">
      <div class="cart-add-more-content" id="cart-article-display-${id}">
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