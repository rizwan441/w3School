// console.log("first");
// console.error("error");
// console.warn("warning");

// variable
// ? Three ways to decelar the variable
// let ,var and cont
//  with let you can reasssign the value

// const age = 30;
// age = age + 1;

//  also you cant do this
// const score;
// score = 10;
//   this will also give an erroe  beacuse when you have to intilize the cont while declearing

//  error in above code. you cant cange the value of const

//             -------------Data Type
// ------Premitive Data type-----
//------- Data is directly assign to the Memory.
// ?  String, Numbers , Boolean, Undefine , Null, Symbol are primative data types

// const name = "john";
// const age = 30;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// z = "hshs";
// console.log(typeof z);

// console.log(age);

//  ---------------String Method---------
//------Concatination ----------

// const name = "john";
// const age = 30;

// console.log("my name is " + name + " and I am " + age + " year Old");

//  Templete Literals  / ES6 Feature

// console.log(`my name is ${name} and I am ${age}`);

// const s = "hello word";

//  Hoe to find the length of the string

// const a = s.length;
// console.log(s.toUpperCase());

//  how to extract the asub string

// console.log(s.substring(0, 5));

// how to conver string in to Array

// console.log(s.split("").reverse().join());

// const str = "IT, Computer, Code";
// const arr = str.split(", ");

// arr.push("hello");
// console.log(arr);

// ------------------ Arrays  -------------

// const numbers = new Array(1, 2, 3, 4, 5, 6, 7);

// const a = numbers.filter(2);

// const fruit = ["apple", "orange", "banana", 3, true];

//  to add the elemnt at the add we use PUSH  method

// fruit.push("mango");
// to add the element at the start we use  UNSHIFT method
// fruit.unshift("grape");

// const b = Array.isArray(`${1}`);
//   index of a spacific elemnt

// console.log(fruit.indexOf("orange"));

// console.log(fruit.at(3));

// console.log(fruit.join("*"));
// fruit[fruit.length] = "kivi";
// console.log("first", fruit);

// ----------------Objcts------------

/*
const car = {
  type: "faint,",
  model: "500",
  color: "white",
  fulldetails: function () {
    return this.model + this.color;
  },
};

console.log({ ...car });

console.log(car.type);
console.log(car["type"]);
console.log(car.fulldetails());


*/

// ----------For loop----------

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;

const todos = [
  {
    id: 1,
    text: "meeting",
    isCompleted: false,
  },
  {
    id: 2,
    text: "outing",
    isCompleted: false,
  },
  {
    id: 3,
    text: "working",
    isCompleted: true,
  },
];

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.isCompleted);
// }

// ----hig oreder array method -----

////       for each ------------

// todos.forEach((tode) => {
//   console.log(tode.text);
// });

// ---    map--------------

// const todoData = todos.map((todo) => {
//   return todo.text;
// });

// --- filter methiod -----------

// const completedTodos = todos
//   .filter((todo) => {
//     return todo.isCompleted === true;
//   })
//   .map((todo) => {
//     return todo.text;
//   });
// console.log(completedTodos);

// const color = "ww";

// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   default:
//     console.log("Color is nither  red nor blue");
// }
