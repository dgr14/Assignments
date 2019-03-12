function Vehicle(make, model){
    this.make = make
    this.model = model
}
class Vehicle11{
    constructor(make, model){
        this.make = make
        this.model = model
    }
    // for the class
    summary(){
        console.log(`This is a ${this.make} ${this.model}`)
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, hasSideCar){
        //where we pass in all the arguments the parent expects
        super(make, model)
        this.hasSideCar = hasSideCar
    }
}
const vehicle1 = new Vehicle11("Ford", "Mustang")
const MotorCycle1 = new Motorcycle("Honda", "Shadow", false)

console.log(MotorCycle1)

Vehicle.prototype.summary = function(){
    console.log(`This is a ${make} ${model}`)
}
const vehicle1 = new Vehicle("Ford", "Mustang")
console.log(vehicle1)
vehicle1.summary()