const numbers = [1, 2, 3, 4, 5]

const mapArray = (arr, transformation) => {
    let result = []

    for (const value of arr) {
        result.push(transformation(value))
    }

    return result
}
const square = mapArray(numbers, (number) => number * number)
console.log(square)


// const square2 = numbers.map(number => number * number)
// console.log(square2)