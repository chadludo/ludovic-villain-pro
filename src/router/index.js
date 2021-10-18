import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Works from '@/views/Works.vue'
import SideProject from '@/views/SideProject.vue'
import Contact from '@/views/Contact.vue'
import ArtbookDofus from '@/views/ArtbookDofus.vue'
import Beaumanoir from '@/views/Beaumanoir.vue'
import Armitiere from '@/views/Armitiere.vue'
import AddProject from '@/views/AddProject.vue'

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
  },
  {
    path: '/artbook-dofus',
    name: 'Artbookdofus',
    component: ArtbookDofus
  },
  {
    path: '/beaumanoir',
    name: 'Beaumanoir',
    component: Beaumanoir
  },
  {
    path: '/armitiere',
    name: 'Armitiere',
    component: Armitiere
  },
  {
    path: '/dashboard',
    name: 'AddProject',
    component: AddProject
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
