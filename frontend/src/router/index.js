import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import PeopleGrid from '../views/PeopleGrid.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile/:username',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/people/',
    name: 'People',
    component: PeopleGrid
  },
  {
    path: '/people/:id',
    name: 'People',
    component: PeopleGrid
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
