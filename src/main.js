import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import navBar from '@/components/navBar.vue'
import sideBar from '@/components/sideBar.vue'
import smLogo from '@/components/logo.vue'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component('navBar', navBar)
app.component('sideBar', sideBar)
app.component('smLogo', smLogo)
app.use(createPinia());
app.use(router);

app.mount("#app");
