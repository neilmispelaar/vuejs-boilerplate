import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import tailwindcss into our project
import './assets/styles/main.css';

// Setup Vue App and the add-ons
const app = createApp(App);

// Setup the using statements
app.use(router);
app.use(store);

// Start the app
app.mount('#app');
