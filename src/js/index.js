import '../styles/main.scss';
import Search from './modals/Search';
import { elements } from './views/domElements';
import * as searchView from './views/searchView';

const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    const res = await Search(query);
    console.log(res);
    // render the search results below search as dropdown
  }
};
elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
