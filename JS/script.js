'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '10');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
  b = +prompt('На сколько оцените его?'),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = +prompt('На сколько оцените его?');


// if (b || d < 0 && d || b > 10) {
// prompt('Вы ввели не число или слишком большое!!');
// }
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);