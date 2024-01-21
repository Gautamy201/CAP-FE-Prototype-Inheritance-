// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
}

// Vehicle methods using prototype
Vehicle.prototype.accelerate = function (speedIncrease) {
    this.speed += speedIncrease;
    console.log(`${this.brand} ${this.model} is now moving at ${this.speed} km/h.`);
};

Vehicle.prototype.brake = function (speedDecrease) {
    this.speed = Math.max(0, this.speed - speedDecrease);
    console.log(`${this.brand} ${this.model} is now moving at ${this.speed} km/h.`);
};

Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

// Car constructor function
function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Inherit properties from Vehicle
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

// Inherit methods from Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Add an additional method for Car
Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking.`);
};

// Airplane constructor function
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
// Inherit properties from Vehicle
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

// Inherit methods from Vehicle
Airplane.prototype = Object.create(Vehicle.prototype);

// Add an additional method for Airplane
Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
};

// Creating instances
const myCar = new Car('Toyota', 'Camry', 50, 'Gasoline', 4);
const myAirplane = new Airplane('Boeing', '747', 800, 'Jet', 4, true);

// Invoking methods
myCar.accelerate(20);
myCar.brake(10);
myCar.refuel();
myCar.honk();

myAirplane.accelerate(100);
myAirplane.brake(50);
myAirplane.refuel();
myAirplane.takeOff();
