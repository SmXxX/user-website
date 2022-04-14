import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageLogin from "../views/PageLogin.vue";
import PageRegister from "../views/PageRegister.vue";
import PageProfile from "../views/PageProfile.vue";
import PageSingle from "../views/PageSingle.vue";
import PageCart from "../views/PageCart.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/PageLogin",
    name: "PageLogin",
    component: PageLogin,
  },
  {
    path: "/PageRegister",
    name: "PageRegister",
    component: PageRegister,
  },
  {
    path: "/PageProfile",
    name: "PageProfile",
    component: PageProfile,
  },
  {
    path: "/PageSingle/:id",
    name: "PageSingle",
    component: PageSingle,
  },
  {
    path: "/PageCart/",
    name: "PageCart",
    component: PageCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
