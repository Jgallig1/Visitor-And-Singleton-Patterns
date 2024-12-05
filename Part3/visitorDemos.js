// Define a generic Vehicle base class with an accept method
class Vehicle {
    accept(visitor) {
        visitor.visit(this);
    }
}

// Define a Car class
class Car extends Vehicle {
    constructor(seats) {
        super();
        this.seats = seats;
    }
}

// Define a Truck class
class Truck extends Vehicle {
    constructor(towPackage) {
        super();
        this.towPackage = towPackage;
    }
}

// Define a MonsterTruck class
class MonsterTruck extends Vehicle {
    constructor(looksLikeADragon) {
        super();
        this.looksLikeADragon = looksLikeADragon;
    }
}

// Define CarVisitor
class CarVisitor {
    visit(car) {
        if (car instanceof Car) {
            if (car.seats > 2) {
                console.log("This is clearly a car for old people.");
            } else {
                console.log("My bet is this car has at least 2 cylinders.");
            }
        } else {
            console.log("This visitor is not meant for this type of vehicle.");
        }
    }
}

// Define TruckVisitor
class TruckVisitor {
    visit(truck) {
        if (truck instanceof Truck) {
            if (truck.towPackage) {
                console.log("We need to buy a boat.");
            }
        } else {
            console.log("This visitor is not meant for this type of vehicle.");
        }
    }
}

// Define MonsterTruckVisitor
class MonsterTruckVisitor {
    visit(vehicle) {
        if (vehicle instanceof MonsterTruck) {
            if (vehicle.looksLikeADragon) {
                console.log("That is a badass monster truck.");
            } else {
                console.log("Loser.");
            }
        } else {
            console.log("This visitor does not support this vehicle type.");
        }
    }
}

// Test Scenarios
console.log("Testing CarVisitor:");
const myCar = new Car(2);
myCar.accept(new CarVisitor()); // Expected Output: My bet is this car has at least 2 cylinders.

console.log("\nTesting MonsterTruckVisitor on MonsterTruck:");
const myMonsterTruck = new MonsterTruck(false);
myMonsterTruck.accept(new MonsterTruckVisitor()); // Expected Output: Loser.

console.log("\nTesting MonsterTruckVisitor on Car:");
const myCar2 = new Car(2);
myCar2.accept(new MonsterTruckVisitor()); // Expected Output: This visitor does not support this vehicle type.
