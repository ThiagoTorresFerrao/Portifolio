const codeElement = document.getElementById('code');

            // Mensagem no interior do robo.
const codeLines = [
    "// By Thiago Torres",
    "function helloWorld() {",
    "    console.log('Hello, world!');",
    "}",
    "",
    "for(let i = 0; i < 3; i++) {",
    "    helloWorld();",
    "}",
    "",
    "// Digitando... ",
];

let currentLine = 0;
let currentChar = 0;
let displayText = '';

function type() {
    if (currentLine >= codeLines.length) {
        // Reinicia a digitação após um intervalo
        setTimeout(() => {
            currentLine = 0;
            currentChar = 0;
            displayText = '';
            codeElement.textContent = '';
            type();
        }, 2000);
        return;
    }

    const line = codeLines[currentLine];
    if (currentChar < line.length) {
        displayText += line.charAt(currentChar);
        currentChar++;
        codeElement.textContent = displayText + '_'; // cursor
        setTimeout(type, 100);
    } else {
        displayText += '\n';
        currentLine++;
        currentChar = 0;
        codeElement.textContent = displayText;
        setTimeout(type, 500);
    }
}

type();