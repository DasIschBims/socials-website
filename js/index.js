(async () => {
    await loadLinksPreset(tsParticles);

    await tsParticles.load("particles", {
        preset: "links",
        background: {
            color: "001220"
        },
        particles: {
            number: {
                value: 45,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "#f7aff7"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#f7aff7"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 180,
                color: "#f7aff7",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "random",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 100,
                    rotateY: 200
                }
            }
        }
    });
})();