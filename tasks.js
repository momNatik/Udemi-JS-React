/*------------------------------------------------------------------------*/


console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);



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
    
         const data = [5, 10, 'Shopping', 20, 'Homework'];
    
            for ( let i = 0; i<data.length; i++) {
                if (typeof data[i] === 'number') {
                    data[i] += data[i];
                } else 
                if (typeof data[i] === 'string') {
                    data[i] += ' - done';
                }
            }
            
        return data;
    }
    


/*------------------------------------------------------------------------*/
//Функция, которая разворачивает массив наоборот и записывает данные в новый массив

    function thirdTask() {
        const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];
        let counter = data.length-1;
    
       
        for (let i = 0; i <data.length; i++) {
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
      for (let j = 1; j < lines-i; j++) {
        result += " ";
      }
      for (let k = lines-2 * i; k <= lines; k++) {
          result += "*";
      }
      result += "\n";
    }
    return result;
}



/*------------------------------------------------------------------------*/
//Фуекция, которая на вход принимает 1 аргумент с именем человека и возвращает строку.

function sayHello(name) {
  return ('Привет, ' + name + '!')
 }



 /*------------------------------------------------------------------------*/
 // Функция, которая возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше
 function returnNeighboringNumbers(num) {
     let arr = [num-1, num, num+1];
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
    if (i != numOfRepeat){
      container+= '---';
    }
  
} 
return container;
}

console.log(getMathResult(5, 3));




