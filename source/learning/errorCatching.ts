// function throwError(message: string): never {
//     throw new Error(message);
// }

//console.log(throwError("This is an error message."));

type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };
    //| { kind: "triangle"; base: number; height: number }; // Uncommenting this will cause an error in getArea

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2; // apparently "**" is to the power of (who knew)
        case "square":
            return shape.side ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
            // Or alternatively:
            //return throwError("Unknown shape kind");
    }
}

const myCircle: Shape = { kind: "circle", radius: 5 };
console.log(`Area of circle: ${getArea(myCircle)}`);

const mySquare: Shape = { kind: "square", side: 4 };
console.log(`Area of square: ${getArea(mySquare)}`);

// Uncommenting the following line will cause a compile-time error
// const myTriangle: Shape = { kind: "triangle", base: 3, height: 4 };
// console.log(`Area of triangle: ${getArea(myTriangle)}`);