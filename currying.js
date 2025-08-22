function calculate(a, b, c, d) {
  let sum = a + b + c + d;
  let product = a * b * c * d;
  return {
    sum: sum,
    product: product,
  };
}
// console.log(calculate(10, 20, 20, 100));

function funcLevel1(a) {
  return function funcLevel2(b) {
    return function funcLevel3(c) {
      return function funcLevel4(d) {
        let sum = a + b + c + d;
        let product = a * b * c * d;
        return { sum: sum, product: product };
      };
    };
  };
}
// console.log(funcLevel1(10)(20)(20)(100));
