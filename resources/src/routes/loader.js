import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';
import store from '@/store';

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

const nextFactory = (context, middleware, index) => {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if(!subsequentMiddleware) {return context.next;}

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({
      ...context,
      next: nextMiddleware
    });
  };
};

router.beforeEach(async (to, from, next) => {
  // if(to.name === 'Logout') {
  //   return next({ name: 'login', query: to.query });
  // }
  //
  // if(!store.getters['auth/user'] && to.name !== 'login') {
  //   try {
  //     await store.dispatch('auth/getUser');
  //   } catch(error) {
  //     return Promise.reject(error);
  //   }
  // }
  // const authorize = Array.isArray(to.meta.authorize) ?
  //   to.meta.authorize :
  //   [to.meta.authorize];
  // const user = store.getters['auth/user'];
  //
  // if (user && authorize.length && !authorize.some(role => user[role])) {
  //   return next({name: 'home'});
  // }

  if(!to.meta.middleware) {
    return next();
  }

  const middleware = Array.isArray(to.meta.middleware) ?
    to.meta.middleware :
    [to.meta.middleware];

  const context = {
    from,
    next,
    router,
    to,
    store
  };
  const nextMiddleware = nextFactory(context, middleware, 1);

  return middleware[0]({
    ...context,
    next: nextMiddleware
  });

});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    document.title = to.meta.title || "Home";
  }
  return next();
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  // loading.done();
});

export default router;














