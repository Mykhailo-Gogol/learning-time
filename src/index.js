//import

import a from "./js/a";
import b from "./js/b";
import css from "./css/style.css";

console.log("Helo World");
console.log(a);
console.log(b);

const add = (a, b) => a + b;
add(2, 3);

//promise

const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.3;
  setTimeout(() => {
    if (success) {
      resolve("data");
    }
    reject("rejected");
  }, 500);
});

console.log("before");

promise
  .then((result) => console.log(`%c${result}`, "color: green"))
  .catch((error) => console.log(`%c${error}`, "color: red;"))
  .finally(() => console.log("finally"));

console.log("after");

//chaining
const promise2 = new Promise((resolve, reject) => {
  resolve(5);
});

promise2
  .then((x) => {
    console.log("x: ", x);
    return x * 2;
  })
  .then((y) => {
    console.log("y: ", y);
    return y + y;
  })
  .then((z) => {
    console.log("z: ", z);
  });

//fetch

fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((json) => console.log(json.name));
