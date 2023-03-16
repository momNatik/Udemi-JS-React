/*------------------------------------------------------------------------*/

console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log((!1 && 2) || !3);
console.log(25 || (null && !3));
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || (null && !3 && undefined) || 5);
console.log((5 === 5 && 3 > 1) || 5);



/*------------------------------------------------------------------------*/
// Функция, которая выводит числа от 5 до 10 включительно в консоль

function firstTask() {
  let a = 5;
  while (a < 11) {
    console.log(a);
    a++;
  }
}



/*------------------------------------------------------------------------*/
// Функция, которая выводит числа от 20 до 10 в консоль в обратном порядке. Когда цикл доходит до числа 13 - останавливает весь цикл

function secondTask() {
  for (let i = 20; i > 9; i--) {
    if (i === 13) {
      break;
    }
    console.log(i);
  }
}



/*------------------------------------------------------------------------*/
// Функция, которая выводит чётные числа от 2 до 10 включительно

function thirdTask() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}



/*------------------------------------------------------------------------*/
// Функция, которая выводит нечетные числа от 2 до 16 (нужно переписать цикл на while)

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  let i = 1;

  while (i < 16) {
    i++;

    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}



/*------------------------------------------------------------------------*/
// Функция, которая заполняет массив цифрами от 5 до 10 включительно

function fifthTask() {
  const arrayOfNumbers = [];
  let count = 5;

  for (let i = 0; i < 6; i++) {
    arrayOfNumbers[i] = count++;
  }

  return arrayOfNumbers;
}



/*------------------------------------------------------------------------*/
//  Функция, которая заполняет новый массив числами из старого

function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  return result;
}



/*------------------------------------------------------------------------*/
//Функция, которая все числа увеличивает в 2 раза, а если попадается строка - то к ней добавляется " - done"

function secondTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      data[i] += data[i];
    } else if (typeof data[i] === "string") {
      data[i] += " - done";
    }
  }

  return data;
}



/*------------------------------------------------------------------------*/
//Функция, которая разворачивает массив наоборот и записывает данные в новый массив

function thirdTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  const result = [];
  let counter = data.length - 1;

  for (let i = 0; i < data.length; i++) {
    result[i] = data[counter];
    counter--;
  }

  return result;
}



/*------------------------------------------------------------------------*/
// Функция, которая рисует пирамидку по центру (равнобедренный треугольник)

function pyramidBuild() {
  const lines = 6;
  let result = "";
  for (let i = 0; i < lines; i++) {
    for (let j = 1; j < lines - i; j++) {
      result += " ";
    }
    for (let k = lines - 2 * i; k <= lines; k++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}



/*------------------------------------------------------------------------*/
//Фуекция, которая на вход принимает 1 аргумент с именем человека и возвращает строку.

function sayHello(name) {
  return "Привет, " + name + "!";
}



/*------------------------------------------------------------------------*/
// Функция, которая возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше

function returnNeighboringNumbers(num) {
  let arr = [num - 1, num, num + 1];
  return arr;
}



/*------------------------------------------------------------------------*/
// Функция, которая принимает в себя 2 аргумента, оба числа.
// Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии
// Функция должна возвращать строку (или первый аргумент), где эти числа идут по порядку, разделенные тремя дефисами "---"
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент

function getMathResult(num, numOfRepeat) {
  if (numOfRepeat <= 0 || typeof numOfRepeat != "number") {
    return num;
  }
  let container = "";
  let number = 0;
  for (let i = 1; i <= numOfRepeat; i++) {
    container += number + num;
    number = number + num;
    if (i != numOfRepeat) {
      container += "---";
    }
  }
  return container;
}

console.log(getMathResult(5, 3));



/*------------------------------------------------------------------------*/
// Функция, которая вычисляет обьем и площадь поверхности куба по длине ребра

function calculateVolumeAndArea(length) {
  if (typeof length == "number" &&
    Number.isInteger(length) &&
    Math.sign(length) == 1) {

    let volume = length * length * length;
    let area = length * length * 6;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

  } else {
    return "При вычислении произошла ошибка";
  }
}

console.log(calculateVolumeAndArea(-5.5));



/*------------------------------------------------------------------------*/
// Функция, которая по переданному ей номеру места вычисляет номер купе в вагоне

function getCoupeNumber(num) {
  if (
    typeof num != "number" ||
    !Number.isInteger(num) ||
    Math.sign(num) == -1
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  }

  for (let i = 1; i <= 9; i++) {
    if (num / 4 <= i) {
      return i;
    }
  }
}

console.log(getCoupeNumber(0));



/*------------------------------------------------------------------------*/
// Функция которая переводит время из минут в часы и минуты

function getTimeFromMinutes(time) {
  if (
    typeof time != "number" ||
    !Number.isInteger(time) ||
    Math.sign(time) == -1
  ) {
    return "Ошибка, проверьте данные";
  }
  let hour = Math.floor(time / 60);
  let min = time % 60;
  if (hour == 1) {
    return `Это ${hour} час и ${min} минут`;
  } else if (hour >= 2 && hour <= 4) {
    return `Это ${hour} часа и ${min} минут`;
  } else {
    return `Это ${hour} часов и ${min} минут`;
  }
}

console.log(getTimeFromMinutes(170));


/*------------------------------------------------------------------------*/
// Функция, которая ищет максимальное значение среди переданных

function findMaxNumber(a, b, c, d) {
  if (typeof (a && b && c && d) == "number") {
    return Math.max(a, b, c, d);
  } else {
    return 0;
  }
}

console.log(findMaxNumber(1, 6, -77, "9"));



/*------------------------------------------------------------------------*/
// Функция которая выводит заданное кол-во чисел Фибоначи

function fib(num) {
  if (typeof num != 'number') {
    return '';
  }
  let result = '';
  let a = 0;
  let b = 1;
  for (let i = 0; i < num; i++) {
      if (i === num-1) {
        result+= (`${a}`);
      } else {
        result+= (`${a} `);
      }
      let c = a + b;
      a = b;
      b = c;
  }
  return result;
}

console.log(fib(6));



/*------------------------------------------------------------------------*/
// Callback функция
function learnCallback(learn, callback) {
    console.log(`Я учу ${learn}`);
    callback();
} 


// первый вариант с анонимной функцией
learnCallback('JS', function() {
    console.log('Я прошел этот урок!');
});


// второй вариант со сторонней функцией 
function done() {
    console.log('Я прошел этот урок!');
}

learnCallback('JS', done);


var greet = function() {
let a = 'nAtA'[0].toUpperCase() + 'nata'.slice(1).toLowerCase();
  return a;
};

console.log(greet());

function solve(s){
  let up = 0;
  let low = 0;
 for (let i = 0; i < s.length; i++) {
   if (s[i] == s[i].toUpperCase()) {
     up++;
   } else {
     low++;
   }
 }
  if (low >= up) {
    s = s.toLowerCase();
  } else {
    s = s.toUpperCase();
  }
  return s;
}

console.log(solve('Case'));



function decipherThis(str) {
  let array = str.split(' ');
  let result = '';
  for (let i = 0; i < array.length; i++) {
    let uniCode = parseInt(array[i], 10);
    let letter = String.fromCodePoint(uniCode);
    let a = ('' + uniCode).length;
    let word = letter + array[i].slice(a-1);
    let resultWord = word[word.length-1] + word.slice(1, word.length-2) + word[0];
    result += resultWord + ' ';
    return letter;
  }
  return array;
} 

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));