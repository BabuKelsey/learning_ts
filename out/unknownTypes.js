function compareValues(a) {
    if (typeof a === "number") {
        return `"${a}" is a number.`;
    }
    else if (typeof a === "string") {
        return `"${a}" is a string.`;
    }
    return `"${a}" data type is unchecked.`;
}
console.log(compareValues(42)); // Output: "42 is a number."
console.log(compareValues("hello")); // Output: "hello is a string."
console.log(compareValues(true)); // Output: "true data type is unchecked."
//# sourceMappingURL=unknownTypes.js.map