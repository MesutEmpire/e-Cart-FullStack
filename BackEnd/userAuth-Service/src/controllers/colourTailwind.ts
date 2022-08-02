class TailwindColor {
    private colors: string[];
    private range: { min: number; max: number };
    private prefix: string;
    private tempColors: any[];
    private random(min = 1, max = 9) {
        return Math.floor(Math.random() * max) + min;
    }

    constructor(options:any) {
        const {
            colors = [
                'gray',
                'red',
                'yellow',
                'green',
                'blue',
                'indigo',
                'purple',
                'pink'
            ],
            range = [
                1,9
            ],
            prefix = 'bg',
        } = options || {};

        this.colors = colors;
        this.range = {
            min: range[0],
            max: range[1]
        };
        this.prefix = prefix;

        this.tempColors = [];
    }

    pick() {
        const number = this.random(this.range.min, this.range.max) * 100;
        const indexColor = this.random(0, this.colors.length - 1);
        return `${this.prefix}-${this.colors[indexColor]}-${number}`;
    }
}

module.exports = TailwindColor;