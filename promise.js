const createPromise = (num) => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof num != "number")
        throw new Error("The type of input is not number");
      if (num < 0) throw new Error("Enter a Valid number above 0");
      if (num % 2 === 0) {
        resolve(`The given Number "${num}" is Even`);
      } else {
        resolve(`The given Number "${num}" is Odd`);
      }
    } catch (error) {
      reject(error.message);
    }
  });
};

// createPromise(10)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// createPromise(19)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// createPromise("11")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// createPromise(-100)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const handlePromise = (success = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Promise is Resolved");
      } else {
        reject("Promise is Rejected");
      }
    }, 1000);
  });
};

handlePromise(true)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

handlePromise(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
