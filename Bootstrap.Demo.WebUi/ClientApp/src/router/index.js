import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Counter from "@/pages/Counter.vue";
import FetchData from "@/pages/FetchData.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/FetchData",
        name: "FetchData",
        component: FetchData,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
