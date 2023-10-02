const Circle = require('./circle');
const { describe, it, expect } = require('@jest/globals');

describe('Circle Class', () => {
    it('should render a circle with the specified color', () => {
        const circle = new Circle();
        circle.setColor('blue');
        const renderedSVG = circle.render();
        const expectedSVG = '<circle cx="150" cy="100" r="50" fill="blue" />';

        expect(renderedSVG).toEqual(expectedSVG);
    });
});