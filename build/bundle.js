(() => {
  "use strict";
  fetch("https://swapi.dev/api/people/1/")
    .then(function (e) {
      return e.json();
    })
    .then(function (e) {
      return console.log(e.name);
    }),
    ("https://jsonplaceholder.typicode.com/users/1/todos",
    fetch("https://jsonplaceholder.typicode.com/users/1/todos").then(function (
      e
    ) {
      return e.json();
    })).then(function (e) {
      console.log(e[0]);
    }),
    ("https://swapi.dev/api/planets/1/",
    fetch("https://swapi.dev/api/planets/1/").then(function (e) {
      return e.json();
    })).then(function (e) {
      console.log(e);
    });
  var e = {
    baseRef: document.querySelector(".js-base"),
    exchangeRef: document.querySelector(".js-exchange"),
    buyRef: document.querySelector(".js-buy"),
    saleRef: document.querySelector(".js-sale"),
  };
  fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(function (e) {
      return e.json();
    })
    .then(function (n) {
      !(function (n) {
        console.log(n);
        var t = [],
          o = [],
          c = [],
          s = [];
        n.forEach(function (e) {
          var n = e.base_ccy,
            a = e.ccy,
            i = e.buy,
            r = e.sale;
          t.push("<li>".concat(n, "</li>")),
            o.push("<li>".concat(a, "</li>")),
            c.push("<li>".concat(i, "</li>")),
            s.push("<li>".concat(r, "</li>"));
        }),
          e.baseRef.insertAdjacentHTML("beforeend", t.join("")),
          e.exchangeRef.insertAdjacentHTML("beforeend", o.join("")),
          e.buyRef.insertAdjacentHTML("beforeend", c.join("")),
          e.saleRef.insertAdjacentHTML("beforeend", s.join(""));
      })(n);
    }),
    console.log("hello");
})();
