"use strict";

// let number = 5;
// const LeftBorderWidth = 1;

// number = 10;
// console.log(number);
// // LeftBorderWidth = 10;
// console.log(LeftBorderWidth);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из просмотренных псоледних фильмов ?', ''),
	b = prompt('На сколько оцените его ?', ''),
	c = prompt('Один из просмотренных псоледних фильмов ?', ''),
	d = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);