import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue"),
    },
    {
        path: "/characters",
        name: "Characters",
        children: [
            {
                path: "create",
                name: "CreateCharacter",
                component: () => import("./views/Characters/Create.vue"),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
