const inputField = document.querySelector('#input-field')

const filterItems = () => {
    const valueInput = document.querySelector('#input-field').value.toUpperCase()
    const items = document.querySelectorAll('.item')

    for (const item of items) {
        const text = item.textContent.toUpperCase() || item.innerHTML.toUpperCase()
        item.style.display = text.includes(valueInput) ? '' : 'none'
    }
}

inputField.addEventListener('keyup', filterItems)