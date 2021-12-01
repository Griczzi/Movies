'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '10');

  while (numberOfFilms == '' || numberOfFilms == undefined || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '10');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyBD() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyBD();

function writeYourGenres() {
  let genresFilms;
  for (let i = 1; i < 4; i++) {
    genresFilms = prompt(`${i}. Ваш любимый жанр?`, '');
    if (genresFilms !== '') {
      personalMovieDB.genres[i - 1] = genresFilms;
    }
  }
}

writeYourGenres();


function addFilmsName() {

  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?');

    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 20 && b <= 10) {
      console.log('Удалось!');
      personalMovieDB.movies[a] = b;
    } else {
      console.log('Не правильный ввод данных! Попробуй уще раз.');
      i--;
    }
  }
}

addFilmsName();

function detectivePersonalName() {

  if (personalMovieDB.count < 10) {
    console.log('мало');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 20) {
    console.log('норма');
  } else if (personalMovieDB.count >= 30) {
    console.log('ты гурман');
  } else {
    console.log('что то не так');
  }
}

detectivePersonalName();