let saidArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArray(saidArray: number[]): number[] {
    // for (let i = 0; i < saidArray.length; i++) {
    //     console.log(saidArray[i]);
    // }

    return saidArray;
}

console.log(printArray(saidArray));
//console.log(saidArray[0]);

// array modification methods
saidArray.push(4); // adds an element at the end
console.log(".push(): " + printArray(saidArray));

saidArray.pop(); // removes the last element
console.log(".pop(): " + printArray(saidArray));

saidArray.splice(5, 0, 1);
console.log(".splice() and add an element at index 5: " + printArray(saidArray));

saidArray.splice(3, 1);
console.log(".splice() and removes the element at index 3: " + printArray(saidArray));

saidArray.unshift(0); // adds an element at the start
console.log(".unshift(): " + printArray(saidArray));

saidArray.shift(); // removes the first element
console.log(".shift(): " + printArray(saidArray));

saidArray = saidArray.concat([4, 5, 6, 7, 8]); // concatenates another array
console.log(".concat(): " + printArray(saidArray));

saidArray.sort((a, b) => b - a); // sorts in descending order
console.log(".sort(): " + printArray(saidArray));

saidArray.reverse(); // reverses the array
console.log(".reverse(): " + printArray(saidArray));