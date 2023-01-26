import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
window.axios = require('axios');
axios.defaults.withCredentials = true

createApp(App).use(router).mount('#app')