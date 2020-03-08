import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Feedback from '../views/Feedback.vue'
import Portfolio from '../views/UserPortfolio.vue'
import AddCharacter from '../views/AddCharacter.vue'
import EditCharacter from '../views/EditCharacter.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    meta: { requiresAuth: true }
  },
  {
    path: '/addCharacter',
    name: 'addCharacter',
    component: AddCharacter,
    meta: { requiresAuth: true }
  },
  {
    path: '/editCharacter',
    name: 'editCharacter',
    component: EditCharacter,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getUser) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
