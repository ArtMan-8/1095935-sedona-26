var	buttonShow = document.querySelector(".form-search-show");
var formSearch = document.querySelector(".form-search");
var close = formSearch.querySelector(".form-search--show");

formSearch.classList.add('form-search--hide');

buttonShow.addEventListener("click", function (evt) {
  evt.preventDefault();
  formSearch.classList.toggle("form-search--hide");
});
