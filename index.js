const inquirer = require('inquirer');
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully created ${fileName}!`);
        }
    });
}

function generateSVG({ characters, textColor, shape, shapeColor }) {
    let shapeElement;
    let textElement;

    const svgWidth = 300;
    const svgHeight= 200;

    if (shape === 'circle') {
        const cx = svgWidth / 2;
        const cy = svgHeight / 2;
        const radius = Math.min(svgWidth, svgHeight) / 3;

        shapeElement = `<circle cx="${cx}px" cy="${cy}px" r="${radius}px" fill="${shapeColor}" />`;
        textElement = `<text x="${cx}px" y="${cy}px" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${characters}</text>`;
    } else if (shape === 'triangle') {
        const points = `${svgWidth / 2},${svgHeight / 4} ${svgWidth / 4},${(3 * svgHeight) / 4} ${(3 * svgWidth) / 4},${(3 * svgHeight) / 4}`;
        shapeElement = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}"/>`;
        textElement = `<text x="${svgWidth / 2}px" y="${svgHeight / 2}px" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${characters}</text>`;
    } else if (shape === 'square') {
        const size = Math.min(svgWidth, svgHeight) / 3;
        const x = (svgWidth - size) / 2;
        const y = (svgHeight - size) / 2;

        shapeElement = `<rect x="${x}px" y="${y}px" width="${size}px" height="${size}px" fill="${shapeColor}" />`;
        textElement = `<text x="${svgWidth / 2}px" y="${svgHeight / 2}px" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${characters}</text>`;
}

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
        ${shapeElement}
        ${textElement}
    </svg>`;

    return svgContent;
}

async function init() {
    const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Please enter up to three characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color keyword or a hexadecimal number',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword or hexadecimal number for your shape:',
    },
];

try {
    const answers = await inquirer.prompt(questions);
    const svgContent = generateSVG(answers);

    writeToFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
} catch (err) {
    console.error(err);
    }
}

init();