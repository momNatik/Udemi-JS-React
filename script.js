"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  }
}

// start();

const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function showMyDb() {
  if (personMovieDB.privat == false) {
    console.log(personMovieDB);
  }
}

// showMyDb();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
  const lastFilm = prompt('Один из последних просмотренных фильмов', '');
  const lastFilmScore = prompt('На сколько оцените его?', '');

  if (lastFilm ==='' || lastFilmScore === '' || lastFilm === null || lastFilmScore === null || lastFilm.length > 50) {
    i--;
  } else {
    personMovieDB.movies[lastFilm] = lastFilmScore;
  }
   
}
} 

// rememberMyFilms();


function detectPersonalLevel() {
  if (numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
  alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
}

// detectPersonalLevel();


function writeYourGenres() {
 for (let i = 0; i < 3; i++) {
  const answer = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
  personMovieDB.genres[i] = answer;
 }
} 

// writeYourGenres();

console.log(personMovieDB);
