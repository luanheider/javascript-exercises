const person = {
    name: 'Luan',
    age: 33,
    hobbies: ['Play Playstation', 'Play Guitar', 'Watch Series'],
    position: 'Developer',
    language: 'Javascript'
}
const properties = ['position', 'language']

const checkProperties = (obj, arr) => {
    const newObj = {}
    for (const prop of arr) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop]
        }
    }
    return newObj
}
const result = checkProperties(person, properties)
console.log(result)