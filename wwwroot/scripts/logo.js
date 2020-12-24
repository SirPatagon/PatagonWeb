components.push({
    name: 'logo', obj: {
        inject: ['globalProps'],
        template: getTemplate('logo'),
        data() {
            return {
                counter: 42
            };
        }
    }
});
