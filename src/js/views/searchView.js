import { elements } from './domElements';

export const getInput = () => elements.searchInput.value;

const renderDish = (dish) => {
  const cardMarkup = `
    <section class="card">
        <img
            class="card-image responsive"
            src="https://raw.githubusercontent.com/AyushSaini00/paneer-store-api/main/${
              dish.image
            }"
            alt="${dish.name}"
        />
        <div class="card-text">
            <h2 class="dish-name">${dish.name}</h2>
            <p class="dish-description">${
              dish.description ? dish.description : ''
            }</p>
            <div class="dish-details">
                <button class="add-to-cart">Add to cart</button>
                <button class="add-to-favourite">🧡</button>
                <div class="dish-rating">
                    <span>⭐</span> ${dish.rating}
                </div>
                <div class="dish-price">
                    <span>₹</span> ${dish.price}
                </div>
            </div>
        </div>
    </section>
    `;

  elements.container.insertAdjacentHTML('beforeend', cardMarkup);
};

export const renderDishes = (dishes) => {
  dishes.forEach(renderDish);
};

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearDishes = () => {
  elements.container.innerHTML = '';
};
