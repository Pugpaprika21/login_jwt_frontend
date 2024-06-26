import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/login",
            name: "login",
            component: () =>
                import ("../views/LoginView.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import ("../views/RegisterView.vue"),
        },

        {
            path: "/welcome",
            name: "welcome",
            component: () =>
                import ("../views/WelcomeView.vue"),
        },
    ],
});

export default router;