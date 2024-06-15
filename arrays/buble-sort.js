/*
    Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.
    The word 'Bubble' comes from how this algorithm works, it makes the highest values 'bubble up'.


    How it works:

    Go through the array, one value at a time.
    For each value, compare the value with the next value.
    If the value is higher than the next one, swap the values so that the highest value comes last.
    Go through the array as many times as there are values in the array.
*/


//define values (2-56)
let myArray = [7,12,14,16,5,23,56,2,3,7,12]
console.log(`starting array: ${myArray}`)
const n = myArray.length

const start = performance.now()

for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-1-i; j++) {
        if (myArray[j] > myArray[j+1]) {
            [myArray[j], myArray[j+1]] = [myArray[j+1], myArray[j]]
        }
    }
}

const end = performance.now()
const elapsed = end - start

console.log(`time elapsed: ${elapsed}, final array: ${myArray}`)
