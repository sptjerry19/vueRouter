import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import AboutInfo from "./pages/AboutInfo";
import ErrorScreen from "./pages/ErrorScreen";
import ProjectsPage from "./pages/ProjectsPage";
import AddData from "./pages/AddData";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutScreen },
  { path: "/about/:id", component: AboutInfo },
  { path: "/projects", component: ProjectsPage },
  { path: "/add", component: AddData },
  { path: "/projects/:id", component: AboutInfo },
  { path: "/:pathMatch(.*)*", component: ErrorScreen },
];
const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes, // short for `routes: routes`
});

export default router;
