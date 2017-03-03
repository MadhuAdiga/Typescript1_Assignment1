interface vehicle { // Defines an interface
    hasWheels: number;
    hasEngine:boolean;
}


interface drivable extends vehicle{  // drivable now acquires the properties of vehicle and defines its own 3 methods
    start : (carName : string ) => void;
    drive : (driverName : string ) => void;
    getPosition :(loc:string) =>void; 
}

class Car implements drivable {  // class Car inherits properties and methods from both vehicle and drivable
    hasWheels : number;
    hasEngine : boolean;
    start(carName:string) { 
        console.log(carName+ ` has been started`);
    };
    drive(driverName:string) { 
        console.log(driverName+ ` is driving`);
    };
    getPosition(loc:string) {
        console.log(`The car was last spotted at ` + loc)
    }
}
    

var myCar : drivable = new Car (); //defines a new object myCar of the interface drivable and the class Car
myCar.start("Jaguar"); //Outputs "Jaguar has been started"
myCar.getPosition("the jungle"); //Outputs "The car was last spotted at the jungle"


//*******************************************************************************/

interface flyable extends vehicle{ // another interface flyable extending vehicle
    fly : (planeName : string ) => void; // defines two own methods fly and getPosition
    getPosition :(loc:string) =>void; 
}

class Helicopter implements flyable {  // a new class helipcopter implementing the flyable interface and the associated methods
    hasWheels : number;
    hasEngine : boolean;
    fly(planeName:string) { 
        console.log(planeName+ ` is flying high`);
    };
    getPosition(loc:string) {
        console.log(`The Helicopter was last spotted at ` + loc)
    }
}

class FlyingCar implements drivable, flyable{  // a new class FlyingCar implementing the flyable and the drivable interface and the associated methods
    hasWheels : number;
    hasEngine : boolean;
    fly(planeName:string) { 
        console.log(planeName+ ` is flying high`);
    };
    drive(driverName:string) { 
    console.log(driverName+ ` is driving`);
    };
    start(carName:string) { 
    console.log(carName+ ` has been started`);
    };
    getPosition(loc:string) {
        console.log(`The Helicopter was last spotted at ` + loc)
    };
}
    

var myPlane : flyable = new Helicopter (); // A new object of the type interface flyable and class Helicopter
myPlane.fly("Boeing 747"); //Logs "Boeing 747 is flying high"
myPlane.getPosition("the space"); //Logs "The Helicopter was last spotted at the space"

var myFlyingCar : drivable = new FlyingCar(); // // A new object of the type interface drivable and class myFlyingCar
myFlyingCar.drive("The pilot"); //Logs "The pilot is driving"