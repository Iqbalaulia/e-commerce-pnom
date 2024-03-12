exports.ids = [7];
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/p/_product.vue?vue&type=template&id=14f7165d
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "detail_product"
  }, [_c('navbar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"detail_product_content\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-5\">", "</div>", [_vm._ssrNode("<div class=\"detail_product_content_thumbnail\"><img" + _vm._ssrAttr("src", _vm.imagesProduct) + " alt=\"thumbnail\" class=\"thumbnail\"></div> "), _c('VueSlickCarousel', _vm._b({
    staticClass: "mt-3 carousel-product"
  }, 'VueSlickCarousel', _vm.settings, false), _vm._l(_vm.mockDataCarouselProductDetail, function (itemImages, indexImages) {
    return _c('div', {
      key: indexImages,
      on: {
        "click": function ($event) {
          return _vm.changeProductImage(itemImages.imagesClicked);
        }
      }
    }, [_c('img', {
      staticClass: "w-100",
      attrs: {
        "src": itemImages.imagesUrl,
        "alt": "thumbnail"
      }
    })]);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-7\">", "</div>", [_vm._ssrNode("<div class=\"detail_product_content_detail\">", "</div>", [_vm._ssrNode("<label for class=\"title_content\">\n            Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe 2020\n            2021 2022 2023 Stiker Motor Keren Variasi\n          </label> "), _vm._ssrNode("<div class=\"detail_content\">", "</div>", [_vm._ssrNode("<div class=\"detail_content_star\"><div class=\"star-rating\">" + _vm._ssrList([1, 2, 3, 4, 5], function (star) {
    return "<span class=\"star\">\n                  ★\n                </span>";
  }) + "</div> <div class=\"total\">378 Penilaian</div></div> <div class=\"detail_content_price\"><div class=\"current_price\">Rp 40.500</div> <div class=\"discount_price\"><div class=\"cross_price\">Rp 73.000</div> <div class=\"nominal_discount\">40% OFF</div></div></div> "), _vm._ssrNode("<div class=\"detail_content_motif\">", "</div>", [_vm._ssrNode("<label for class=\"title\">Motif</label> "), _vm._ssrNode("<div>", "</div>", [_c('b-form-group', [_c('div', {
    staticClass: "row motif_content"
  }, _vm._l(_vm.mockDataNotif, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-md-2 motif-wrapper"
    }, [_c('b-form-radio', {
      staticClass: "pnom-radio-custom",
      attrs: {
        "name": "some-radios",
        "value": item.value
      },
      model: {
        value: _vm.selectedMotif,
        callback: function ($$v) {
          _vm.selectedMotif = $$v;
        },
        expression: "selectedMotif"
      }
    }, [_vm._v(_vm._s(item.name) + "\n                      ")])], 1);
  }), 0)])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"detail_content_component\">", "</div>", [_vm._ssrNode("<label for class=\"title\">bahan</label> "), _vm._ssrNode("<div>", "</div>", [_c('b-form-group', [_c('div', {
    staticClass: "row bahan_content"
  }, _vm._l(_vm.mockDataBahan, function (item, indexBahan) {
    return _c('div', {
      key: indexBahan,
      staticClass: "col-md-2 motif-wrapper"
    }, [_c('b-form-radio', {
      staticClass: "pnom-radio-custom",
      attrs: {
        "name": "bahan",
        "value": item.value
      },
      model: {
        value: _vm.selectedBahan,
        callback: function ($$v) {
          _vm.selectedBahan = $$v;
        },
        expression: "selectedBahan"
      }
    }, [_vm._v(_vm._s(item.name) + "\n                      ")])], 1);
  }), 0)])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"detail_content_quantity\">", "</div>", [_vm._ssrNode("<label for class=\"title\">kuantitas</label> "), _vm._ssrNode("<div class=\"btn_quantity\">", "</div>", [_c('b-button', {
    staticClass: "btn_count-min"
  }, [_vm._v("-")]), _vm._ssrNode(" "), _c('b-form-input', {
    staticClass: "input_quantity"
  }), _vm._ssrNode(" "), _c('b-button', {
    staticClass: "btn_count-plus"
  }, [_vm._v("+")])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"detail_content_cart\">", "</div>", [_c('b-button', {
    staticClass: "w-25 pnom-btn-primary",
    attrs: {
      "variant": "outline-primary"
    }
  }, [_c('i', {
    staticClass: "fas fa-cart-plus"
  }), _vm._v("\n                Keranjang\n              ")]), _vm._ssrNode(" "), _c('b-button', {
    staticClass: "ml-3 w-25 pnom-btn-primary",
    attrs: {
      "variant": "primary"
    }
  }, [_vm._v("Beli Langsung")])], 2)], 2)], 2)])], 2), _vm._ssrNode(" <div class=\"row mt-4\"><div class=\"col-md-12\"><div class=\"description_product\"><label for>Deskripsi Produk</label> <p class=\"description_product_content\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur\n            ex dignissimos rerum sunt reiciendis numquam facere necessitatibus\n            veniam accusantium beatae iure, totam eveniet nisi molestias\n            similique blanditiis sapiente adipisci. Ipsa!\n          </p></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-5\">", "</div>", [_vm._ssrNode("<div class=\"detail_product_content_rating\">", "</div>", [_vm._ssrNode("<label for>rating produk</label> <div class=\"detail_content_star\"><div class=\"star-rating\">" + _vm._ssrList([1, 2, 3, 4, 5], function (star) {
    return "<span class=\"star\">\n                ★\n              </span>";
  }) + "</div> <div class=\"total\">4.0/5.0</div></div> "), _vm._l(_vm.mockDataRatingProductDetail, function (itemRating, indexRating) {
    return _vm._ssrNode("<div class=\"detail_content_star_list\">", "</div>", [_vm._ssrNode("<div class=\"star-rating\">", "</div>", [_c('b-form-rating', {
      staticClass: "mb-2",
      attrs: {
        "color": "yellow"
      },
      model: {
        value: itemRating.rating,
        callback: function ($$v) {
          _vm.$set(itemRating, "rating", $$v);
        },
        expression: "itemRating.rating"
      }
    })], 1), _vm._ssrNode(" "), _c('b-progress', {
      attrs: {
        "value": itemRating.progress.value,
        "max": "500",
        "variant": "warning"
      }
    }), _vm._ssrNode(" <div class=\"total\">" + _vm._ssrEscape("\n              " + _vm._s(itemRating.total) + "\n            ") + "</div>")], 2);
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-7\">", "</div>", [_c('customer-review-component')], 1)], 2), _vm._ssrNode(" "), _c('filter-relate', {
    staticClass: "p-0 mt-5"
  }), _vm._ssrNode(" "), _c('filter-recomanded', {
    staticClass: "p-0 mt-5"
  })], 2), _vm._ssrNode(" "), _c('footer-ecommerce')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/p/_product.vue?vue&type=template&id=14f7165d

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(77);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./store/mock/mockData.js
var mockData = __webpack_require__(7);

// EXTERNAL MODULE: ./plugins/carousel.js
var carousel = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/p/_product.vue?vue&type=script&lang=js



/* harmony default export */ var _productvue_type_script_lang_js = ({
  name: "DetailProduct",
  data() {
    return {
      imagesProduct: "/_nuxt/assets/images/new-product/new-product-2.png",
      mockDataNotif: mockData["mockDataMotif"],
      mockDataBahan: mockData["mockDataBahan"],
      mockDataCarouselProductDetail: mockData["mockDataCarouselProductDetail"],
      mockDataRatingProductDetail: mockData["mockDataRatingProductDetail"],
      settings: carousel["b" /* carouselProduct */],
      selectedMotif: null,
      selectedBahan: null
    };
  },
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  methods: {
    changeProductImage(item) {
      this.imagesProduct = item;
    }
  }
});
// CONCATENATED MODULE: ./pages/p/_product.vue?vue&type=script&lang=js
 /* harmony default export */ var p_productvue_type_script_lang_js = (_productvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/p/_product.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  p_productvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "33715a70"
  
)

/* harmony default export */ var _product = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(14).default})


/***/ })

};;
//# sourceMappingURL=_product.js.map