import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { SharedElementDirective, SharedElementRouteGuard } from 'v-shared-element';
import './style.css';

const app = createApp(App);

// Instalação do Directive
app.directive('shared-element', SharedElementDirective);

// Configuração cdo Router
router.beforeEach(SharedElementRouteGuard);

app.use(router);

app.mount('#app');
