import { createRouter, createWebHistory } from "vue-router";

import ProductCardInfoUiDesign from "../pages/ProductCardInfoUiDesign.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "ProductCardInfoUiDesign",
    component: ProductCardInfoUiDesign,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;