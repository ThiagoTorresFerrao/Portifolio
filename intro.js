const introText = "Initializing Portfolio...";
const typingElement = document.querySelector(".intro__typing");

let index = 0;

function typeEffect() {

    if(index < introText.length) {

        typingElement.textContent += introText.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(() => {

            const intro = document.getElementById("intro");

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";

            }, 1000);

        }, 1500);
    }
}

window.addEventListener("load", typeEffect);