// console.log("hello world");
// console.log(23 + 97);
// console.log((4 + 6 + 9) / 77);
// const a = 1;
// const b = 2;
// console.log(a + b);
// console.log(a * 2);
// let c = 7 * b;
// console.log(c);

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// console.log(percentage);

// function add(x, y) {
//   return x + y;
// }

// const multiply = (x, y) => {
//   return x * y;
// };

// const cap = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// };

// const lastLetter = (str) => {
//   return str.charAt(str.length - 1);
// };
function fizzBuzz() {
  let output = [];
  for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    output.push(result || i);
  }
  return output.join("<br>");
}

const outputLi = document.getElementById("output");

outputLi.innerHTML = fizzBuzz();

// -----------
// const sumArray = function (arr) {
//   let sum = 0;
//   arr.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// };

// console.log(sumArray([2, 8, 2, 4, 5, 6]));

const cars = ["bmw", "audi", "toyota", "honda"];
let size = cars.length;

const parts = ["tires", "wheels", "engine", "seats"];

const vehicles = cars.push(parts[0]);

console.log(vehicles, cars);
