const url = 'https://jsonplaceholder.typicode.com/users/1'

const tryAgain = (action, maxAttempt, interval) => {
    return new Promise(async (resolve, reject) => {
        for (let attempt = 1; attempt <= maxAttempt; attempt++) {
            try {
                const result = await action()
                return resolve(result)
            } catch (error) {
                if (attempt === maxAttempt) return reject(error)

                await new Promise(r => setTimeout(r, interval))
            }
        }
    })
}
const request = () => fetch(url)
tryAgain(request, 5, 1000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`Erro após 3 tentativas ${error}`))