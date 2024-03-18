import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

const app = createApp(App);

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", component: App },
      { path: "/home", component: Home },
      { path: "/login", component: Login },
      { path: "/reg", component: SignUp },
   ],
});

app.use(router);
app.mount("#app");
