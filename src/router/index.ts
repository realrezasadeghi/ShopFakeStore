import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { mainRoutes } from "./main.route";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("@/components/layouts/MainLayout.vue"),
    children: [...mainRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
