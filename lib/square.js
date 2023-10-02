const Square = require('./square');
const { describe, it, expect } = require('@jest/globals');

describe('Square Class', () => {
    it('should render a square with the specified color', () => {
        const square = new Square();
        square.setColor('blue');
        const renderedSVG = square.render();
        const expectedSVG = '<rect x="50px" y="50px" width="200px" height="200px" fill="blue" />';

        expect(renderedSVG).toEqual(expectedSVG);
    });
});