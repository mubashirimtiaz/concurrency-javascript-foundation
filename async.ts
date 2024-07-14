//CALLBACK

// function washing(callback: () => void) {
//   console.log('Washing started...');
//   setTimeout(() => {
//     console.log('washing done!');
//     callback();
//   }, 5000);
// }

// function soaking(callback: () => void) {
//   console.log('Soaking started...');
//   setTimeout(() => {
//     console.log('Soaking done!');
//     callback();
//   }, 3000);
// }

// function drying() {
//   console.log('Drying started...');
//   setTimeout(() => {
//     console.log('Drying done!');
//   }, 2000);
// }

// console.log('folding laundry');

// washing(() => {
//   soaking(() => {
//     drying();
//   });
// });

// console.log('I am making biryani');

//PROMISE

function washing() {
  console.log('Washing started...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('washing done!');
    }, 5000);
  });
}

function soaking() {
  console.log('Soaking started...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Soaking done!');
    }, 3000);
  });
}

function drying() {
  console.log('Drying started...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Drying done!');
    }, 2000);
  });
}

// THEN CATCH

// washing()
//   .then((value) => {
//     console.log(value);
//     return soaking();
//   })
//   .then((value) => {
//     console.log(value);
//     return drying();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ASYNC AWAIT

async function runWashingMachine() {
  try {
    const result1 = await washing();
    console.log(result1);
    const result2 = await soaking();
    console.log(result2);
    const result3 = await drying();
    console.log(result3);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('I will run anyway!');
  }
}

console.log('folding laundry');

runWashingMachine();

console.log('I am making biryani...');
