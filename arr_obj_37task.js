// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData.
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая будет возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  const allShopsArea = data.shops
    .map((key) => ({
      areaOfOneShop: key.width * key.length,
    }))
    .reduce((acc, number) => acc + number.areaOfOneShop, 0);

  const volumeOfMall = allShopsArea * shoppingMallData.height;

  const requiredBudget = volumeOfMall * shoppingMallData.moneyPer1m3;

  return requiredBudget <= shoppingMallData.budget
    ? "Бюджета достаточно"
    : "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData));

// Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк (список студентов) и количество игроков в 1 команде.
// Внутри она сначала сортирует имена по алфавиту.
// Затем распределяет студентов в команды по алфавитному порядку. Эти команды должны быть массивами.
// Как итог, функция возвращает новый массив с максимально возможным количесвом команд и строкой как последний элемент в которой указываются имена оставшихся студентов.
// Если лишних студентов нет, то результат строки будет: 'Оставшиеся студенты: -'

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Bernard",
  "Takesi",
  "Sam",
];

const quantity = 2;

function sortStudentsByGroups(list, groupQuantity) {
  const alphabetSortArr = list.sort();

  const result = [];
  for (let i = 0; i + groupQuantity < alphabetSortArr.length; i += groupQuantity) {
    const subarray = alphabetSortArr.slice(i, i + groupQuantity);
    result.push(subarray);
  }
  
  const remainingStudents = alphabetSortArr
  .slice(result.length * groupQuantity)
  .join(", ");

  const availabilityOfRemaning =
    alphabetSortArr.length % groupQuantity === 0
      ? "-"
      : `${remainingStudents}`;

  const listOfRemainingStudents = `Оставшиеся студенты: ${availabilityOfRemaning}`;

  result.push(listOfRemainingStudents);

  return result;
}

console.log(sortStudentsByGroups(students, quantity));
