const openBtn = document.querySelector('#open')
const closedBtn = document.querySelector('.close')
const displayModal = document.querySelector('#myModal')

const showModal = () => displayModal.style.display = 'block'
const closedModal = () => displayModal.style.display = 'none'

openBtn.addEventListener('click', showModal)
closedBtn.addEventListener('click', closedModal)

window.addEventListener('click', e => {
    if (e.target === document.querySelector('#myModal')) {
        closedModal()
    }
})