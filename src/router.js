import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from './pages/Home.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import TermsAndConditions from './pages/TermsAndConditions.vue'
import UserAgreement from './pages/UserAgreement.vue'
import CookiePolicy from './pages/CookiePolicy.vue'

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'Tranxfa - Home',
      description: 'Welcome to Tranxfa - your reliable money transfer service.'
    }
  },

  {
    path: '/privacy-policy',
    component: PrivacyPolicy,
    name: 'privacy-policy',
    meta: {
      title: 'Tranxfa - Privacy Policy',
      description: 'Tranxfa privacy policy details.'
    }
  },
  {
    path: '/terms-conditions',
    component: TermsAndConditions,
    name: 'terms-conditions',
    meta: {
      title: 'Tranxfa - Terms & Conditions',
      description: 'Tranxfa terms and conditions details.'
    }
  },
  {
    path: '/user-agreement',
    component: UserAgreement,
    name: 'user-agreement',
    meta: {
      title: 'Tranxfa - User Agreement',
      description: 'Tranxfa User Agreement details.'
    }
  },
  {
    path: '/cookie-policy',
    component: CookiePolicy,
    name: 'cookie-policy',
    meta: {
      title: 'Tranxfa - cookie-policy',
      description: 'Tranxfa cookie-policy details.'
    }
  },
]

export const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
})

// Set page meta tags
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta?.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta?.description);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  else document.title = 'Tranxfa';

  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .forEach(el => el.remove());

  if (nearestWithMeta) {
    const metaTag = document.createElement('meta');
    metaTag.name = 'description';
    metaTag.content = nearestWithMeta.meta.description;
    metaTag.setAttribute('data-vue-router-controlled', '');
    document.head.appendChild(metaTag);
  }

  next();
});

// ✅ Strong scroll fix
router.afterEach(() => {
  if (typeof window !== 'undefined') {
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  }
});
