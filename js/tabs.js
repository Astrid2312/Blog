(function() {

    const container = document.querySelector(`.Container-ul`)
    const BtnsC = container.querySelectorAll(`.Container-btn`)
    // Articulo de la seccion cursos
    const articleContent= document.querySelector(`.Articles`)
    const articles = articleContent.querySelectorAll(`.Article`)
    const ImgC = articleContent.querySelectorAll(`.Article-img`)
    console.log(ImgC)
    console.log(articles)


let showcurso = (index ) =>  BtnsC[index].addEventListener(`click`, () => {

    ImgC.forEach (( _ , index) => ImgC[index].classList.remove(`isActive`))
    BtnsC.forEach(( _ , index) => BtnsC[index].classList.remove(`isActive`))
    articles.forEach(( _ , index) => articles[index].classList.remove(`isActive`))
    

    ImgC[index].classList.add(`isActive`)
    articles[index].classList.add(`isActive`)
    BtnsC[index].classList.add(`isActive`)
})

// Evento Show curso[index]
// Cuando hago click en cursoBtns[index] 
// TODOS  arrayH[index] y arrayP[index] le remove la clase isActive
// arrayH[index] y arrayP[index]  le ADD la clase is Active 

BtnsC.forEach(( _ , index ) => showcurso(index)) 


})()