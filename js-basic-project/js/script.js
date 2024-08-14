"use strict";
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов

  // 1) После заполнения формы, новый фильм добавляется в список, страница не должна перезагружаться
  // 2) Фильмы должны быть отсортированы
  // 3) Если название фильма длинее чем 21 символ, - обрезать его и добавить три точки
  // 4) При клике на мусорную корзину элемент должен удаляться из списка
  // 5) Если стоит галочка "сделать любимым" - выводим в консоль "любимый фильм"

document.addEventListener("DOMContentLoaded", () => {
  const reclama = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    background = document.querySelector(".promo__bg"),
    filmsContainer = document.querySelector(".promo__interactive-list");

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const movies = movieDB.movies;

  const removeElems = (elemsList) => {
    elemsList.forEach((elem) => elem.remove());
  };

  const changeInnerHTML = (elem, content) => (elem.innerHTML = `${content}`);

  const changeBackground = (elem, url) =>
    (elem.style.backgroundImage = url);

  const sortArr = (arr) => arr.sort();

  function generateListFilms(movs, movsList) {
    movsList.innerHTML = "";
    sortArr(movs);
    createListFilms(movs, movsList);
    deleteFilm();
  }

  function createListFilms(movs, movsList) {
    movs.forEach((elem, i) => {
      movsList.insertAdjacentHTML(
        "beforeend",
        `<li class="promo__interactive-item">${
          i + 1
        }. ${elem}<div class="delete"></div></li>`
      );
    });
  }

  function deleteFilm() {
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movies.splice(i, 1);
        generateListFilms(movies, filmsContainer);
      });
    });
  }


  removeElems(reclama);
  changeInnerHTML(genre, "ДРАММА");
  changeBackground(background, 'url("img/bg.jpg")');
  generateListFilms(movies, filmsContainer);



  const addForm = document.querySelector("#form-add"),
    addedFilm = document.querySelector(".adding__input"),
    checkbox = document.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (event) => {
    const newFilm = addedFilm.value;
    event.preventDefault();

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      
      movies.push(newFilm);
      createListFilms(movies, filmsContainer);
      if (checkbox.checked) {
        console.log("Любимый фильм");
      }
    }

    event.target.reset();
  });
});
