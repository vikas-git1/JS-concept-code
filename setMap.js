//! Set
const arr = [1, 1, 2, 3, 4, 2, 3, 5, 5, 4];
const unique = new Set(arr);
// console.log(unique);
// Add
// console.log(unique.add(6));
// Delete
// console.log(unique.delete(5));
// Check
// console.log(unique.has(5));

// ! Map
let map = new Map();
map.set("100", "string");
map.set(100, "number");
map.set(true, "boolean");
console.log(map);
