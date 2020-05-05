let btnMenu = document.getElementById('open')
let btnClose = document.getElementById('close')
let listMenu = document.getElementById('listMenu')
let content = document.querySelector('section')

btnMenu.addEventListener('click', () => {
    listMenu.style.visibility = 'visible',
    btnClose.style.visibility = 'visible',
    btnMenu.style.visibility = 'hidden'
    content.style.visibility = 'hidden'
})

btnClose.addEventListener('click', () => {
    listMenu.style.visibility = 'hidden',
    btnClose.style.visibility = 'hidden',
    btnMenu.style.visibility = 'visible'
    content.style.visibility = 'visible'
})