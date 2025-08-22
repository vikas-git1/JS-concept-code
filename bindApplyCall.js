// !Call
const greet = function (greeting, name) {
  console.log(`${greeting}, my name is ${name}, I am ${this.role}`);
};
// greet("Hellow", "Vikas");

const obj = { role: "Developer" };
greet.call(obj, "Hellow", "Vikas");

// ! Apply
const introduce = function (greeting, teacher) {
  console.log(
    `${greeting}, This is ${teacher}, your new Teacher for ${this.role}`
  );
};
let subObj = { role: "English" };
introduce.apply(subObj, ["Namaste", "Shubham"]);

// ! Bind
const layoff = function (greeting, employee) {
  console.log(
    `${greeting}, we are laying off ${employee} from ${this.role} role immedietly`
  );
};
let layoffObj = { role: "Fronent Developer" };

let result = layoff.bind(layoffObj, "Excuse me", "Madhur Rathore");
result();
