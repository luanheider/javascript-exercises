const firstDeveloper = [
    'Java',
    'Javascript',
    'PHP',
    'Python',
    'C++',
    'Swift'
]
const secondDeveloper = ['C#', 'Javascript', 'PHP', 'Ruby', 'Python']
const commonLanguage = firstDeveloper
    .filter(language => secondDeveloper.includes(language))
console.log(commonLanguage)