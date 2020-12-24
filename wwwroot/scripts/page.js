'use strict';
var app = Vue.createApp({
    data() {
        return {
            globalProps: Vue.reactive({
                darkMode: isDarkMode()
            })
        };
    },
    provide() {
        return {
            globalProps: this.globalProps
        };
    }
});

components.forEach(i => app.component(i.name, i.obj));

app.mount('#page');
