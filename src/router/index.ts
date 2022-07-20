import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MianLayout from "@/components/layouts/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainLayout",
    component: MianLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "products",
        name: "Products",
        component: () => import("@/views/ProductsView.vue"),
      },
      {
        path: "products/:id",
        name: "ProductDetails",
        component: () => import("@/views/ProductDetails.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/LoginView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
