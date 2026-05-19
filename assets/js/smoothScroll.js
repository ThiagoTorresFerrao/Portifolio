const lenis = new Lenis({

    duration: 2,
    lerp: 0.08,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.7
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);