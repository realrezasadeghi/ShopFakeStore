import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { mainRoutes } from "./main.route";
import store from "@/store";
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

router.beforeEach((to, from, next) => {
  // const isAuthenticated = store.getters["user/getIsAuthenticated"];
  // if (isAuthenticated) {
  //   const { iat } = store.getters["user/getUser"];
  //   if (iat * 1000 < Date.now()) {
  //     localStorage.removeItem("token");
  //     return { name: "Login" };
  //   }
  // }
  // next({ name: to.name as string });
  next();
});
export default router;
