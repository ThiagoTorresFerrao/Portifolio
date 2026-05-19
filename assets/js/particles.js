tsParticles.load("particles-js", {

    background: {
        color: "transparent"
    },

    fpsLimit: 30,
    particles: {

        number: {
            value: 40
        },
        color: {
            value: "#05aaff"
        },
        opacity: {
            value: 0.08,
            animation: {
            enable: true,
            speed: 0.4,
            minimumValue: 0.02,
            sync: false
            }
        },
        size: {
            value: {
                min: 0.2,
                max: 2.5
            }
        },

        move: {

            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
                default: "out"
            }
        },

        links: {

            enable: false
        }
    },

    detectRetina: true
});