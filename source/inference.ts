const user = {
    name: "name duh",
    age: 20,
    isDom: true
};

let userJSON: { name: string; age: number; isAdmin: boolean } = {
    name: "Alice",
    age: 30,
    isAdmin: false
};

// try and create an obj and set the values outside of declaration
interface Car {
    make: string;
    model: string;
    year: number;
}

class Userino {
    constructor(
        private ID: number,
        private name: string,
        private age: number,
        private isAdmin: boolean
    ) {}

    // getters and setters
    getName(): string {
        return this.name;
    }

    setname(newName: string): void {
        this.name = newName;
    }
}

function printUserino(user: Userino): string {
    return `Userino [ID: ${user["ID"]}, Name: ${user["name"]}, Age: ${user["age"]}, isAdmin: ${user["isAdmin"]}]`;
}

let car1: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

let car2: Car = {
    make: "Honda",
    model: "Civic",
    year: 2019
};

let userino = new Userino(1, "Bob", 25, true);

console.log(user.name);
console.log(user.age);
console.log(user.isDom);

console.log(`Car 1: ${car1.make} ${car1.model} (${car1.year})`);
console.log(`Car 2: ${car2.make} ${car2.model} (${car2.year})`);

console.log("userino: " + printUserino(userino));
userino.setname("Charlie");
console.log("Updated name: " + printUserino(userino));