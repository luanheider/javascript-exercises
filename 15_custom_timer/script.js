const timeInSecond = 3

const customTimer = (second, action) => {
    setTimeout(action, second * 1000)
}

const callbackFunction = () => {
    console.log('Função de callback sendo chamada!')
}

customTimer(timeInSecond, callbackFunction)