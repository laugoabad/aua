import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
    {
      path: '/tienda',
      name: 'Tienda',
      component: () => import('../views/Tienda.vue')
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('../views/Contacto.vue')
    },
    {
      path: '/pago',
      name: 'Pago',
      component: () => import('../views/Pago.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/Admin.vue')
    },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
 
})


export default router
