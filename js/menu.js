//Menu principal
//Cuando hago click en Header-boton
//Le toggle la clase isActive a  Header-ul 
//Cuando hago click en cualquier parte de la ventana que no sea Header-boton o Header-ul le remove la clase isActive a Header-ul  
//Cuando hago scroll le remove la clase isActive a Header-ul
//Se define una función anónima autoejecutable 
//Se hace referencia en todos los archivos.html de la pagina
(function() {
  const headerNav = document.querySelector(`.Header-nav`)
  const btnMenu = headerNav.querySelector(`.Header-boton`)
  const menu = headerNav.querySelector(`.Header-ul`)

  let menuActive = () => { menu.classList.toggle(`isActive`) 
  btnMenu.classList.toggle(`isActive`)}
  let menuInactive = () => { menu.classList.remove(`isActive`)
  btnMenu.classList.remove(`isActive`)}
  let menuWindows = (e) => {
      const btnIn = btnMenu.contains(e.target)
      const menuIn = menu.contains(e.target)

      if (!btnIn && !menuIn) {
          menuInactive()
      }
  }

  btnMenu.addEventListener(`mouseup`, menuActive)
  window.addEventListener(`mousedown`, menuWindows)
  window.addEventListener(`scroll`, menuInactive)
})()






