// Функция возведения в степень
function pow(n, x) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
// console.log(pow(2, 3));

let students = {
  js: [
    {
      nam: "John",
      progress: 100,
    },
    {
      nam: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        nam: "Peter",
        progress: 20,
      },
      {
        nam: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        nam: "Sam",
        progress: 10,
      },
    ],
    semi: {
      students: [
        {
          nam: "Test",
          progress: 100,
        },
      ],
    },
  },
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let studentsCounter = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      studentsCounter += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        studentsCounter += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / studentsCounter;
}

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const resultOfRecursion = getTotalProgressByRecursion(students);

// console.log(getTotalProgressByIteration(students));
// console.log(resultOfRecursion[0] / resultOfRecursion[1]);


// Задача: Напишите функцию, которая вычисляет факториал.
// с помощью цикла
function factorial(n) {
  let result = n;
  if (typeof n != "number") {
    return "type Error";
  }

  for (let i = 1; i < n; i++) {
    if (n - i === 1) {
      result *= 1;
    } else {
      result *= (n - i);
    }
  }
  return result;
}


// с помощью рекурсии 
function factorialByRecursion(n) {
    if (typeof n != "number" || !Number.isInteger(n) || n < 0) {
        return "Error";
      }

    if (n === 0 || n === 1) {
        return 1;
    } 
        return n * factorialByRecursion(n-1);
    
}

// console.log(factorial(5));
// console.log(factorialByRecursion(5));