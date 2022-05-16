const toggleMenu = document.getElementById('toggle-menu')
const nav = document.getElementById('nav')
const cabecalho = document.getElementById('cabecalho')
const toggleRedesSociais = document.getElementById('btn-redes-sociais-toggle')

toggleMenu.addEventListener('click', () => {
  nav.classList.toggle('active')
  cabecalho.classList.toggle('on')
}) 

toggleRedesSociais.addEventListener('click', () => {
  cabecalho.classList.toggle('ativo')
})