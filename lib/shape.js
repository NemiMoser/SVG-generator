const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

function createCircle(radius, fillColor) {
    const circle = new Circle();
    circle.setColor(fillColor);
    return circle.render();
}

function createTriangle(sideLength, fillColor) {
    const triangle = new Triangle();
    triangle.setColor(fillColor);
    return triangle.render();
}

function createSquare(sideLength, fillColor) {
    const square = new Square();
    square.setColor(fillColor);
    return square.render();
}

module.exports = { createCircle, createTriangle, createSquare };