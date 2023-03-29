// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

//   3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами).
// Если данные в объекте поменяются, то и сообщение тоже изменится.


const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLanguages: [
      {
        name: 'C#',
        learnProgress: 1,
      },
      {
        name: 'PHP',
        learnProgress: 0.3,
      },
      {
        name: 'JS',
        learnProgress: 0.6,
       },
    ],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },

  showAgeAndLangs: function (Plan) {
    let {skills: {languages}} = Plan;

    const joinedLanguages = languages.join(' ');
    const toUpperCaseLanguages = joinedLanguages.toUpperCase();

    return `Мне ${Plan.age} и я владею языками: ${toUpperCaseLanguages}`;
  },
};



function showExperience(plan) {
  let {
    skills: { exp },
  } = plan;
  return exp;
}



function showProgrammingLangs(plan) {
  let {
    skills: { programmingLangs },
  } = plan;

  if (Object.keys(programmingLangs).length == 0) {
    return '';
  } 
  
  const result = Object.keys(programmingLangs)
  .map((key) => ({ name: key, skillDegree: programmingLangs[key]}))
  .map((x) => `Язык ${x.name} изучен на ${x.skillDegree}`)
  .join('\n');

  return result;
}

// Функция по работе с массивом programmingLanguages внутри которого обьекты

function getProgrammingExpience(plan) {
  if (plan.skills.programmingLanguages == 0) {
    return '';
  }

  const result = plan.skills.programmingLanguages
  .map((programmingLanguage) => ({
    name: programmingLanguage.name,
    skillDegree: programmingLanguage.learnProgress*100
  }))
  .map((x) => `Язык ${x.name} изучен на ${x.skillDegree}%`)
  .join('\n');

  return result;
}

console.log(getProgrammingExpience(personalPlanPeter));
// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));