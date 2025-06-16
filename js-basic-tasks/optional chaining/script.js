'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block?.textContent);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
}

userData.say();
userData.hey?.();

console.log(userData.skills?.js);