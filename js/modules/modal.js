export default function initModal() {

    const botaoAbrir = document.querySelector('.abrir');
    const botaoFechar = document.querySelector('.fechar');
    const modalContainer = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && modalContainer) {

        function toggleModal(event) {
            event.preventDefault();
            modalContainer.classList.toggle('ativo');
        }

        function cliqueFora(event) {
            if (event.target === this) {
                console.log(toggleModal(event))
            }
        }


        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        modalContainer.addEventListener('click', cliqueFora);
    }
}