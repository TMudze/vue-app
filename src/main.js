import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import DashboardPlugin from "./dashboard-plugin";

const options = { containerClassName: "ct-notification" };

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(Toast, options);
appInstance.use(DashboardPlugin);
appInstance.mount("#app");
