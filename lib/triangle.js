class Triangle {
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

module.exports = Triangle;
