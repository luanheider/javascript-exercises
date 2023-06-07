const numbers = [1, 2, 3, 3, 4, 5, 5, 6]
const removeDuplicateElements = arr => {
    return Array.from(new Set(arr))
}
const result = removeDuplicateElements(numbers)
console.log(result)