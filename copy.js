//  Create Shallow and Deep Copy

//! Arrays
const arr1 = [1, 2, [3, 4, 5], 6, [7, 8, [9, 0]]];
// Deep Copy
// Shallow Copy
const arrCopy1 = [...arr1];
// console.log(arrCopy1);
const arrCopy2 = arr1.slice(0);
// console.log(arrCopy2);

//! Object
const obj1 = {
  unserName: "Vikas",
  surname: "Mewara",
  details: { age: 24, profession: "developer" },
};

// Deep Copy
const deepObj = JSON.parse(JSON.stringify(obj1));
deepObj.details.age = 40;
// console.log(obj1);
// console.log(deepObj);

// Shallow copy.
const objCopy1 = { ...obj1 };
// console.log(objCopy1);
const objCopy2 = Object.assign({}, obj1);
objCopy2.details.profession = "Teacher";
// console.log(obj1);
// console.log(objCopy2);
