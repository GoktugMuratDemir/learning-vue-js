import { createRouter, createWebHistory } from "vue-router";

import ProductCardInfoUiDesign from "../pages/ProductCardInfoUiDesign.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import AccountList from "../pages/AccountList.vue";
import ActiviteList from "../pages/ActiviteList.vue";
import Puzzle from "../pages/Puzzle.vue";

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
    path: "/activite",
    name: "Activite List",
    component: ActiviteList,
  },
  {
    path: "/accounts",
    name: "Account List",
    component: AccountList,
  },
  {
    path: "/product-card-info-ui-design",
    name: "Product Card",
    component: ProductCardInfoUiDesign,
  },
  {
    path: "/puzzle",
    name: "Puzzle Game",
    component: Puzzle,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
