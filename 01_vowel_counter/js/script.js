const vowelCount = str => {
    const vowel = 'aeiouAEIOU'
    let count = 0
    const getVowel = []

    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count++
            getVowel.push(str[i])
        }
    }
    return [count, getVowel]
}
const str = 'luan'
const result = vowelCount(str)
console.log(result[0])
console.log(result[1].join(' '))