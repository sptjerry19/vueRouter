import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import AboutInfo from "./pages/AboutInfo";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutScreen },
  { path: "/about/:id", component: AboutInfo },
];
const router = createRouter({
  history: createWebHashHistory(process.env.Base_URL),
  routes, // short for `routes: routes`
});

export default router;
