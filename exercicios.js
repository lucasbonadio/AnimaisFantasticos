/* EXERCICIOS 1*/
// const imagens = document.querySelectorAll('img') 
// console.log(imagens)

// const imagensImg = document.querySelectorAll('img[src^="img/imagem"]')
// console.log(imagensImg)

// const linksInternos = document.querySelectorAll('[href^="#"]')
// console.log(linksInternos)

// const primeiroH2 = document.querySelector('.animais-descricao h2')
// console.log(primeiroH2)

// const ultimoP = document.querySelectorAll('p')
// console.log(ultimoP[ultimoP.length - 1])




/* EXERCICIOS 2*/
// const paragrafros = document.querySelectorAll('p');
// console.log(paragrafros);

// paragrafros.forEach((item) => {
//     console.log(item);
// });

// paragrafros.forEach((item) => {
//     console.log(item.innerText);
// });




/* EXERCICIOS 3*/
// const menu = document.querySelectorAll('.menu a');
// console.log(menu);

// menu.forEach(item => {
//     item.classList.add('ativo');
// });

// menu.forEach((item) => {
//     item.classList.remove('ativo');
// });

// menu[0].classList.add('ativo');

// const imagens = document.querySelectorAll('img');
// console.log(imagens)

// imagens[0].setAttribute('alt', 'Possui Alt')

// imagens.forEach(item => {
//     const result = item.hasAttribute('alt');

//     if(result) {
//         console.log(item, result)
//     } else {
//         console.log(item, result)
//     }
// })

// const hrefLink = document.querySelector('[href="https://www.origamid.com/"]')
// console.log(hrefLink.href);

// 1 jeito de modificar o href
// hrefLink.href = 'https://www.origamidddd.com/'
// console.log(hrefLink.href)

// 2 jeito de modificar o href
// hrefLink.setAttribute('href', 'https://www.google.com/')
// console.log(hrefLink.href);



/* EXERCICIOS 4*/
// const firstImg = document.querySelector('img');
// console.log(firstImg);

// const alturaFromTop = firstImg.offsetTop;
// console.log("A distancia da imagem até o topo da pagina é de " + alturaFromTop + "px")

// const imgs = document.querySelectorAll('img');
// console.log(imgs)

// function somaWidth() {
//     let soma = 0;
//     imgs.forEach(item => {
//         soma += item.offsetWidth 
//     })
//     console.log(soma) 
// }

// window.onload = () => {
//     somaWidth();
// }


// const smallBrowser = matchMedia('(max-width: 720px)').matches;

// if(smallBrowser) {  
//     const menu = document.querySelector('.menu');
//     menu.classList.add('menu-mobile')
// }



/* EXERCICIOS 5*/
// const linksInternos = document.querySelectorAll('a[href^="#"]')
// console.log(linksInternos)

// function handleLink(event) {
//     event.preventDefault()
//     linksInternos.forEach(item => {
//         item.classList.remove('ativo')
//     })
//     event.currentTarget.classList.add('ativo')
// }

// linksInternos.forEach((item) => {
//     item.addEventListener('click', handleLink)
// })

// const todosElementos = document.querySelectorAll('body *')

// function showElement(event) {
//     console.log(event.target)
// }

// todosElementos.forEach((item) => {
//     item.addEventListener('click', showElement)
// })

// function removeElement(event) {
//     event.target.remove();
// }

// todosElementos.forEach(item => {
//     item.addEventListener('click', removeElement)
// })

// function handleClickT(event) {
//     if(event.key === 't') {
//         const html = document.documentElement
//         html.classList.toggle('textomaior')
//     }
// }

// window.addEventListener('keydown', handleClickT)
