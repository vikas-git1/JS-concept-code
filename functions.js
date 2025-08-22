// Function declaration.
function add(a, b, c) {
  return { sum: a + b + c };
}
// console.log(add(10, 20, 30));

// Function Expression.
const subtract = function (a, b) {
  return { subtract: a - b };
};
// console.log(subtract(20, 5));

// Arrow Function
const product = (a, b) => {
  return { product: a * b };
};
// console.log(product(10, 5));

// Higher order function
const hof = (a) => {
  return function innerFunc(b) {
    return { division: a / b };
  };
};
// console.log(hof(10)(2));

// IFFE
(function () {
  //   console.log("This is IFFE");
})();

// Callback Function
const message = () => console.log(`Ram ram ji`);
// setTimeout(message, 1000);

// Pure Function
const pure = (num) => {
  let count = 10;
  return { value: count + num };
};
// console.log(pure(10));
// console.log(pure(10));

// Impure Function.
let count = 10;
const impure = () => {
  count++;
  return { count: count };
};
// console.log(impure());
// console.log(impure());
// console.log(impure());

// Generator Function
function* generateValue() {
  yield 1;
  yield 2;
  yield 3;
}
let result = generateValue();
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
