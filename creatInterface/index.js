const modalOverlay = document.querySelector('.modal__overlay')
const btnShowModal = document.querySelector('.btn__modal_show')
const closeModal = document.querySelector('.close')
const modalContent = document.querySelector('.modal__content')

btnShowModal.addEventListener('click', () => {
    modalOverlay.classList.add('active')
})

modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})

modalContent.addEventListener('click', (e) => {
    e.stopPropagation()
})