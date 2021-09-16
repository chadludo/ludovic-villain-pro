import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import SideProject from '../views/SideProject.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/side-project',
    name: 'Side-project',
    component: SideProject
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
