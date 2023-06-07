const formName = document.querySelector('#form')
const welcomeContainer = document.querySelector('#welcome')
const showDisplayUser = document.querySelector('#show-username')
const btnLogout = document.querySelector('#logout')

const chechUser = () => {
    const userName = localStorage.getItem('name')
    if (userName) {
        showDisplayUser.textContent = userName
        formName.style.display = 'none'
        welcomeContainer.style.display = 'block'
    } else {
        formName.style.display = 'block'
        welcomeContainer.style.display = 'none'
    }

}
formName.addEventListener('click', (e) => {
    e.preventDefault()
    const inputName = document.querySelector('#name')
    localStorage.setItem('name', inputName.value)
    inputName.value = ''
    chechUser()
})

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('name')
    chechUser()
})

chechUser()