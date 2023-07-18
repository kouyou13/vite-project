import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import Edit from "./components/pages/Edit.vue";

const routes = [
  {path: "/", component: Home, name: "home"},
  {path: "/edit", component: Edit, name: "edit"},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;