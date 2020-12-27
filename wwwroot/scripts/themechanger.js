components.push({
    name: 'sp-theme-changer', obj: {
        inject: ['globalProps'],
        template: getTemplate('theme-changer'),
        data() {
            return {
                darkMode: isDarkMode() 
            };
        },
        methods: {
            changeTheme() {
                if (isDarkMode())
                    setParameterValue('mode', 'light');
                else 
                    setParameterValue('mode', 'dark');
            }
        }
    }
});
