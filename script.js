 'use strict';

// // // const result = confirm('do you have 18?', '18');
// // // console.log(result);

// // // const answer = +prompt('do you have 18?','');
// // // console.log(answer + 5);

// // const answers = [];

// // // answers[0] = prompt('Как ваше имя?','');
// // // answers[1] = prompt('Сколько вам лет?','');
// // // answers[2] = prompt('Как ваша фамилия?','');

// // // console.log(typeof(answers));

// // // let incr = 10,
// // //     decr = 10;
// // // incr ++;
// // // decr --;

// // // console.log(incr);
// // // console.log(decr);

// // let num = 50; // const не меняется поєтому let

// // // do {
// // //     console.log(num);
// // //     num++;
// // // }
// // // while (num < 55);

// // for (let i = 1; i < 8; i++) {
// //     if (i === 6) {
// //         // break;
// //         continue;
// //     }
// //     console.log(i);
// // }

// // Домашка 12\

// var result = confirm('Вы тут?');
// while (result) {
//     alert('Приступим!');
//     break;
// } 


// }
// if (result===true){
//     alert('Приступим');
// }else {
//     alert('Счастливо');
//     return;
// }
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',''); 

//     if (numberOfFilms == '0' ) {
//      alert('Это клуб кинолюбителей, Вы точно не ошиблись страничкой?Попробуем еще раз.');
//      document.location.reload(true);

//     } if  (numberOfFilms >= 1) {
//         alert('Спасибо', numberOfFilms);
//         console.log(numberOfFilms);
//     }
//       else if (numberOfFilms == '',String) {
//          alert('Введите пожалуйста цифры');
//         document.location.reload(true);
//       }
//       alert('Вы выбрали количество - ' + numberOfFilms);

// //       // 2 часть урока
// let lastFilm = prompt('Какой ваш последний фильм?','');
// let idea = +prompt ('Ваша оцена фильму?','');

//       const personalMovieDB = {
//           count: numberOfFilms, // win
//           movies: [
//             'Последний фильм: '+ lastFilm,
//             'оцена: '+ idea,
//           ],  
//           actors: {}, // win
//           genres: [], //win
//           privat:false, // win
//       } ; // lose :  ';'
//      alert(lastFilm);
//      alert(idea);
//      console.log(personalMovieDB);
//      console.log(numberOfFilms);


      
// а теперь правильный ответ на урок 1

// const numberOfFilms = +prompt('Сколько фильмов Ви уже посмотрели?','');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false,
// };

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько вы его оцениваете?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько вы его оцениваете?','');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);

// Условия 13

// if ( 4 == 4 ) {
//     console.log('ok');
// } else {
    
// }

// // Домашка 2 (15)


// let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }
// do {
//     i += 1;
//     console.log(i);
//   } while (i < 5);








// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false,
// };
// if (personalMovieDB.count < 10){
//     alert('Просмотрено довольно мало фильмов');     
// }else if (personalMovieDB.count >= 10 && personalMovieDB <30 ) {
//     alert ('Норм фильмов');
// }else if (personalMovieDB.count >=30) {
//     alert ('Вы киноман');

// } 
    

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько вы его оцениваете?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько вы его оцениваете?','');

//       personalMovieDB.movies[a] = b;

//       personalMovieDB.movies[c] = d;
//       for (let i = 0; i < 1; i++) {  // i это задания цикла
//         const a = prompt('Один из последних просмотренных фильмов?',''), // єто то с чем играться
//               b = prompt('На сколько вы его оцениваете?','');

        // if (a != null && b != null && a != '' && b != '' && a.length < 50){
        //     personalMovieDB.movies[a] = b;
        //     console.log('Done');
        // }else {
        //     console.log ('Error');
        //     i--;
        // }   
       
//       }





    // if (personalMovieDB.count <=10){
    //     personalMovieDB.movies[a] = b;
    //     alert('Просмотрено довольно мало фильмов');
    // }if  (personalMovieDB.count >10 <30) {
    //           personalMovieDB.movies[a] = b;
    //           alert('Вы классический зритель');
    //         }
    //   console.log(personalMovieDB);

