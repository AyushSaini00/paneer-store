import '../styles/main.scss';
import Search from './modals/Search';
import { elements } from './views/domElements';
import * as searchView from './views/searchView';
import { renderSkeletonCards, clearSkeletonCards } from './views/skeletonCard';

// global app state
const state = {};

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
