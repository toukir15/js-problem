// Write three functions: one to square a number, one to double a number, and one to add 5 to a number.Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num) => num * num
const double = (num) => num + num
const addFive = (num) => num + 5

const functionComposition = (num) => {
    const squared = square(num)
    const doubled = double(squared)
    return addFive(doubled)
}

console.log(functionComposition(2))