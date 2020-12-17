import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/members',
    name: 'Members',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Members.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  }
 
]

const router = new VueRouter({
  routes
})

router.beforeEach( (to, from, next) => {
//si para donde voy requiere autorizacion, entonces pregunto si hay token activo
  if (to.matched.some( destinoRequireAut => destinoRequireAut.meta.requiresAuth)){

    //pregunto si hay token activo
    if(localStorage.getItem('token')){
      next();
    } 
    else{
       next({
         path: '/'
       })
    }

  }
  else{
    next();
  }

}

)

export default router
