"use strict";

// let number = 5;
// const LeftBorderWidth = 1;

// number = 10;
// console.log(number);
// // LeftBorderWidth = 10;
// console.log(LeftBorderWidth);

// ============================================================================

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один из просмотренных псоледних фильмов ?', ''),
// 	b = prompt('На сколько оцените его ?', ''),
// 	c = prompt('Один из просмотренных псоледних фильмов ?', ''),
// 	d = prompt('На сколько оцените его ?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// ===============================================================================

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// for (let i = num; i <= 55; i++) {
// 	console.log(num);
// 	num++;
// }

// ================================================================================

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);

// for (let i = 5; i <= 10; i++) {
// 	console.log(i);
// };


// for (let i = 20; i => 10; i--) {
// 	if (i == 13) break;
// 	console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
// 	if (i % 2 == 0) console.log(i);
// }

// // Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// console.log('\n');

// let i = 2;

// while (i < 16) {
// 	++i;
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// let arr = [];

// for (let i = 5; i <= 10; i++) {
// 	arr.push(i);
// 	// arr[i - 5] = i;
// }

// console.log(arr);


// Место для первой задачи
// function firstTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	let result = [];

// 	for (let i = 0; i <= arr.length; i++ ){
// 		result[i] = i;
// 	}

// 	console.log(result);

// 	// Не трогаем
// 	return result;
// }


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
// 	// result[i] = arr[i];
// 	result.push(arr[i]);
// }

// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
// 	// if (typeof (data[i]) === 'number') {
// 	// 	data[i] = data[i] * 2;
// 	// } else {
// 	// 	data[i] = `${data[i]} - done`;
// 	// }
// 	if (isNaN(data[i])) {
// 		data[i] = `${data[i]} - done`;
// 	} else {
// 		data[i] = data[i] * 2;
// 	}
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// data.forEach((e, i) => {
// 	if (isNaN(e)) {
// 		data[i] = `${e} - done`;
// 	} else {
// 		data[i] = e * 2;
// 	}
// });
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];


// for (let i = data.length - 1; i != -1; i--) {
// 	result.push(data[i]);
// }


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result)


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {

// }

// console.log(result);