const elementFrequency = arr => {
    const count = {}
    let element = arr[0]
    let maxCount = 1

    for (const value of arr) {
        if (!count[value]) {
            count[value] = 1
        } else {
            count[value]++
        }
        if (count[value] > maxCount) {
            maxCount = count[value]
            element = value
        }
    }


    return [element, maxCount]
}
const numbers = [1, 2, 3, 2, 4, 2, 5, 6, 2]
const result = elementFrequency(numbers)
console.log(`Element: ${result[0]}`)
console.log(`count: ${result[1]}`)