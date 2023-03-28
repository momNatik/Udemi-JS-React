"use strict";

const personMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personMovieDB.count = +prompt(
      "Сколько фильмов вы уже посмотрели?",
      ""
    ).trim();

    while (
      personMovieDB.count == "" ||
      personMovieDB.count == null ||
      isNaN(personMovieDB.count)
    ) {
      personMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  showMyDb: function () {
    if (personMovieDB.privat == false) {
      console.log(personMovieDB);
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt(
        "Один из последних просмотренных фильмов",
        ""
      ).trim();
      const lastFilmScore = prompt("На сколько оцените его?", "").trim();

      if (
        lastFilm === "" ||
        lastFilmScore === "" ||
        lastFilm === null ||
        lastFilmScore === null ||
        lastFilm.length > 50
      ) {
        i--;
      } else {
        personMovieDB.movies[lastFilm] = lastFilmScore;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personMovieDB.count >= 10 && personMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  writeYourGenres: function () {
    // for (let i = 0; i < 3; i++) {
    //   const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");

    //   if (answer == "" || answer == null) {
    //    i--;
    //   } else {
    //     personMovieDB.genres[i] = answer;
    //   }

    //   personMovieDB.genres.forEach((element, index) => {
    //     console.log(`Любимый жанр ${index + 1} - это ${element}`);
    //   });
    // }

    for (let i = 1; i < 2; i++) {
      const answer = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();

      if (answer == "" || answer == null) {
       i--;
      } else {
        personMovieDB.genres = answer.split(', ');
        personMovieDB.genres.sort();
      }

      personMovieDB.genres.forEach((element, index) => {
        console.log(`Любимый жанр ${index + 1} - это ${element}`);
      });
    }

  },
  toggleVisibleMyDB: function () {
    if (personMovieDB.privat === false) {
      personMovieDB.privat = true;
    } else {
      personMovieDB.privat = false;
    }
  },
};
