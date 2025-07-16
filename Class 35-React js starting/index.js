//Destructuring assignment

const lol = ["Apple", "Banana", "Cherry","Date", "Elderberry"];
const [sp1, sp2] = lol;
console.log(sp1); // Output: Apple
console.log(sp2); // Output: Banana

//Destructuring assignment with objects
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const { name, age } = person;
console.log(name); // Output: John
console.log(age);  // Output: 30