import { createRouter, createWebHistory } from "vue-router"
import SignIn from "@/Pages/SignIn.vue"
// import Dashboard from "../pages/Dashboard.vue"

const routes = [
  {
    path: "/",
    redirect: "/signin"
  },
  {
    path: "/signin",
    name: "signin",
    component: ()=>import ("@/Pages/SignIn.vue")

  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: ()=>import ("@/Pages/Dashboard.vue"),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 GLOBAL ROUTE GUARD
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth")

  if (to.meta.requiresAuth && !isLoggedIn) {
    // Dashboard-a icazə yoxdur → SignIn-a yönləndir
    next("/signin")
  } else {
    next()
  }
})

export default router
