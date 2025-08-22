const createPromise = (age) => {
  return new Promise((resolve, reject) => {
    if (typeof age != "number" || age < 1) return reject("Enter a valid Value");
    if (age >= 18) {
      resolve("You are allowed to Vote");
    } else {
      reject("You are underage");
    }
  });
};

const handlePromise = async (age) => {
  try {
    let result = await createPromise(age);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// handlePromise(19);
// handlePromise(-19);
// handlePromise(17);

const newPromise = (success = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Promise is handled");
      } else {
        reject("Promise failed");
      }
    }, 1000);
  });
};

const handleResult = async (success) => {
  try {
    let result = await newPromise(success);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
handleResult(true);
handleResult(false);
