import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";
import Profile from "./pages/Profile.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import Orgs from "./pages/Organizations.vue";

const app = createApp(App);

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", component: App },
      { path: "/home", component: Profile },
      { path: "/login", component: Login },
      { path: "/reg", component: SignUp },
      { path: "/orgs", component: Orgs },
   ],
});

app.use(router);
app.mount("#app");
