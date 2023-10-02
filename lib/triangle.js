const Triangle = require('./triangle');
const { describe, it, expect } = require('@jest/globals');

describe('Triangle Class', () => {
    it('should render a triangle with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const renderedSVG = triangle.render();
        const expectedSVG = '<polygon points="150, 50 100, 150 200, 150" fill="blue" />';

        expect(renderedSVG).toEqual(expectedSVG);
    });
});