'use strict';
var app = Vue.createApp({
    data() {
        return {
            globalProps: Vue.reactive({
                darkMode: isDarkMode()
            }),
            bgCode: document.getElementsByTagName('html')[0].innerHTML.replace('\n', '') +
                document.getElementsByTagName('html')[0].innerHTML.replace('\n', '') +
                document.getElementsByTagName('html')[0].innerHTML.replace('\n', '') +
                document.getElementsByTagName('html')[0].innerHTML.replace('\n', '')
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
