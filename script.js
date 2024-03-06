// TASK 1//

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let positiveNumbers = arr.filter(function (item) {
  return item > 0;
});

let sumArr = positiveNumbers.reduce(function (acc, elem) {
  return acc + elem;
});
console.log(
  `Загальна сума позитивних чисел складає ${sumArr} ,а кількість додатніх елементів становить : ${positiveNumbers.length}`
);

// TASK 2//

const minimalNumber = arr.reduce((currentMin, currentValue) => {
  if (currentMin < currentValue) {
    return currentMin;
  } else {
    return currentValue;
  }
});
let minimalIndex = arr.indexOf(minimalNumber);
console.log(`${minimalNumber} найменше число ,а його індекс : ${minimalIndex}`);

// TASK 3 //
const maxNumber = arr.reduce((currentMax, currentValue) => {
  if (currentMax > currentValue) {
    return currentMax;
  } else {
    return currentValue;
  }
});
let maxIndex = arr.indexOf(maxNumber);
console.log(`${maxNumber} найбільше число ,а його індекс : ${maxIndex}`);

// TASK 4 //

const negativeNumbers = arr.filter(function (number) {
  return number < 0;
});

console.log(`Кількість негативних елементів : ${negativeNumbers.length}`);

// TASK 5 //

const oddNumbers = arr.filter(function (number) {
  return number % 2 === 1 && number > 0;
});

console.log(
  `Не парні позитивні числа ${oddNumbers} та їхня кількість становить : ${oddNumbers.length}`
);

// TASK 6 //

const evenNumbers = arr.filter(function (number) {
  return number % 2 === 0 && number > 0;
});

console.log(
  `Парні позитивні числа ${evenNumbers} та їхня кількість становить : ${evenNumbers.length}`
);

// TASK 7 //
const sumOfEvenNumbers = evenNumbers.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue;
},
0);

console.log(`Сума парних позитивних елементів становить : ${sumOfEvenNumbers}`);

// TASK 8 //

const sumOfOddNumbers = oddNumbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(
  `Сума не парних позитивних елементів становить : ${sumOfOddNumbers}`
);

// TASK 9 //
const multPositiveNumbers = positiveNumbers.reduce(function (
  accumulator,
  currentValue
) {
  return accumulator * currentValue;
},
1);

console.log(
  `Добуток позитивних чисел буде дорівнювати : ${multPositiveNumbers}`
);

// TASK 10 //

const newArr = arr.map(function (item) {
  let newValue;
  if (item === maxNumber) {
    newValue = item;
  } else {
    newValue = 0;
  }
  return newValue;
});
newArr.sort(biggestNumber);
function biggestNumber (a,b) {
  return b - a;
}
console.log(newArr);
