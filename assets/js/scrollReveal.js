const sr = ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false

});

sr.reveal('.reveal-left', {
    origin: 'left'
});

sr.reveal('.reveal-right', {
    origin: 'right'
});

sr.reveal('.reveal-top', {
    origin: 'top'
});

sr.reveal('.reveal-bottom', {
    origin: 'bottom'
});

sr.reveal('.services__card, .projects__card', {

    origin: 'bottom',
    interval: 400

});