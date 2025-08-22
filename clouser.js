const outerFunction = () => {
  let count = 0;
  return function innerFunction() {
    count++;
    return count;
  };
};
let count = outerFunction();

// You save outerFunction() in a variable once.
// That variable keeps the same memory of count.
// console.log(count());
// console.log(count());


// You call outerFunction() fresh every time.
// Each call makes a new count starting at 0.
// console.log(outerFunction()());
// console.log(outerFunction()());

