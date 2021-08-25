import refs from "./refs";
import markupSearchForm from "../templates/searchFormTpl.hbs";
import NewApiService from "./apiService";
import { clearGallery, makeMarkupGallery } from "./gallery";
import actionButtonLoadMore from "./btnMoreLoad";

const newApiService = new NewApiService();

const actionSearchForm = {
  checkForResponses() {
    return newApiService.no_more_response
      ? (actionButtonLoadMore.disable(),
        actionButtonLoadMore.loadMoreTextContent())
      : (actionButtonLoadMore.enable(),
        actionButtonLoadMore.loadMoreTextContent());
  },

  addEventListenerSearchForm() {
    refs.searchForm.addEventListener(
      "submit",
      actionSearchForm.getValueForSearch
    );
  },

  createSearchForm() {
    refs.searchForm.innerHTML = markupSearchForm();
  },

  hiddenSearchForm() {
    refs.searchButton.classList.add("is-hidden");
  },

  makeActiveSearchForm() {
    actionSearchForm.createSearchForm();
    actionSearchForm.addEventListenerSearchForm();
    actionSearchForm.hiddenSearchForm();
    actionButtonLoadMore.visibility();
    actionButtonLoadMore.disable();
  },

  getValueForSearch(e) {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (!value) {
      return clearGallery();
    }
    actionButtonLoadMore.disable();
    actionButtonLoadMore.loadTextContent();
    newApiService.setValueForSearch(value);
    clearGallery();
    newApiService.resetPage();
    newApiService.no_more_response = false;
    newApiService.fetchGallery().then((array) => {
      makeMarkupGallery(array);
    });
    setTimeout(() => {
      actionSearchForm.checkForResponses();
      actionButtonLoadMore.onScroll();
    }, 500);
  },
};

refs.searchButton.addEventListener(
  "click",
  actionSearchForm.makeActiveSearchForm
);

export { newApiService };
