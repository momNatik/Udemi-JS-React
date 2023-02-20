"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const lastFilm = prompt('Один из последних просмотренных фильмов', '');
const lastFilmScore = prompt('На сколько оцените его?', '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов', '');
const lastFilmScore2 = prompt('На сколько оцените его?', '');
const personMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
personMovieDB.movies[lastFilm] = lastFilmScore;
personMovieDB.movies[lastFilm2] = lastFilmScore2;
console.log(personMovieDB);


console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);