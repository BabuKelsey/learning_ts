function doubleEquals(a: any, b: any): boolean {    
    return a == b;
}

function tripleEquals(a: any, b: any): boolean {    
    return a === b;
}

console.log(doubleEquals(5, "5"));  // true
console.log(tripleEquals(5, "5"));  // false