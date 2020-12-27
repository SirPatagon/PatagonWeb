components.push({
    name: 'sp-lang-changer', obj: {
        inject: ['globalProps'],
        template: getTemplate('lang-changer'),
        data() {
            return {
                currentLanguage: getParameterValue('lang') || (navigator.language || navigator.userLanguage).substring(0, 2)
            };
        },
        methods: {
            changeLanguage() {
                if (this.currentLanguage === 'de')
                    setParameterValue('lang', 'en');
                else if (this.currentLanguage === 'en')
                    setParameterValue('lang', 'de');
            }
        }
    }
});
