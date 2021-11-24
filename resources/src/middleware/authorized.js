import store from '@/store';

export default async ({ next, router, auth }) => {
  try {
    // if (!auth.getToken) {
    //   await store.dispatch('auth/setUser', null);
    //   return next({ name: 'login' });
    // }
    return next();
  } catch(error) {
    return Promise.reject(error);
  }
}
