import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure router is imported
import './registerServiceWorker'

const app = createApp(App);
app.use(router); // Make sure router is applied
app.mount('#app');
