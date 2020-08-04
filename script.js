'use strict';

// // const result = confirm('do you have 18?', '18');
// // console.log(result);

// // const answer = +prompt('do you have 18?','');
// // console.log(answer + 5);

// const answers = [];

// // answers[0] = prompt('Как ваше имя?','');
// // answers[1] = prompt('Сколько вам лет?','');
// // answers[2] = prompt('Как ваша фамилия?','');

// // console.log(typeof(answers));

// // let incr = 10,
// //     decr = 10;
// // incr ++;
// // decr --;

// // console.log(incr);
// // console.log(decr);

// let num = 50; // const не меняется поєтому let

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// Домашка 12\
 
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',''); 

    if (numberOfFilms == '0' ) {
     alert('Это клуб кинолюбителей, Вы точно не ошиблись страничкой?Попробуем еще раз.');
     document.location.reload(true);

    } else if  (numberOfFilms >= 1) {
        alert('Спасибо');
    }
      else if (numberOfFilms == '',String) {
         alert('Введите пожалуйста цифры');
         document.location.reload(true);
     }
      console.log(numberOfFilms);

      
     
