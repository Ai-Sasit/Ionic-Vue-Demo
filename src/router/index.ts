import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/PageDetail.vue"),
  },
  {
    path: "/binddataalert",
    name: "BindDataAlert",
    component: () => import("../views/BindDataAlert.vue"),
  },
  {
    path: "/binddata",
    props: true,
    name: "BindData",
    component: () => import("../views/BindData.vue"),
  },
  {
    path: "/receivedata/:data",
    props: true,
    name: "ReceiveData",
    component: () => import("../views/ReceiveData.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
