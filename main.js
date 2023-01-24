window.addEventListener('DOMContentLoaded', () => {

    const scrollDownBtn1 = document.getElementById('scroll-down-1');
    const pageHeight = window.innerHeight;
    scrollDownBtn1.addEventListener('click', () => {

        window.scroll({
            top: pageHeight,
            behavior: 'smooth'
        });

    });

    const scrollDownBtn2 = document.getElementById('scroll-down-2');
    scrollDownBtn2.addEventListener('click', () => {

        window.scroll({
            top: (pageHeight * 2),
            behavior: 'smooth'
        });

    });

    const scrollUpBtn1 = document.getElementById('scroll-up-1');
    scrollUpBtn1.addEventListener('click', () => {

        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

    });

    const scrollUpBtn2 = document.getElementById('scroll-up-2');
    scrollUpBtn2.addEventListener('click', () => {

        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

    });

    const modalContainer = document.getElementById('modal-container');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    modalTriggers.forEach(trigger => trigger.addEventListener('click', () => {
        modalContainer.classList.toggle('active');
    }))

});