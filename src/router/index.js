import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhoWeServe from '@/views/WhoWeServe.vue'
import Business from '@/views/Business.vue'
import Marketing from '@/views/Marketing.vue'
import Technology from '@/views/Technology.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import CaseBusiness from '@/components/caseStudy/CaseBusiness.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/whoweserve',
      name: 'whoweserve',
      component: () => import('@/views/WhoWeServe.vue'),
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('@/views/Business.vue'),
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('@/views/Marketing.vue'),
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('@/views/Technology.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
    },
    {
      path: '/case-business', // Use lowercase, hyphenated route path (better convention)
      name: 'CaseBusiness',
      component: CaseBusiness
    },
    
  ],
})

export default router
