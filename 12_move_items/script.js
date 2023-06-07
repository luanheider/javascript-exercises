const btnUp = document.querySelector('#btn-up')
const btnDown = document.querySelector('#btn-down')

const moveDirection = direction => {
    const list = document.querySelector('#move-list')
    const items = Array.from(list.querySelectorAll('li'))
    const selectedItem = list.querySelector('.selected')

    if (!selectedItem) {
        alert('selecione um item para mover.')
        return
    }

    const index = items.indexOf(selectedItem)
    if (direction === 'moveup' && index > 0) {
        list.insertBefore(selectedItem, items[index - 1])
    } else if (direction === 'putdown' && index < items.length - 1) {

        list.insertBefore(selectedItem.nextElementSibling, items[index])
    }
}

const removeOrAddSelectedClass = e => {
    const items = document.querySelectorAll('#move-list li')
    items.forEach(item => item.classList.remove('selected'))
    e.target.classList.add('selected')
}
const listItems = document.querySelectorAll('#move-list li')
listItems.forEach(item => item.addEventListener('click', removeOrAddSelectedClass))

btnUp.addEventListener('click', () => moveDirection('moveup'))
btnDown.addEventListener('click', () => moveDirection('putdown'))