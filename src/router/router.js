import { createRouter, createWebHistory } from "vue-router";
import auth from "../middleware/auth";
import registrable from "../middleware/registrable";
import loginable from "../middleware/loginable";







const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "auth-start",
      component: () => import("../views/auth/auth-start.vue"),
      link: "http://127.0.0.1:5173/",
      beforeEnter: [loginable]

    },
    {
      path: "/auth",
      children: [
        {
          path: "login",
          name: "auth-login",
          component: () => import("../views/auth/auth-login.vue"),
          link: "http://127.0.0.1:5173/auth/login",
          beforeEnter: [loginable]
        },
        {
          path: "register",
          component: () => import("../views/auth/auth-register.vue"),
          link: "http://127.0.0.1:5173/auth/register",
          beforeEnter: [registrable]

        },
        {
          path: "sms",
          component: () => import("../views/auth/auth-sms.vue"),
          link: "http://127.0.0.1:5173/auth/sms",
          beforeEnter: [registrable]

        },
        {
          path: "complete",
          component: () => import("../views/auth/auth-complete.vue"),
          link: "http://127.0.0.1:5173/auth/complete",
          beforeEnter: [registrable]
        },
      ],
    },
    {
      path: "/home",
      beforeEnter: [auth],
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/home/home-start.vue"),
          link: "http://127.0.0.1:5173/home/",
        },
        {
          path: "specialist",
          name: "specialist",
          component: () => import("../views/home/home-specialist.vue"),
          link: "http://127.0.0.1:5173/home/specialist",
        },
      ],
    },
    {
      path: "/doctor",
      beforeEnter: [auth],
      children: [
        {
          name:"doctor-top-list",
          path: "top-list",
          component: () => import("../views/doctor/doctor-top-list.vue"),
          link: "http://127.0.0.1:5173/doctor/top-list",
        },
      ],
    },
    {
      path: "/appointment",
      beforeEnter: [auth],
      children: [
        {
          path: "past",
          name: "appointment-past",
          component: () => import("../views/appointment/appointment-past.vue"),
          link: "http://127.0.0.1:5173/appointment/book/past",
        },
        {
          path: "upcoming",
          name: "appointment-upcoming",
          component: () =>
            import("../views/appointment/appointment-upcoming.vue"),
          link: "http://127.0.0.1:5173/appointment/book/upcoming",
        },
        {
          path: "/appointment/book",
          children: [
            {
              name: "appointment-book-create-step-01",
              path: "create-step-01",
              component: () =>
                import(
                  "../views/appointment/appointment-book/appointment-book-create-step-01.vue"
                ),
              link: "http://127.0.0.1:5173/appointment/book/create-step-01",
            },
            {
              name: "appointment-book-create-step-02",
              path: "create-step-02",
              component: () =>
                import(
                  "../views/appointment/appointment-book/appointment-book-create-step-02.vue"
                ),
              link: "http://127.0.0.1:5173/appointment/book/create-step-02",
            },
            {
              name: "appointment-book-create-step-03",
              path: "create-step-03",
              component: () =>
                import(
                  "../views/appointment/appointment-book/appointment-book-create-step-03.vue"
                ),
              link: "http://127.0.0.1:5173/appointment/book/create-step-03",
            },
          ],
        },
      ],
    },
    {
      path: "/profile",
      beforeEnter: [auth],
      children: [
        {
          path: "",
          name:"profile-start",
          component: () => import("../views/profile/profile-start.vue"),
          link: "http://127.0.0.1:5173/profile/",
        },
        // {
        //   path: "notification",
        //   component: () => import("../views/profile/profile-notification.vue"),
        //   link: "http://127.0.0.1:5173/profile/notification",
        // },
        // {
        //   path: "help",
        //   component: () => import("../views/profile/profile-help.vue"),
        //   link: "http://127.0.0.1:5173/profile/",
        // },
        // {
        //   path: "invite",
        //   component: () => import("../views/profile/profile-invite.vue"),
        //   link: "http://127.0.0.1:5173/profile/invite",
        // },
      ],
    },
  ],
});
export default router;
