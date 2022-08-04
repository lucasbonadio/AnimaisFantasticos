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
    const animaisDescricao = document.querySelectorAll('.animais-descricao section');

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

function animaScrollInit() {
    const sections = document.querySelectorAll('.js-scroll')
    if (sections.length) {
        const window60 = window.innerHeight * 0.7;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - window60;
                if (sectionTop < 0) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll)
    }
}
animaScrollInit();