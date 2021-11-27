'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '10');

if (numberOfFilms < 10) {
  alert('мало');
} else if (numberOfFilms <= 20) {
  alert('норма');
} else if (numberOfFilms >= 30) {
  alert('ты гурман');
} else {
  alert('что то не так');
}


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < 2; i++) {
  let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько оцените его?');

  if (a !== null && b !== null && a !== '' && b !== '' && a.length < 20 && b <= 10) {
    alert('Удалось!');
    personalMovieDB.movies[a] = b;
  } else {
    alert('Не правильный ввод данных! Попробуй уще раз.');
    i--;
  }
}


// if ((a && b == null)) {
//   alert('Вы не можете проигнорировать эти вопросы');
// }   //&& (a && b == str.length < 50)
// } else if (a ) {



console.log(personalMovieDB);