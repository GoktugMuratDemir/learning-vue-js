import { createRouter, createWebHistory } from "vue-router";
import PageOne from "../pages/PageOne.vue";
import PageTwo from "../pages/PageTwo.vue";

const routes = [
  {
    path: "/",
    name: "PageOne",
    component: PageOne,
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