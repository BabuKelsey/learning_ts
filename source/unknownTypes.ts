function compareValues(a: unknown): string {    
    if (typeof a === "number") {
        return `"${a}" is a number.`;
    } else if (typeof a === "string") {
        return `"${a}" is a string.`;
    }
    
    return `"${a}" data type is unchecked.`;
}

function compareValuesNullCatch(a: any): any {
    if (typeof a === "number" && a != null) {
        return `"${a}" is a number.`;
    } else if (typeof a === "string" && a != null) {
        return `"${a}" is a string.`;
    }
    return `"${a}" data type is unchecked.`;
}

console.log(compareValues(42));             // Output: "42 is a number."
console.log(compareValues("hello"));        // Output: "hello is a string."
console.log(compareValues(true));           // Output: "true data type is unchecked."

console.log(compareValuesNullCatch(42));             // Output: "42 is a number."
console.log(compareValuesNullCatch("hello"));        // Output: "hello is a string."
console.log(compareValuesNullCatch(true));           // Output: "true data type is unchecked."
console.log(compareValuesNullCatch(null));           // Output: "true data type is unchecked."

// the ai auto fill is annoying