// OOP ES5

function Animal(name, legs, hasTail) {
  this.name = name;
  this.legs = legs;
  this.hasTail = hasTail;
}

// static field
Animal.count = 0;

// static method
Animal.getCountOfAnimals = function() {
  return Animal.count;
};
Animal.prototype.move = function() {
  console.log(`${this.name} is moving`);
};

// Inheritance
function WaterAnimal(name, legs, hasTail, gills) {
  Animal.call(this, name, legs, hasTail);
  this.gills = gills;
  Animal.count++;
}

WaterAnimal.prototype = Object.create(Animal.prototype);
WaterAnimal.prototype.constructor = WaterAnimal;

const fish = new WaterAnimal("Dolphin", 0, true, false);

fish.move();

console.log(Animal.getCountOfAnimals());


// Default parameterers ES5
function getSum(a, b) {
  b = (b === undefined && 2) || b;
  return a + b;
}

console.log(getSum(1));
