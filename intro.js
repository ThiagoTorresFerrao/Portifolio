const introAlreadyShown = sessionStorage.getItem("introShown");
const introText = "Initializing Portfolio...";
const typingElement = document.querySelector(".intro__typing");

const codeLines = document.querySelectorAll(".code-line");

const codeTexts = [
    '> const developer = "Thiago Torres";',
    '> Loading projects...',
    '> Portfolio ready'
];

let introIndex = 0;

function typeIntro() {

    if (introIndex < introText.length) {

        typingElement.textContent += introText.charAt(introIndex);
        introIndex++;
        setTimeout(typeIntro, 40);

    } else {

        setTimeout(() => {
            typeCodeLine(0);
        }, 500);
    }
}

function typeCodeLine(lineIndex) {

    if (lineIndex >= codeTexts.length) {

        setTimeout(() => {
            const intro = document.getElementById("intro");
            intro.style.opacity = "0";
            setTimeout(() => {
                intro.style.display = "none";
            }, 1000);
        }, 1200);
        return;
    }

    const currentLine = codeLines[lineIndex];
    const text = codeTexts[lineIndex];
    let charIndex = 0;
    function typeCharacter() {

        if (charIndex < text.length) {
            currentLine.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, 95);

        } else {

            if (lineIndex === codeTexts.length - 1) {
                currentLine.innerHTML += '<span class="cursor">_</span>';
            }
            setTimeout(() => {
                typeCodeLine(lineIndex + 1);
            }, 400);
        }
    }

    typeCharacter();
}

window.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");

    if (introAlreadyShown) {

        intro.remove();

        return;
    }

    sessionStorage.setItem("introShown", "true");

    window.addEventListener("load", typeIntro);
});