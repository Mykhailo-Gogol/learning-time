import "./css/style.css";
const axios = require("axios");

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

// fetch
console.time("answer time");
function fetchData(query) {
  return fetch(query).then((response) => response.json());
}
fetchData(favurl).then((data) => renderHtml(data));

console.timeLog("answer time");

// axios
function getUser(url) {
  axios
    .get(url)
    .then(({ data }) => {
      renderHtml(data);
      console.log("exchange rate:", data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getUser(favurl);

console.timeEnd("answer time");
