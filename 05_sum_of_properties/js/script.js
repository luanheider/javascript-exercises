const objNumbers = {
    a: 3,
    b: 4,
    c: 6,
    d: 'hello'
}

const sumProperties = obj => {
    let sum = 0

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
            sum += obj[key]
        }
    }
    return sum
}
const result = sumProperties(objNumbers)
console.log(result)