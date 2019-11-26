import "./styles.css";
// import wages from "./encapsulate";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function createCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();
const c1 = increment();
console.log(c1);
const c2 = increment();
console.log(c2);

// let wages = {
//   baseSalary: 30000,
//   overTime: 10,
//   rate: 20,
//   getWage: function() {
//     return function() {
//       return this.baseSalary + this.overTime * this.rate;
//     };
//   }
// };

// let wageInstance = wages.getWage();
// let bindedWageInstance = wageInstance.bind(wages);
// console.log(bindedWageInstance());
// console.log(wageInstance.call(wages));

/**
 * Inheritance In Javascript
//  */

// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
// }

// Person.prototype.greeting = function() {
//   console.log("Hi I'm " + this.name.first);
// };

// // let person = new Person("aditya", "padhi", 2019-1989, "male", ["computer games"]);
// // person.greeting();

// function Teacher(first, last, age, gender, interests, subjects) {
//   Person.call(this, first, last, age, gender, interests);
//   this.subjects = subjects;
// }

// Teacher.prototype = Object.create(Person.prototype);

// Teacher.prototype.getSubjects = function() {
//   return this.subjects.join(" ,");
// };

// let teacher = new Teacher(
//   "jignesh",
//   "padhi",
//   2019 - 1989,
//   "male",
//   ["computer games"],
//   ["physics", "maths"]
// );

// console.log(teacher.getSubjects());
// console.log(teacher.greeting());

// var fragment = document.createDocumentFragment();

// for (let i = 0; i< 20; i++) {
//   let li = document.createElement("li");
//   li.innerHTML = `List Item ${i}`;
//   fragment.appendChild(li);
// }

// let listNode = document.querySelector("#list");
// listNode.appendChild(fragment)

var bla = 23;
console.log(bla);
