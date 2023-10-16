let expandMenu = document.getElementById('expand-more')
let menu = document.getElementById('menu')

function showMenu() {
    menu.classList.toggle('active')
}

expandMenu.addEventListener('click', showMenu)