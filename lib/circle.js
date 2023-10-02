class Circle {
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
    module.exports = Circle;
