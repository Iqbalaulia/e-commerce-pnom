exports.ids = [2];
exports.modules = {

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_promo.c2da3ff.svg";

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/index.vue?vue&type=template&id=35dbe6c6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cart_product"
  }, [_c('navbar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart_product_content\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-md-12\"><div class=\"data-title\"><div class=\"devider\"></div> <label for>keranjang</label></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"select_all\">", "</div>", [_c('b-form-checkbox', {
    attrs: {
      "id": "checkbox-1",
      "name": "checkbox-1",
      "value": "accepted"
    }
  }, [_vm._v("\n            Pilih Semua\n          ")])], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12 show_cart\"></div> "), _vm._l(_vm.mockDataCart, function (cartItem, index) {
    return _vm._ssrNode("<div class=\"col-md-12 show_cart\">", "</div>", [_vm._ssrNode("<div class=\"show_cart_select mr-3\">", "</div>", [_c('b-form-checkbox', {
      attrs: {
        "id": "checkbox-1",
        "name": "checkbox-1",
        "value": "accepted"
      }
    }), _vm._ssrNode(" "), _c('b-img-lazy', {
      staticClass: "images-cart",
      attrs: {
        "src": "https://picsum.photos/1024/400/?image=41",
        "alt": "Responsive image"
      }
    })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"show_cart_information\">", "</div>", [_c('router-link', {
      attrs: {
        "to": `/p/striping-beat-pelindung`
      }
    }, [_c('label', {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n              Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe\n              2020 2021 2022 2023 Stiker Motor Keren Variasi\n            ")])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"action_variant\">", "</div>", [_vm._ssrNode("<div class=\"variant\"><label for> Variasi: P001, TIPIS </label> <div class=\"money\">Rp40.500</div></div> "), _vm._ssrNode("<div class=\"delete_list\">", "</div>", [_c('b-button', {
      staticClass: "btn_trash"
    }, [_c('i', {
      staticClass: "far fa-trash-alt"
    })])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"action_cart\">", "</div>", [_c('b-form-textarea', {
      attrs: {
        "id": "textarea-rows",
        "placeholder": "Tulis Catatan Untuk Produk Ini",
        "rows": "4"
      },
      model: {
        value: cartItem.notes,
        callback: function ($$v) {
          _vm.$set(cartItem, "notes", $$v);
        },
        expression: "cartItem.notes"
      }
    }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"action_button\">", "</div>", [_vm._ssrNode("<div class=\"btn_edit\">", "</div>", [_c('b-button', {
      staticClass: "btn_edit"
    }, [_c('i', {
      staticClass: "far fa-edit"
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn_whislist\">", "</div>", [_c('b-button', {
      staticClass: "btn_whislist"
    }, [_c('i', {
      staticClass: "far fa-heart"
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn_quantity\">", "</div>", [_c('b-button', {
      staticClass: "btn_count-min"
    }, [_vm._v("-")]), _vm._ssrNode(" "), _c('b-form-input', {
      staticClass: "input_quantity",
      model: {
        value: cartItem.countProduct,
        callback: function ($$v) {
          _vm.$set(cartItem, "countProduct", $$v);
        },
        expression: "cartItem.countProduct"
      }
    }), _vm._ssrNode(" "), _c('b-button', {
      staticClass: "btn_count-plus"
    }, [_vm._v("+")])], 2)], 2)], 2)], 2)], 2);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mt-5\">", "</div>", [_vm._ssrNode("<div class=\"col-md-4\"><div class=\"information_promo\"><img" + _vm._ssrAttr("src", __webpack_require__(78)) + " alt=\"thumbnail\" class=\"thumbnail\"> <label for>\n            JANGAN KELEWATAN BELI LEBIH MURAH GUNAKAN KODE PROMO\n          </label></div></div> <div class=\"col-md-4\"><div class=\"total_purchasing\"><label for>ringkasan pembelian</label> <div class=\"total_product\"><label for>" + _vm._ssrEscape("Total ( " + _vm._s(_vm.mockDataCart.length) + " Produk)") + "</label> <div class=\"count\">" + _vm._ssrEscape("Rp." + _vm._s(_vm.totalCalculatePrice)) + "</div></div> <div class=\"total_promo\"><label for>Potongan Promo</label> <div class=\"count\">" + _vm._ssrEscape("- Rp." + _vm._s(_vm.nominalPromo)) + "</div></div> <div class=\"total_price\"><label for>Total Harga</label> <div class=\"count\">" + _vm._ssrEscape("\n              Rp." + _vm._s(_vm.totalCalculatePrice - parseInt(_vm.nominalPromo)) + "\n            ") + "</div></div></div></div> "), _vm._ssrNode("<div class=\"col-md-4 col-md-custom\">", "</div>", [_vm._ssrNode("<div class=\"checkout\">", "</div>", [_c('router-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_c('b-button', {
    staticClass: "btn_checkout"
  }, [_vm._v(" checkout ")])], 1), _vm._ssrNode(" <div class=\"whislist\"><i class=\"far fa-heart\"></i>\n            Tambahkan Ke Wishlist\n          </div>")], 2)])], 2)], 2), _vm._ssrNode(" "), _c('footer-ecommerce')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart/index.vue?vue&type=template&id=35dbe6c6

// EXTERNAL MODULE: ./store/mock/mockData.js
var mockData = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/index.vue?vue&type=script&lang=js

/* harmony default export */ var cartvue_type_script_lang_js = ({
  name: "Cart",
  data() {
    return {
      mockDataCart: mockData["mockDataCart"],
      nominalPromo: "20000"
    };
  },
  computed: {
    totalCalculatePrice() {
      return this.mockDataCart.reduce((total, product) => {
        return total + parseInt(product.price) * parseInt(product.countProduct);
      }, 0);
    }
  }
});
// CONCATENATED MODULE: ./pages/cart/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_cartvue_type_script_lang_js = (cartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/cart/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "60b8dcea"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(14).default})


/***/ })

};;
//# sourceMappingURL=index.js.map