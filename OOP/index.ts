class Car{
    manufacturer: string;
    color: string;
    hp: number;
    model: string;
    year: number;
    _engine: boolean;
    _brake: boolean;
    _registration: boolean;

    constructor(manu: string, color: string, hp: number, model: string, year: number){
        this.manufacturer = manu;
        this.color = color;
        this.hp = hp;
        this.model = model;
        this.year = year;
        this._engine = false;
        this._brake = false;
        this._registration = false;
    }

    displayCarDetails(){
        return `
        Manufacturer: ${this.manufacturer} 
        Model: ${this.model}
        Horse-Power: ${this.hp}
        Color: ${this.color}
        Year: ${this.year}
        `;
    }

    registerCar(){
        if(this._registration === true){
            return true;
        } else {
            return false;
        }
    }

    set registration(status: boolean){
        this._registration = status;
    }

    engineStart(){
        if(this._engine === true){
            return true;
        } else {
            return false;
        }
    }

    set engine(status: boolean){
        this._engine = status;
    }

   brakeApplied(){
        if(this._brake == true){
            return true;
        } else {
            return false;
        }
    }

    set brake(status: boolean){
        this._brake = status;
    }

    
    
}

let myCar = new Car('Toyota', 'black', 1800, 'grande', 2020);
let myCarDetails: string =  myCar.displayCarDetails();

// Car Details
console.log(myCarDetails);

//brake applied or not
myCar._brake = true;
console.log(myCar.brakeApplied() == true? 'Brake Applied' : "Not Applied");

//Engine Start
myCar._engine = true;
console.log(myCar.engineStart() == true? 'Engine Start' : "Engine OFF");

//Car Registration
myCar._registration = true;
console.log(myCar.registerCar() == true? 'Car Registered' : 'Car Not Registered');