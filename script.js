const linksInternos = document.querySelectorAll('.menu a[href^="#"]')

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


}

linksInternos.forEach((item) => {
    item.addEventListener('click', scrollSmooth);
});