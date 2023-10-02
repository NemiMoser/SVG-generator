const Square = require('./square');

class TestSquare {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.size = 200;
        this.color = "blue";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
}

test('Create Square SVG Element', () => {
    const square = new Square();
    square.setColor('blue');
    const renderedSVG = square.render();
    const expectedSVG = '<rect x="50" y="50" width="200" height="200" fill="blue" />';

    expect(renderedSVG).toEqual(expectedSVG);
});
