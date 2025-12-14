function doubleEquals(a: any, b: any): boolean {    
    return a == b;
}

function tripleEquals(a: any, b: any): boolean {    
    return a === b;
}

function compareValuesNullCatch(a: any): any {
    if (typeof a === "number" && a != null) {
        return `"${a}" is a number.`;
    } else if (typeof a === "string" && a != null) {
        return `"${a}" is a string.`;
    }
    return `"${a}" data type is unchecked.`;
}

console.log(doubleEquals(5, "5"));  // true
console.log(tripleEquals(5, "5"));  // false

console.log(compareValuesNullCatch(42));             // Output: "42 is a number."
console.log(compareValuesNullCatch("hello"));        // Output: "hello is a string."
console.log(compareValuesNullCatch(true));           // Output: "true data type is unchecked."
console.log(compareValuesNullCatch(null));           // Output: "true data type is unchecked."