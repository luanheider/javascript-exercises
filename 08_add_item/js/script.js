const addBtn = document.querySelector('#btn')
const createItem = () => {
    const container = document.querySelector('.container')
    const newItem = document.createElement('li')
    newItem.textContent = 'Text by javascript'
    container.appendChild(newItem)
}
addBtn.addEventListener('click', createItem)