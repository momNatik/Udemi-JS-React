const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
//   3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами).
// Если данные в объекте поменяются, то и сообщение тоже изменится.

  showAgeAndLangs: function (Plan) {
    let {skills: {languages}} = Plan;
    let lang = '';
    languages.forEach(element => {
        if (element == languages[languages.length-1]) {
            lang += element;     
        } else {
             lang += element + ' ';
        }
       
    });

    return `Мне ${Plan.age} и я владею языками: ${lang.toUpperCase()}`;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

function showExperience(plan) {
  let {
    skills: { exp },
  } = plan;
  return exp;
}


// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

function showProgrammingLangs(plan) {
  let result = "";
  let {
    skills: { programmingLangs },
  } = plan;

  if (Object.keys(programmingLangs).length == 0) {
    return result;
  } else {
    for (let key in programmingLangs) {
      result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
  }
  return result;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));

// ООП - обьектно ориентированное программирование
const soldier = {
  health: 500,
  armor: 100,
  sayHello: function() {
    console.log('Hello');
  } 
};

const jonh = {
  health: 100,
}

Object.setPrototypeOf(jonh, soldier);
// установили прототип от уже созданного джона к солдату, теперь он наследует все его свойства


const andry = Object.create(soldier);
// установили прототип на этапе создания

