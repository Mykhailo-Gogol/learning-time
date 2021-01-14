(() => {
  "use strict";
  console.log("Helo World"),
    console.log("Hello from A"),
    console.log("Hello from B");
  var e = new Promise(function (e, o) {
    var n = Math.random() > 0.3;
    setTimeout(function () {
      n && e("data"), o("rejected");
    }, 500);
  });
  console.log("before"),
    e
      .then(function (e) {
        return console.log("%c".concat(e), "color: green");
      })
      .catch(function (e) {
        return console.log("%c".concat(e), "color: red;");
      })
      .finally(function () {
        return console.log("finally");
      }),
    console.log("after"),
    new Promise(function (e) {
      e(5);
    })
      .then(function (e) {
        return console.log("x: ", e), 2 * e;
      })
      .then(function (e) {
        return console.log("y: ", e), e + e;
      })
      .then(function (e) {
        console.log("z: ", e);
      }),
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
  var o = {
    baseRef: document.querySelector(".js-base"),
    exchangeRef: document.querySelector(".js-exchange"),
    buyRef: document.querySelector(".js-buy"),
    saleRef: document.querySelector(".js-sale"),
  };
  fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then(function (e) {
      return e.json();
    })
    .then(function (e) {
      !(function (e) {
        console.log(e);
        var n = [],
          t = [],
          c = [],
          l = [];
        e.forEach(function (e) {
          var o = e.base_ccy,
            s = e.ccy,
            r = e.buy,
            i = e.sale;
          n.push("<li>".concat(o, "</li>")),
            t.push("<li>".concat(s, "</li>")),
            c.push("<li>".concat(r, "</li>")),
            l.push("<li>".concat(i, "</li>"));
        }),
          o.baseRef.insertAdjacentHTML("beforeend", n.join("")),
          o.exchangeRef.insertAdjacentHTML("beforeend", t.join("")),
          o.buyRef.insertAdjacentHTML("beforeend", c.join("")),
          o.saleRef.insertAdjacentHTML("beforeend", l.join(""));
      })(e);
    }),
    console.log("hello");
})();
