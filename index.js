/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
// function Airplane(name) {
//   this.name = name;
//   this.isFlying = false;
// }
// Airplane.prototype.takeOff = function () {
//   this.isFlying = true;
// };
// Airplane.prototype.land = function () {
//   this.isFlying = false;
// };

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(attrs) {
  this.name = attrs.name;
  this.age = attrs.age;
  this.stomach = [];
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

const person1 = new Person({ name: "Mary", age: 50 });

console.log(person1.toString());

person1.eat("Spaghetti");

person1.eat("Ice Cream");

console.log(`The stomach of ${person1.name} has "${person1.stomach}" in it`);

console.log(`${person1.name} has went to the restroom`);

person1.poop();

console.log(`The stomach of ${person1.name} has "${person1.stomach}" in it`);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(attrs) {
  this.model = attrs.model;
  this.milesPerGallon = attrs.milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fuel = function (gallons) {
  this.tank = this.tank + gallons;
};

const car1 = new Car({ model: "Monster Truck", milesPerGallon: 3.65 });

console.log(`The gas tank of ${car1.model} has "${car1.tank}" gallons in it`);

car1.fuel(2);

console.log(`${car1.name} has been fueled`);

console.log(`The gas tank of ${car1.model} has "${car1.tank}" gallons in it`);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(attrs) {
  Person.call(this, attrs);
  this.toy = attrs.toy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function (toy) {
  return `playing with a ${this.toy}.`;
};

const person2 = new Baby({ name: "Samson", age: 3, toy: "tricycle" });

console.log(`${person2.toString()}, is ${person2.play()}`);

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. If called in global scope "this" refers to the window object.
  2. "this" is explicitly defined if using a ".call", ".apply", or ".bind" method.
  3. If preceded with a dot then whatever directly precedes the "this" is referred to.
  4. If "this" resides in a constuctor function if refers to what is calling the constructr function.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////

if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
