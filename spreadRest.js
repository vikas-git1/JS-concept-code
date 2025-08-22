// Spread and Rest operator

//! Spread Operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d"];
//1. merge
const mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);

// 2. copy
const copyArr = [...arr1];
// console.log(copyArr);

// 3. Pass array as arg
// console.log(Math.max(...arr1));

const arr = [23, 45, 67, 89, 12, 100, 200];
const sumNum = (a, b, c) => a + b + c;
// console.log(sumNum(...arr));

// ! Rest operator
// function parameter
const sum = (a, b, ...rest) => {
  return a + b + rest.reduce((sum, num) => (sum += num), 0);
};
// console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

const introduce = (name, ...hobbies) => {
  return `${name}'s hobbies are: ${hobbies.join(", ")}`;
};
// console.log(introduce("Vikas", "Cricket", "Kabbadi", "Volleyball"));

// Destructuring.
const targetArr = ["Vikas", "Madhur", "Shubham", "Rajiv", "Rahul"];
const [name1, name2, name3, ...rest] = targetArr;
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(rest);
