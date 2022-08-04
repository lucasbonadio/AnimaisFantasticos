function scrollInit() {
    const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

    function scrollSmooth(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Opção alternativa
        // const top = section.offsetTop;
        // window.scrollTo({
        //     top: top,
        //     behavior: 'smooth'
        // });
    };

    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollSmooth);
    });
};
scrollInit();

function tabInit() {
    const animaisLista = document.querySelectorAll('.animais-lista li');
    console.log(animaisLista);
    const animaisDescricao = document.querySelectorAll('.animais-descricao section');
    console.log(animaisDescricao);

    animaisDescricao[0].classList.toggle('ativo');

    function selectAnimal(index) {
        animaisDescricao.forEach((item) => {
            item.classList.remove('ativo')
        });
        animaisDescricao[index].classList.toggle('ativo')
    }

    animaisLista.forEach((item, index) => {
        item.addEventListener('click', () => {
            selectAnimal(index)
        });
    })
}

tabInit();