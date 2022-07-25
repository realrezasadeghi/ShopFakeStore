import { RouteRecordRaw } from "vue-router";

export const mainRoutes: RouteRecordRaw[] = [
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
  {
    path: "register",
    name: "Register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "favorites",
    name: "Favorites",
    component: () => import("@/views/FavoritesView.vue"),
  },
  {
    path: "cart",
    name: "Cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "profile",
    name: "Profile",
    component: () => import("@/views/ProfileView.vue"),
  },
];
