import authorized from '@/middleware/authorized';
import unauthorized from '@/middleware/unauthorized';

import { h, resolveComponent } from 'vue';

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: 'Home',
    },
  },
];
