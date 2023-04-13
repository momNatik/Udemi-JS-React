"use strict";

const btn = document.querySelector("button");
const overlay = document.querySelector('.overlay');

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('mouseenter', (event) => {
//     console.log('mouse here');
//     console.log(event.target);
//     event.target.remove();
// });

// удаляем кнопку по щелчку
// const deleteElement = (e) => {
//   e.target.remove();
// };

// btn.addEventListener("click", deleteElement);


// всплытие событий
const hoistingEvents = (e) => {
    console.log(e.target);
    // console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', hoistingEvents);
// overlay.addEventListener('click', hoistingEvents);

// удаление события, обычно используется в условиях (если условие выполняется, удалить обработчик событий) 
// btn.removeEventListener('click', hoistingEvents);

// Вешаем обработчик события на коллекцию элементов
const btns = document.querySelectorAll('button');

// btns.forEach(btn => {
//     btn.addEventListener('click', hoistingEvents);
// });


// Прописываем своё поведение для элементов, отличное от браузерного по умолчанию
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
event.preventDefault();
console.log(event.target);
});

// Третий аргумент для обработчика событий - опции

btn.addEventListener('click', hoistingEvents, {once: true});