const Circle = require('./circle');

class TestCircle {
    constructor() {
        this.cx = 150;
        this.cy = 100;
        this.radius = 50;
        this.color = "blue";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`;
    }
}

test('Create Circle SVG Element', () => {
    const circle = new Circle();
    circle.setColor('blue');
    const renderedSVG = circle.render();
    const expectedSVG = '<circle cx="150" cy="100" r="50" fill="blue" />';

    expect(renderedSVG).toEqual(expectedSVG);
});