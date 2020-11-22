//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1
const input = "ToOls Should Not Only BE FoR ExpERTs"
  .toLowerCase()
  .split(" ")
  .join("-");
console.log(input);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2
const clients = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].forEach((element) => console.log("forEach: ", element));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 3
const clients2 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts1",
].find((element) => element.length > 4);
console.log("find: ", clients2);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 4
const clients3 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].find((element) => element === "for");
console.log("find: ", clients3);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5
const clients4 = ["tools", "should", "not", "only", "be", "for", "experts"].map(
  (element) => element.length
);
console.log("map: ", clients4);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 6
const clients5 = ["tools", "should", "not", "only", "be", "for", "experts"].map(
  (element) => element + " is great"
);
console.log("map: ", clients5);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 7
const clients6 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].filter((element) => element.length > 5);
console.log("filter: ", clients6);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 8
const clients7 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].filter((element) => element.includes("o"));
console.log("filter: ", clients7);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 9
const clients8 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].some((element) => element.length > 5);
console.log("some: ", clients8);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 10
const clients9 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].every((element) => element.length > 5);
console.log("every: ", clients9);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 11
const clients10 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].reduce(function (accumulator, element) {
  return accumulator + element.length;
}, 0);
console.log("reduce: ", clients10);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 12
const clients11 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].sort((a, b) => a.length - b.length);
console.log("sort: ", clients11);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 13
const clients12 = [
  "tools",
  "should",
  "not",
  "only",
  "be",
  "for",
  "experts",
].sort((a, b) => b.length - a.length);
console.log("sort: ", clients12);

// DOM
const rootContainerRef = document.querySelector(".js-root");
const containerRef = document.createElement("div");
const listRef = document.createElement("ul");
const cellRef = document.createElement("li");
const cellRef2 = document.createElement("li");
const cellRef3 = document.createElement("li");
const linkRef = document.createElement("a");
const linkRef2 = document.createElement("a");
const linkRef3 = document.createElement("a");

linkRef.textContent = "First link";
linkRef2.textContent = "Second link";
linkRef3.textContent = "Third link";

linkRef.href = "#";
linkRef2.href = "#";
linkRef3.href = "#";

cellRef.appendChild(linkRef);
cellRef2.appendChild(linkRef2);
cellRef3.appendChild(linkRef3);

listRef.append(cellRef, cellRef2, cellRef3);

containerRef.appendChild(listRef);

rootContainerRef.appendChild(containerRef);

cellRef3.remove();
