"use strict";
class Car {
    manufacturer;
    color;
    hp;
    model;
    year;
    _engine;
    _brake;
    _registration;
    constructor(manu, color, hp, model, year) {
        this.manufacturer = manu;
        this.color = color;
        this.hp = hp;
        this.model = model;
        this.year = year;
        this._engine = false;
        this._brake = false;
        this._registration = false;
    }
    displayCarDetails() {
        return `
        Manufacturer: ${this.manufacturer} 
        Model: ${this.model}
        Horse-Power: ${this.hp}
        Color: ${this.color}
        Year: ${this.year}
        `;
    }
    registerCar() {
        if (this._registration === true) {
            return true;
        }
        else {
            return false;
        }
    }
    set registration(status) {
        this._registration = status;
    }
    engineStart() {
        if (this._engine === true) {
            return true;
        }
        else {
            return false;
        }
    }
    set engine(status) {
        this._engine = status;
    }
    brakeApplied() {
        if (this._brake == true) {
            return true;
        }
        else {
            return false;
        }
    }
    set brake(status) {
        this._brake = status;
    }
}
let myCar = new Car('Toyota', 'black', 1800, 'grande', 2020);
let myCarDetails = myCar.displayCarDetails();
// Car Details
console.log(myCarDetails);
//brake applied or not
myCar._brake = true;
console.log(myCar.brakeApplied() == true ? 'Brake Applied' : "Not Applied");
//Engine Start
myCar._engine = true;
console.log(myCar.engineStart() == true ? 'Engine Start' : "Engine OFF");
//Car Registration
myCar._registration = true;
console.log(myCar.registerCar() == true ? 'Car Registered' : 'Car Not Registered');
