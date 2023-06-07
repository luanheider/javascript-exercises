const items = document.querySelectorAll('.item')
const removeItem = e => {
    const clickedItem = e.target
    clickedItem.remove()
}
items.forEach(item => item.addEventListener('click', removeItem))