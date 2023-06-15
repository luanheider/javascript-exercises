//linear search
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const item = 9

const linearSearche = (arr, item) => {
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            index = i
        }
    }
    return index
}
const resultLinearSearch = linearSearche(arr, item)
console.log(resultLinearSearch)

//binary search
const binarySearch = (arr, item) => {
    let left = 0
    let right = arr.length - 1
    let mid = 0
    while (right >= left) {
        mid = Math.floor((left + right) / 2)
        if (item > arr[mid]) {
            left = mid + 1
        } else if (item < arr[mid]) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1

}
const resultBinarySearch = binarySearch(arr, item)
console.log(resultBinarySearch)