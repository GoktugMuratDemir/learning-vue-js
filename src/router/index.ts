import { createRouter, createWebHistory } from "vue-router";

import PageTwo from "../pages/PageTwo.vue";
import ProductCardInfoUiDesign from "../pages/ProductCardInfoUiDesign.vue";

const routes = [
  {
    path: "/",
    name: "PageOne",
    component: ProductCardInfoUiDesign,
  },
  {
    path: "/two",
    name: "PageTwo",
    component: PageTwo,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;