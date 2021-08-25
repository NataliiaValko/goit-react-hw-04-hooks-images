const keyPixabay = "22065853-88fcaf807f7c22500af22ab22";

const fetchImage = (query, page = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${keyPixabay}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    return response.json();
  });
};

const apiPixabay = {
  fetchImage,
};
export default apiPixabay;
