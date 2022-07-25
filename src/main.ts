import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";
import { loadFonts } from "./plugins/webfontloader";
import { toastPlugin } from "./plugins/toast";
import "vue-toastification/dist/index.css";
import "@/assets/styles/main.scss";

loadFonts();
const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.use(Toast, toastPlugin);
// app.use(VueGoogleMaps, { load: { key: process.env.VUE_APP_API_KEY } });
app.mount("#app");
