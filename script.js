const paletteContainer = document.getElementById('palette-container');
const generateBtn = document.getElementById('generate-btn');


function generateRandomHexColor() {
    const chars = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        color += chars[randomIndex];
    }

    return color;
}

function generatePalette() {
    paletteContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const randomColor = generateRandomHexColor();

        const colorSwatch = document.createElement('div');
        colorSwatch.classList.add('color-swatch');
        colorSwatch.style.backgroundColor = randomColor;

        const colorCode = document.createElement('p');
        colorCode.classList.add('color-code');
        colorCode.textContent = randomColor;

        colorSwatch.addEventListener('click', () => {
            navigator.clipboard.writeText(randomColor);
            
            colorCode.textContent = 'Copiado!';
            setTimeout(() => {
                colorCode.textContent = randomColor;
            }, 1000);
        });

        colorSwatch.appendChild(colorCode);

        paletteContainer.appendChild(colorSwatch);
    }
}


generateBtn.addEventListener('click', generatePalette);

window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); 
        generatePalette();
    }
});

generatePalette();