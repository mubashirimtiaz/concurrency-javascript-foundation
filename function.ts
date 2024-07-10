//EXPECT NUMBER
function add(a: number, b: number): number {
  return a + b;
}

//EXPECT STRING

function greet(name: string): string {
  return `Hello ${name}`;
}

//EXPECT BOOLEAN
function powerOutage(light: boolean): void {
  if (light) {
    console.log('There is light');
  } else {
    console.log('Power outage');
  }
}

//EXPECT ARRAY
function customFind(arr: string[], element: string): boolean | void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
}

//EXPECT OBJECT
function logPersonName(person: TPerson): void {
  console.log(person.name);
}

type TPerson = {
  name: string;
  age: number;
};

const person: TPerson = {
  name: 'John',
  age: 30,
};

logPersonName(person);
