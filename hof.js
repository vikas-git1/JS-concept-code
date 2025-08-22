const arr = [10, 20, 30, 40, 50];
let modifiedArr = arr.map((num) => num * 10);
// console.log(modifiedArr);

let filteredArr = arr.filter((num) => num > 30);
// console.log(filteredArr);

let sum = arr.reduce((sum, num) => sum + num, 0);
// console.log(sum);

const findProduct = (a) => {
  return function result(b) {
    let product = a * b;
    return { product: product };
  };
};
// console.log(findProduct(10)(20));
