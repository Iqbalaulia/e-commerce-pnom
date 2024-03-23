import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _325667d1 = () => interopDefault(import('..\\pages\\c\\index.vue' /* webpackChunkName: "pages/c/index" */))
const _45dbe260 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _3ee3217a = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _941649f8 = () => interopDefault(import('..\\pages\\daftar\\index.vue' /* webpackChunkName: "pages/daftar/index" */))
const _5470540b = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _d34864b8 = () => interopDefault(import('..\\pages\\p\\index.vue' /* webpackChunkName: "pages/p/index" */))
const _33559092 = () => interopDefault(import('..\\pages\\user\\account\\index.vue' /* webpackChunkName: "pages/user/account/index" */))
const _c8d65500 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6400645c = () => interopDefault(import('..\\pages\\c\\_category.vue' /* webpackChunkName: "pages/c/_category" */))
const _530abe64 = () => interopDefault(import('..\\pages\\p\\_product.vue' /* webpackChunkName: "pages/p/_product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/c",
    component: _325667d1,
    name: "c"
  }, {
    path: "/cart",
    component: _45dbe260,
    name: "cart"
  }, {
    path: "/checkout",
    component: _3ee3217a,
    name: "checkout"
  }, {
    path: "/daftar",
    component: _941649f8,
    name: "daftar"
  }, {
    path: "/login",
    component: _5470540b,
    name: "login"
  }, {
    path: "/p",
    component: _d34864b8,
    name: "p"
  }, {
    path: "/user/account",
    component: _33559092,
    name: "user-account"
  }, {
    path: "/",
    component: _c8d65500,
    name: "index"
  }, {
    path: "/c/:category",
    component: _6400645c,
    name: "c-category"
  }, {
    path: "/p/:product",
    component: _530abe64,
    name: "p-product"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
