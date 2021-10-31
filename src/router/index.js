import Vue from 'vue'
import VueRouter from 'vue-router'
import Team from '../views/team.vue'
import Member from '../views/member.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'Member'}
  },
  {
    path: '/team',
    name: 'Member',
    component: Member
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
