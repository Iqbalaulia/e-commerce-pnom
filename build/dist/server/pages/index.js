exports.ids = [5];
exports.modules = {

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return carouselProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carouselBanner; });
const carouselProduct = {
  focusOnSelect: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 5,
  touchThreshold: 5
};
const carouselBanner = {
  dots: true,
  dotsClass: "slick-dots custom-dot-class",
  edgeFriction: 0.35,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.641b174.png";

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5bf33a18
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home"
  }, [_c('navbar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"home_banner\">", "</div>", [_vm.dataBanner.length > 0 ? _c('VueSlickCarousel', _vm._b({}, 'VueSlickCarousel', _vm.settings, false), _vm._l(_vm.dataBanner, function (itemBanner, indexBanner) {
    return _c('div', {
      key: indexBanner + itemBanner.uuid
    }, [_c('img', {
      staticClass: "images-banner",
      attrs: {
        "src": itemBanner.image,
        "alt": "banner-1"
      }
    })]);
  }), 0) : _vm._e()], 1), _vm._ssrNode(" "), _c('filter-category'), _vm._ssrNode(" "), _c('filter-popular'), _vm._ssrNode(" <div class=\"home_banner\"><img" + _vm._ssrAttr("src", __webpack_require__(80)) + " alt=\"banner-1\" class=\"images-banner\"></div> "), _c('filter-new-product'), _vm._ssrNode(" "), _c('filter-recomanded'), _vm._ssrNode(" <div class=\"home_banner\"><img" + _vm._ssrAttr("src", __webpack_require__(80)) + " alt=\"banner-1\" class=\"images-banner\"></div> "), _c('filter-article'), _vm._ssrNode(" "), _c('footer-ecommerce')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5bf33a18

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(77);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./plugins/carousel.js
var carousel = __webpack_require__(79);

// EXTERNAL MODULE: ./store/helpers.js
var helpers = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: "IndexPage",
  data() {
    return {
      settings: carousel["a" /* carouselBanner */],
      dataBanner: [],
      loading: false
    };
  },
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  created() {},
  mounted() {
    this.getListBanner();
  },
  methods: {
    ...helpers["crudMethods"],
    async getListBanner() {
      try {
        var _response$data;
        this.loading = true;
        let response = await this.getData({
          url: `/v1.0/homepage/banner`
        });
        this.dataBanner = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      } finally {
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2fc4ecae"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(14).default})


/***/ })

};;
//# sourceMappingURL=index.js.map