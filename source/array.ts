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
saidArray.push(4);
console.log(".push() adds an element at the end: " + printArray(saidArray));

saidArray.pop();
console.log(".pop() removes the last element: " + printArray(saidArray));

saidArray.splice(5, 0, 1);
console.log(".splice() and add an element at index 5: " + printArray(saidArray));

saidArray.splice(3, 1);
console.log(".splice() and removes the element at index 3: " + printArray(saidArray));

saidArray.unshift(0);
console.log(".unshift() adds an element at the start: " + printArray(saidArray));

saidArray.shift();
console.log(".shift() removes the first element: " + printArray(saidArray));

saidArray = saidArray.concat([4, 5, 6, 7, 8]);
console.log(".concat() concatenates another array: " + printArray(saidArray));

saidArray.sort();
console.log(".sort() sorts in ascending order in this case: " + printArray(saidArray));

saidArray.sort((a, b) => b - a);
console.log(".sort() sorts in descending order in this case: " + printArray(saidArray));

saidArray.reverse();
console.log(".reverse() reverses the array: " + printArray(saidArray));