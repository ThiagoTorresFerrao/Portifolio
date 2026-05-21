const sr = ScrollReveal({

    distance: '80px',
    duration: 1800,
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

sr.reveal('.services__card', {

    origin: 'bottom',
    interval: 300

});