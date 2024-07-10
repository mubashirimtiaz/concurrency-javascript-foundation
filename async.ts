function washing(callback) {
  console.log('washing started...');
  setTimeout(() => {
    console.log('washing done');
    callback();
  }, 5000);
}

function soak(callback) {
  console.log('soaking started...');
  setTimeout(() => {
    console.log('soaking done');
    callback();
  }, 3000);
}

function drying() {
  console.log('drying started...');
  setTimeout(() => {
    console.log('drying done');
  }, 2000);
}

washing(() => {
  soak(() => {
    drying();
  });
});

console.log('I am making Biriyani...');