// 16 Функции
// 1 вариант
// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello world'); ---ВЫЗОВ ФУНКЦИИ ОБЯЗАТЕЛЬНО

// 2вариант
// let num = 20;

// function showFirstMessage (text) {
//     console.log(text);
//     let num = 10; 
//     console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return (a + b); // прекращается как только исполняет а+б
// }

// console.log(calc(4,3));
// console.log(calc(2,3));
// console.log(calc(5,3));


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// // 3 вариант (Function exprassion)

// const logger = function() {
// console.log('Hello');
// };

// lagger(); // ОБЯЗАТЕЛЬНО - ;
// // Современный стандарт

// const calc = (a,b) => { return a + b }; // стрелочная функция

// function calc(a, b) {
//     return (a + b); // прекращается как только исполняет а+б
// }

// console.log(calc(4,3));
// console.log(calc(2,3));
// console.log(calc(5,3));

// // Методы и свойства строк 17

// const str = 'test';
// const arr = [1,2,4];

// console.log(str.toUpperCase());
// console.log(str);
// 2 пример

// let fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));
// 3
// const logg = 'Hello World';

// console.log(logg.slice(6,10));

// 3 slice=substring

// const logg = 'Hello World';

// console.log(logg.substring(6,10));

// 4

// const logg = 'Hello World';

// console.log(logg.substr(6,5));

// Числа (округление)

// const num = 12.2;
// console.log(Math.round(num));

// // parseInt and parseFloat
// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

 // Call Back функция 19

 // 1

//  function first() {
     // do something
    //  setTimeout(function(){
         console.log(1);
//     },500); // задержка в 0,5 секунд
//  }

//  function second() {
//      console.log(2);
//  }
//  first();
//  second();

 // 2

// //  function learnJS(lang, callback) {
//      console.log(`Я учу: ${lang}`);
//      callback();
//  }

//  learnJS('JavaScript', function(){
//      console.log('Я прошел єтот урок!');
//  });

// Объекты, деструктуризация объектов 20

// const options = {
//     name: 'text',
//     width: 1024,
//     height: 1024,
//     colors : {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);

// delete options.name;
// console.log(options);

// for (let key in options) { // Синтаксис для перебора ОБЕКТОВ.ВАЖНО
//     if (typeof(options[key])=== 'object'){
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key] [i]}`);
//         }
//     }else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);

//     }
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
// } // трудно пиздец

// 2 пример
// const options = {
//     name: 'text',
//     width: 1024,
//     height: 1024,
//     colors : {
//         border: 'black',
//         bg: 'red'
//     }
// };

// let counter = 0;
// for (let key in options) { // Синтаксис для перебора ОБЕКТОВ.ВАЖНО
//     if (typeof(options[key])=== 'object'){
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key] [i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
//       console.log(counter);

// 3 Object keys
// const options = {
//         name: 'text',
//         width: 1024,
//         height: 1024,
//         colors : {
//             border: 'black',
//             bg: 'red'
//         }
//     };
// console.log(Object.keys(options));

// 3.2 Object keys

// const options = {
//             name: 'text',
//             width: 1024,
//             height: 1024,
//             colors : {
//                 border: 'black',
//                 bg: 'red'
//             }
//         };
//     console.log(Object.keys(options).length);
//     console.log(Object.keys(options));

// 4 Методы
// const options = {
//                 name: 'text',
//                 width: 1024,
//                 height: 1024,
//                 colors : {
//                     border: 'black',
//                     bg: 'red'
//                 },
//                 makeTest:function(){
//                     console.log('Test');
//                 }
//             };

//             options.makeTest();

//         console.log(Object.keys(options).length);
//         console.log(Object.keys(options));

// 5 Деструктулизация объектов
const options = {
      name: 'text',
      width: 1024,
      height: 1024,
      colors : {
      border: 'black',
      bg: 'red'
    },
    makeTest:function(){
    console.log('Test');
    }
 };
    
    options.makeTest();

const {border, bg} = options.colors; 
console.log(border);