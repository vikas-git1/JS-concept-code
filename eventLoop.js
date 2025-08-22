console.log("start");
setTimeout(() => {
  console.log("Timer with 100ms");
}, 100);
setTimeout(() => {
  console.log("Timer with 0ms");
}, 0);
Promise.resolve()
  .then(() => console.log("Promise: Micro Task1"))
  .then(() => console.log("Promise: Micro Task2"));
console.log("End");
