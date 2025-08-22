//! Global scope
// In Browser: this refers to Window object.
// In Node: this refers to empty object {}
// console.log(this);

//! Arrow Function
// In arrow function this referes sourounding lexical scope here it is global.
const arrowFun = () => {
  console.log(this);
};
// arrowFun();

// ! Function declaration
// In non-strict mode → refers to the window (or global) object.
// In strict mode → this is undefined.
const funDeclaration = function () {
  console.log(this);
};
// funDeclaration();

// ! Inside an object method
const user = {
  userName: "Vikas Mewara",
  age: 24,
  detail: function () {
    console.log(this.age);
  },
};
// user.detail();

// ! In event listner
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this); // button element
// });

// document.querySelector("button").addEventListener("click", () => {
//   console.log(this); // window (lexical scope, not button)
// });
