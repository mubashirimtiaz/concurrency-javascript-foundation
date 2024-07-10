function washing(callback) {
  setTimeout(() => {
    console.log('washing done');
    callback();
  }, 5000);
}
function soak(callback) {
  setTimeout(() => {
    console.log('soaking done');
    callback();
  }, 3000);
}
function drying() {
  setTimeout(() => {
    console.log('drying done');
  }, 2000);
}
washing(() => {
  soak(() => {
    drying();
  });
});

console.log('I am making Biryani...');
