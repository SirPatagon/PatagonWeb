components.push({
    name: 'sp-meter', obj: {
        inject: ['globalProps'],
        props: ['max', 'value', 'low', 'high', 'optimum'],
        template: getTemplate('meter'),
        computed: {
            colorClass() {
                return {
                    low: Number(this.value) >= Number(this.low) && Number(this.value) < Number(this.high),
                    high: Number(this.value) >= Number(this.high) && Number(this.value) < Number(this.optimum),
                    optimum: Number(this.value) >= Number(this.optimum)
                }
            },
            widthClass() {
                return {
                    width: (this.value / this.max) * 100 + '%'
                };
            }
        }
    }
});
