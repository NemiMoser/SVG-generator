class Square {
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
        return `<rect x="50" y="50" width="200" height="200" fill="blue" />`
    }
}

module.exports = Square;
