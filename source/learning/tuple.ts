let tuple: [number, string, boolean] = [1, "hello", true];

function printTuple(tup: [number, string, boolean]): string {
    return `Tuple values are: ${tup[0]}, ${tup[1]}, ${tup[2]}`;
}

console.log(printTuple(tuple));

// tuple modification
tuple[0] = 42;
tuple[1] = "world";
tuple[2] = false;

console.log("After modification: " + printTuple(tuple));

// tuple methods
tuple.push(true);
console.log("After .push(): " + printTuple(tuple));