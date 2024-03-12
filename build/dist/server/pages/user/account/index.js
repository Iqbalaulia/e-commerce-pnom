exports.ids = [8];
exports.modules = {

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/account/index.vue?vue&type=template&id=5f4ad87c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "user"
  }, [_c('navbar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"user_content\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-3 user_content_sidebar\"><div class=\"images_profile\"><img" + _vm._ssrAttr("src", __webpack_require__(15)) + " alt=\"category-1\"> <div><div class=\"images_profile_name\">iqbalaulia</div> <div class=\"images_profile_username\">auliaaulia</div></div></div> <div class=\"sidebar_menu\"><ul><li class=\"title_menu\">Profil Akun</li> <li" + _vm._ssrClass("sub_menu", _vm.$route.query.menu === `akun-saya` ? `sub_menu_active` : ``) + "><i class=\"fa-regular fa-circle-user\"></i>\n              Akun Saya\n            </li> <li" + _vm._ssrClass("sub_menu", _vm.$route.query.menu === `alamat` ? `sub_menu_active` : ``) + "><i class=\"fa-regular fa-address-card\"></i> Alamat\n            </li> <li" + _vm._ssrClass("sub_menu", _vm.$route.query.menu === `dropshipper` ? `sub_menu_active` : ``) + "><i class=\"fa-solid fa-truck-fast\"></i>\n              Dropshipper\n            </li> <li" + _vm._ssrClass("sub_menu", _vm.$route.query.menu === `pengaturan-notifikasi` ? `sub_menu_active` : ``) + "><i class=\"fa-solid fa-gears\"></i>\n              Pengaturan Notifikasi\n            </li> <li" + _vm._ssrClass("title_menu", _vm.$route.query.menu === `pesanan-saya` ? `title_menu_active` : ``) + ">\n              Pesanan saya\n            </li> <li" + _vm._ssrClass("title_menu", _vm.$route.query.menu === `wishlist` ? `title_menu_active` : ``) + ">\n              Wishlist\n            </li></ul></div></div> "), _vm._ssrNode("<div class=\"col-md-9\">", "</div>", [_vm.menu === `akun-saya` ? _c('my-account-component') : _vm._e(), _vm._ssrNode(" "), _vm.menu === `alamat` ? _c('my-address-component') : _vm._e(), _vm._ssrNode(" "), _vm.menu === `pengaturan-notifikasi` ? _c('my-notification-component') : _vm._e(), _vm._ssrNode(" "), _vm.menu === `dropshipper` ? _c('my-dropshipper-component') : _vm._e(), _vm._ssrNode(" "), _vm.menu === `pesanan-saya` ? _c('my-order-component') : _vm._e()], 2)], 2)]), _vm._ssrNode(" "), _c('footer-ecommerce')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/account/index.vue?vue&type=template&id=5f4ad87c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/account/index.vue?vue&type=script&lang=js
/* harmony default export */ var accountvue_type_script_lang_js = ({
  name: "UserAccount",
  data() {
    return {
      menu: "akun-saya"
    };
  },
  mounted() {
    this.onChangeMenu(`akun-saya`);
  },
  methods: {
    onChangeMenu(item) {
      this.menu = item;
      this.$router.push({
        path: this.$route.path,
        query: {
          menu: item
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/user/account/index.vue?vue&type=script&lang=js
 /* harmony default export */ var user_accountvue_type_script_lang_js = (accountvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/account/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_accountvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "273935e6"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(14).default})


/***/ })

};;
//# sourceMappingURL=index.js.map