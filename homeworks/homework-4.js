//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// Guest.prototype.sayHello = function () {
//   console.log(`Hello, ${this.name}. Your order: room ${this.room}`);
// };

// const mango = new Guest("Mango", 28);
// const poly = new Guest("Poly", 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36
// mango.sayHello();
// poly.sayHello();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 4
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero("Mango", 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(600); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }
