import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Generic from '../pages/Generic.vue'
import {useSession} from "../models/session";


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [ //made it type RouteRecordRaw
  { path: '/', component: Home },
  { path: '/about', component: Generic, props: {title: 'About Page!'} },
  { path: '/contact', component: Generic, props: {title: 'Contact Page!'} },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/tasktracker', component: () => import('../pages/TaskTracker.vue') },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkActiveClass: 'is-active'
})

//Guards:
router.beforeEach((to, from) =>{
  const session = useSession();
 
  if(session.destinationUrl == null && to.path != '/login') {
      session.destinationUrl = to.path;
  }
  console.log({ to });
  const protectedUrls = ['/tasktracker'];
  console.log({ protectedUrls });

  if (protectedUrls.includes(to.path)) { // list of paths that require login
    console.log('requires login');
    if (!session.user) {
        return '/login';
    }
}
})

export default router;