function parentFunction(func: () => void) {
  console.log('I am the parent function');
  func();
}

function childFunction() {
  console.log('I am the child function');
}

parentFunction(childFunction);
