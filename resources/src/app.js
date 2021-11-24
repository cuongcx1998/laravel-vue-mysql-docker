'use strict';

import { createApp } from 'vue';
import router from '@/routes/loader';
import store from '@/store';
import i18n from '@/plugins/i18n';
import axios from '@/plugins/axios';
import App from '@/App.vue';

const app = createApp(App);
const plugin = {
  install () {
    app.config.globalProperties.$axios = axios;
  }
};

[store, i18n, router, plugin].forEach((plg) => {
  app.use(plg);
});

app.mount("#app");

