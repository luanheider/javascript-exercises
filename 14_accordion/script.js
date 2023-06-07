const toggleAccordion = e => {
    const header = e.target
    const content = header.nextElementSibling

    if (content.style.display === 'none' || content.style.display === '') {
        closeAllAccordionContent()
        content.style.display = 'block'
    } else {
        content.style.display = 'none'
    }
}

const closeAllAccordionContent = () => {
    const allContent = document.querySelectorAll('.accordion-content')
    allContent.forEach(content => content.style.display = 'none')
}

const headers = document.querySelectorAll('.accordion-header')
headers.forEach(header => header.addEventListener('click', toggleAccordion))