import '../styles/main.scss';
import Search from './modals/Search';
import { elements } from './views/domElements';
import * as searchView from './views/searchView';

// global app state
const state = {};

//controller - connects modals(backend/data) with views(UI)

const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    const res = await Search(query);
    state.searchResults = res;

    searchView.clearInput();
    searchView.clearDishes();

    searchView.renderDishes(state.searchResults);
  }
};
elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
