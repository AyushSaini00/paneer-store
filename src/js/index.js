import '../styles/main.scss';
import Cart from './modals/Cart';
import Search from './modals/Search';
import { elements } from './views/domElements';
import * as searchView from './views/searchView';
import { renderSkeletonCards, clearSkeletonCards } from './views/skeletonCard';
import Dishes from './modals/Dishes';

// global app state
const state = {
  allDishes: [],
  cart: [],
  favourites: []
};

//controller - connects modals(backend/data) with views(UI)

const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    // create 6 skeletaon cards
    renderSkeletonCards([1, 2, 3, 4, 5, 6]);

    const res = await Search(query);
    state.searchResults = res;

    searchView.clearInput();
    searchView.clearDishes();

    clearSkeletonCards();
    searchView.renderDishes(state.searchResults);
  }
};
elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});

const controlDishes = async () => {
  renderSkeletonCards([1, 2, 3, 4, 5, 6]);
  const res = await Dishes();
  state.allDishes = res;
  clearSkeletonCards();
  searchView.renderDishes(state.allDishes);
};
controlDishes();
