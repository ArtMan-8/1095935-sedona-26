var	buttonShow = document.querySelector(".form-search-show");
var formSearch = document.querySelector(".form-search");

formSearch.classList.add('form-search--hide');

buttonShow.addEventListener("click", function (evt) {
  evt.preventDefault();
  formSearch.classList.toggle("form-search--hide");
});
