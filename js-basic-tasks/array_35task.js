// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const familyMembers = arr.join(' ');

    return arr.length === 0
        ? 'Семья пуста'
        : `Семья состоит из: ${familyMembers}`;
}

console.log(showFamily(family));


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return (arr.join('\n').toLowerCase());
}

console.log(standardizeStrings(favoriteCities));



// 3) Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') {
        return ('Ошибка!');
    }
   let arr = str.split('');
   arr.reverse();
   return arr.join('');
}

console.log(reverse(someString));


// 4) У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// нужно создать главную функцию банкомата, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу, второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют', если не пустой, то нужно возвращать список доступных валют (за исключением той, которая отсутствует)

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const missingCurrency = 'EUR';

const allCurrencies = baseCurrencies.concat(additionalCurrencies);

function availableCurr(currencies, missingCurr) {
    
    if (currencies.length === 0) {
        return ('Нет доступных валют');
    } 


    const availableCurrencies = currencies.filter((curr) => curr !== missingCurr);
    const availableCurrenciesText = availableCurrencies.join('\n');
    const result = `Доступные валюты:\n${availableCurrenciesText}`;

    // function deleteIfCurrIsMissing(element, index) {
    //     if (element == missingCurr) {
    //        delete currencies[index];
    //     }
    // }

    // currencies.forEach(deleteIfCurrIsMissing);

    // let result = 'Доступные валюты:\n';

    // currencies.forEach((element) => {
    //     result += element +'\n';
    // });

    return result;
}

console.log(availableCurr(allCurrencies, missingCurrency));