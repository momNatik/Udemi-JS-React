'use strict';

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const reclama = document.querySelectorAll('.promo__adv img');
reclama.forEach(elem => elem.remove());

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'ДРАММА';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
const background = document.querySelector('.promo__bg');
background.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();


const filmsList = document.querySelector('.promo__interactive-list');
filmsList.innerHTML = '';
movieDB.movies.forEach((elem, i) => {
    filmsList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i+1}. ${elem}<div class="delete"></div></li>`);
});

