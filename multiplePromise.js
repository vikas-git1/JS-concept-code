let p1 = Promise.resolve("Promise 1 Handled");
let p2 = Promise.resolve("Promise 2 Handled");
let p3 = Promise.resolve("Promise 3 Handled");
let p4 = Promise.resolve("Promise 4 Handled");
let p5 = Promise.reject("Promise 5 is rejected");
// Promise.all([p1, p2, p3, p4])
//   .then((result) => console.log("All :", result))
//   .catch((error) => console.log("All :", error));

// Promise.race([p1, p2, p3, p4, p5])
//   .then((result) => console.log("Race: ", result))
//   .catch((error) => console.log("Race: ", error));

const handlePromiseAll = async () => {
  try {
    let result = await Promise.all([p1, p2, p3, p4, p5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// handlePromiseAll();

const handlePromiseAllSetteled = async () => {
  try {
    let result = await Promise.allSettled([p1, p2, p3, p4, p5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// handlePromiseAllSetteled();
