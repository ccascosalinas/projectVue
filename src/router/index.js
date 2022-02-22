import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/home.vue'
import team from '../views/team.vue'
import schedule from '../views/others.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: "/home.vue",
    component: home
  },
  {
    path: "/team.vue",
    component: team
  },
  {
    path: "/Schedule.vue",
    component: schedule
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
