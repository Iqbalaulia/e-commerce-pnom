export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Footer } from '../..\\components\\footer\\Footer.vue'
export { default as FooterLogin } from '../..\\components\\footer\\FooterLogin.vue'
export { default as EmptyStateList } from '../..\\components\\emptyState\\EmptyStateList.vue'
export { default as Header } from '../..\\components\\header\\index.vue'
export { default as LayoutTutorial } from '../..\\components\\layout\\Tutorial.vue'
export { default as ReviewCustomer } from '../..\\components\\reviewCustomer\\index.vue'
export { default as Navbar } from '../..\\components\\navbar\\index.vue'
export { default as SkeletonBanner } from '../..\\components\\skeleton\\skeleton-banner.vue'
export { default as SkeletonList } from '../..\\components\\skeleton\\skeleton-list.vue'
export { default as HomeFilterArticle } from '../..\\components\\home\\filterArticle\\index.vue'
export { default as HomeFilterCategory } from '../..\\components\\home\\filterCategory\\index.vue'
export { default as HomeFilterNewProduct } from '../..\\components\\home\\filterNewProduct\\index.vue'
export { default as HomeFilterPopular } from '../..\\components\\home\\filterPopular\\index.vue'
export { default as HomeFilterRecomanded } from '../..\\components\\home\\filterRecomanded\\index.vue'
export { default as HomeFilterRelate } from '../..\\components\\home\\filterRelate\\index.vue'
export { default as UserAddress } from '../..\\components\\user\\address\\index.vue'
export { default as UserDropshipper } from '../..\\components\\user\\dropshipper\\index.vue'
export { default as UserMyAccount } from '../..\\components\\user\\myAccount\\index.vue'
export { default as UserNotification } from '../..\\components\\user\\notification\\index.vue'
export { default as UserOrder } from '../..\\components\\user\\order\\index.vue'

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
