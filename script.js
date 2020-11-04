// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel("Resort Hotel", 5, 100);
// // Получаем такой объект
// console.log(hotel);

// const motel = new Hotel("Sunlight Motel", 4, 300);
// console.log(motel);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel("Sunrise Hotel", 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet("Mango"); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// console.log(hotel);
// hotel.removeGuests(50);
// console.log(hotel);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const Manager = function (name = "manager", sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager("Mango", 5);
// console.log(mango.sales); // 5
// console.log(mango.sell("TV")); // Manager Mango sold TV
// console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager("Poly", 10);
// console.log(poly.sales); // 10
// console.log(poly.sell("TV")); // Manager Poly sold TV
// console.log(poly.sell("Microwave"));
// console.log(poly.sell("Mac Book")); // Manager Poly sold Microwave
// console.log(poly.sales); // 12
