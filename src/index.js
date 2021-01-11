import a from "./js/a";
import b from "./js/b";
import "./css/style.css";

console.log("Helo World");
console.log(a);
console.log(b);

const add = (a, b) => a + b;
add(2, 3);

// promise

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

// chaining
const promise2 = new Promise((resolve) => {
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

// fetch

fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((json) => console.log(json.name));

// typicode
const url = "https://jsonplaceholder.typicode.com/users/1/todos";

function fetchSomething(searchQuery) {
  return fetch(searchQuery).then((response) => response.json());
}

function doSomething(data) {
  console.log(data[0]);
}

fetchSomething(url).then(doSomething);

// swapi2

const url2 = "https://swapi.dev/api/planets/1/";
function fetchSomething2(query) {
  return fetch(query).then((response) => response.json());
}

function doSomething2(data) {
  console.log(data);
}

fetchSomething2(url2).then(doSomething2);

// pb api
const references = {
  baseRef: document.querySelector(".js-base"),
  exchangeRef: document.querySelector(".js-exchange"),
  buyRef: document.querySelector(".js-buy"),
  saleRef: document.querySelector(".js-sale"),
};

const favurl =
  "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

function renderHtml(data) {
  console.log(data);
  const arrayOfBase = [];
  const arrayOfExchange = [];
  const arrayOfBuy = [];
  const arrayOfSale = [];
  data.forEach(({ base_ccy, ccy, buy, sale }) => {
    arrayOfBase.push(`<li>${base_ccy}</li>`);
    arrayOfExchange.push(`<li>${ccy}</li>`);
    arrayOfBuy.push(`<li>${buy}</li>`);
    arrayOfSale.push(`<li>${sale}</li>`);
  });
  references.baseRef.insertAdjacentHTML("beforeend", arrayOfBase.join(""));
  references.exchangeRef.insertAdjacentHTML(
    "beforeend",
    arrayOfExchange.join("")
  );
  references.buyRef.insertAdjacentHTML("beforeend", arrayOfBuy.join(""));
  references.saleRef.insertAdjacentHTML("beforeend", arrayOfSale.join(""));
}

function fetchData(query) {
  return fetch(query).then((response) => response.json());
}

function finalRendering(data) {
  renderHtml(data);
}

fetchData(favurl).then(finalRendering);

// eslint

const hello = "hello";
console.log(hello);
