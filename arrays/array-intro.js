/*
    exp. in this project: find de lowest
    check all vals in array and assign "lowest" if the current array val is lower
*/


//define values
let myArray = [7,12,14,16,5,23,56,2,3,7,12]
let lowest = myArray[0]

let startTime = performance.now();

//find the lowest value in array
for (const i in myArray) {
    if (myArray[i] < lowest) {
        lowest = myArray[i]
    }
}

let endTime = performance.now();
let timeElapsed = endTime - startTime;

console.log(`lowest val: ${lowest} and time elapsed: ${timeElapsed}.`)