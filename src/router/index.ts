import { createRouter, createWebHistory } from "vue-router";

import ProductCardInfoUiDesign from "../pages/ProductCardInfoUiDesign.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Accounts from "../pages/Accounts.vue";

export const routes = [
  {
    path: "/",
    name: "Login UI Design",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: Accounts,
  },
  {
    path: "/product-card-info-ui-design",
    name: "Product Card Info UI Design",
    component: ProductCardInfoUiDesign,
  }

];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;