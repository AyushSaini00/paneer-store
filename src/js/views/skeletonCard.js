import { elements } from './domElements';

const renderSkeletonCard = () => {
  const skeletonMarkup = `
        <div class="skeleton-card">
            <div class="skeleton-card-image"></div>
            <div class="skeleton-content">
                <div class="skeleton-title"></div>
                <div class="skeleton-description"></div>
                <div class="skeleton-details"></div>
            </div> 
        </div>
    `;

  elements.container.insertAdjacentHTML('afterbegin', skeletonMarkup);
};

export const renderSkeletonCards = (dishes) => {
  dishes.forEach(renderSkeletonCard);
};

export const clearSkeletonCards = () => {
  const allSkeletonCards = document.querySelectorAll('.skeleton-card');
  allSkeletonCards.forEach((el) => el.remove());
};
