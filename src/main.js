import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/BaseStyles.scss';

createApp(App).use(store).use(router).mount('#app');

document.addEventListener('mousemove', e => {
    setTimeout(() => {
        document.body.parentElement.style.setProperty('--x', e.clientX + 'px');
        document.body.parentElement.style.setProperty('--y', e.clientY + 'px');
    }, 50);
});
