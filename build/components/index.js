export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const FooterLogin = () => import('../..\\components\\footer\\FooterLogin.vue' /* webpackChunkName: "components/footer-login" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header\\index.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LayoutTutorial = () => import('../..\\components\\layout\\Tutorial.vue' /* webpackChunkName: "components/layout-tutorial" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\navbar\\index.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const ReviewCustomer = () => import('../..\\components\\reviewCustomer\\index.vue' /* webpackChunkName: "components/review-customer" */).then(c => wrapFunctional(c.default || c))
export const HomeFilterArticle = () => import('../..\\components\\home\\filterArticle\\index.vue' /* webpackChunkName: "components/home-filter-article" */).then(c => wrapFunctional(c.default || c))
export const HomeFilterCategory = () => import('../..\\components\\home\\filterCategory\\index.vue' /* webpackChunkName: "components/home-filter-category" */).then(c => wrapFunctional(c.default || c))
export const HomeFilterNewProduct = () => import('../..\\components\\home\\filterNewProduct\\index.vue' /* webpackChunkName: "components/home-filter-new-product" */).then(c => wrapFunctional(c.default || c))
export const HomeFilterPopular = () => import('../..\\components\\home\\filterPopular\\index.vue' /* webpackChunkName: "components/home-filter-popular" */).then(c => wrapFunctional(c.default || c))
export const HomeFilterRecomanded = () => import('../..\\components\\home\\filterRecomanded\\index.vue' /* webpackChunkName: "components/home-filter-recomanded" */).then(c => wrapFunctional(c.default || c))
export const HomeFilterRelate = () => import('../..\\components\\home\\filterRelate\\index.vue' /* webpackChunkName: "components/home-filter-relate" */).then(c => wrapFunctional(c.default || c))
export const UserAddress = () => import('../..\\components\\user\\address\\index.vue' /* webpackChunkName: "components/user-address" */).then(c => wrapFunctional(c.default || c))
export const UserDropshipper = () => import('../..\\components\\user\\dropshipper\\index.vue' /* webpackChunkName: "components/user-dropshipper" */).then(c => wrapFunctional(c.default || c))
export const UserMyAccount = () => import('../..\\components\\user\\myAccount\\index.vue' /* webpackChunkName: "components/user-my-account" */).then(c => wrapFunctional(c.default || c))
export const UserNotification = () => import('../..\\components\\user\\notification\\index.vue' /* webpackChunkName: "components/user-notification" */).then(c => wrapFunctional(c.default || c))
export const UserOrder = () => import('../..\\components\\user\\order\\index.vue' /* webpackChunkName: "components/user-order" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
