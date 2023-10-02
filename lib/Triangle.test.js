const Triangle = require('./triangle');

class TestTriangle {
    constructor() {
        this.points = "150, 50 100, 150 200, 150";
        this.color = "blue";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

test('Create Triangle SVG Element', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const renderedSVG = triangle.render();
    const expectedSVG = '<polygon points="150, 50 100, 150 200, 150" fill="blue" />';

    expect(renderedSVG).toEqual(expectedSVG);
});
