exports.ids = [3];
exports.modules = {

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon_promo.c2da3ff.svg";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout/index.vue?vue&type=template&id=abb24d22
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "checkout"
  }, [_c('navbar'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"checkout_content\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-md-12\"><div class=\"data-title\"><div class=\"devider\"></div> <label for>checkout</label></div> <div class=\"devider-bottom\"></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"address\">", "</div>", [_vm._ssrNode("<div class=\"title_address\"><i class=\"fas fa-map-marker-alt\"></i> <label for=\"alamat pengiriman\"> alamat pengiriman </label></div> "), _vm._ssrNode("<div class=\"section_dropshipper\">", "</div>", [_c('b-form-checkbox', {
    attrs: {
      "id": "checkbox-1",
      "name": "checkbox-1"
    },
    on: {
      "change": _vm.onChangeDropshipper
    },
    model: {
      value: _vm.sendDropshipper,
      callback: function ($$v) {
        _vm.sendDropshipper = $$v;
      },
      expression: "sendDropshipper"
    }
  }, [_vm._v("\n              Kirim Sebagai Dropshipper\n            ")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"address_primary\">", "</div>", [_vm._ssrNode("<div class=\"address_primary_badge\">utama</div> <div class=\"address_primary_name\"><label for=\"Andrew Subiakto\">Andrew Subiakto</label> <div class=\"contact\">(+62)851 6223 1908</div></div> <div class=\"address_primary_location\">\n            Jl. Arief Rahman Hakim, Ruko No 6, Perumahan Citra Puri Keniten 1,\n            Kab. Ponorogo, Kec. Babadan, Jawa Timur, 63491.\n          </div> "), _vm._ssrNode("<div class=\"btn_edit\">", "</div>", [_c('b-button', {
    staticClass: "btn_edit"
  }, [_c('i', {
    staticClass: "far fa-edit"
  })])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm.sendDropshipper ? _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"address_dropshipper\">", "</div>", [_vm._ssrNode("<div class=\"address_dropshipper_title\">alamat penerima</div> "), _vm._ssrNode("<div class=\"address_dropshipper_content\">", "</div>", [_vm._ssrNode("<div class=\"address_dropshipper_content_name\"><label for=\"Andrew Subiakto\">Andrew Subiakto</label> <div class=\"contact\">(+62)851 6223 1908</div></div> " + (!_vm.locationDropshipper ? "<div class=\"address_dropshipper_content_location\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.formData.locationDropshipper) + "\n            ") + "</div>" : "<!---->") + " "), _vm.saveLocationDropshipper ? _vm._ssrNode("<div class=\"address_dropshipper_content_edit_location\">", "</div>", [_c('b-form-textarea', {
    attrs: {
      "id": "textarea",
      "placeholder": "Enter something...",
      "rows": "3",
      "max-rows": "6"
    },
    model: {
      value: _vm.formData.locationDropshipper,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "locationDropshipper", $$v);
      },
      expression: "formData.locationDropshipper"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [!_vm.saveLocationDropshipper ? _c('b-button', {
    staticClass: "pnom-btn-white",
    on: {
      "click": function ($event) {
        return _vm.editedLocationDropshipper();
      }
    }
  }, [_c('i', {
    staticClass: "far fa-edit"
  })]) : _c('b-button', {
    staticClass: "pnom-btn-white",
    on: {
      "click": function ($event) {
        return _vm.savedLocationDropshipper();
      }
    }
  }, [_c('i', {
    staticClass: "far fa-save"
  })])], 1)], 2)], 2)])]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"order\">", "</div>", [_vm._ssrNode("<div class=\"order_content\">", "</div>", [_vm._ssrNode("<label for>Pesanan 1</label> "), _vm._ssrNode("<div class=\"order_data_content\">", "</div>", [_c('b-img-lazy', {
    staticClass: "images-cart",
    attrs: {
      "src": "https://picsum.photos/1024/400/?image=41",
      "alt": "Responsive image"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"information_order\">", "</div>", [_vm._ssrNode("<div class=\"information_order_title\">\n                  Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe\n                  2020 2021 2022 2023 Stiker Motor Keren Variasi\n                </div> <div class=\"information_order_variant\">\n                  Variasi : P001, TIPIS\n                </div> <div class=\"information_order_price\">Rp40.500</div> "), _vm._ssrNode("<div class=\"information_order_reserve\">", "</div>", [_vm._ssrNode("<div class=\"nominal_reserve\">1 Pcs</div> "), _vm._ssrNode("<div class=\"btn_edit\">", "</div>", [_c('b-button', {
    staticClass: "btn_edit"
  }, [_c('i', {
    staticClass: "far fa-edit"
  })])], 1)], 2)], 2)], 2)], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row mt-5\">", "</div>", [_vm._ssrNode("<div class=\"col-md-4\"><div class=\"information_promo\"><img" + _vm._ssrAttr("src", __webpack_require__(78)) + " alt=\"thumbnail\" class=\"thumbnail\"> <label for>\n            JANGAN KELEWATAN BELI LEBIH MURAH GUNAKAN KODE PROMO\n          </label></div> <div class=\"total_purchasing\"><label for>ringkasan pembelian</label> <div class=\"total_promo\"><label for>Total Belanja</label></div> <div class=\"total_product\"><label for>Total ( 1 Produk)</label> <div class=\"count\">Rp.40</div></div> <div class=\"total_product\"><label for>Total Ongkos Kirim</label> <div class=\"count\">Rp.40</div></div> <div class=\"total_product\"><label for>Asuransi Pengiriman</label> <div class=\"count\">Rp.40</div></div> <div class=\"total_promo\"><label for>Potongan Promo</label></div> <div class=\"total_product\"><label for>Potongan Produk</label> <div class=\"count\">Rp.40</div></div> <div class=\"total_product\"><label for>Potongan Ongkir</label> <div class=\"count\">Rp.40</div></div> <div class=\"total_product\"><label for>Biaya Pelayanan</label> <div class=\"count\">Rp.40</div></div> <div class=\"total_price\"><label for>Total Harga</label> <div class=\"count\">Rp.2</div></div></div></div> <div class=\"col-md-2\"></div> "), _vm._ssrNode("<div class=\"col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"method_payment\">", "</div>", [_vm._ssrNode("<div class=\"method_payment_label\">metode pembayaran</div> "), _vm._ssrNode("<div class=\"row mt-4\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6\">", "</div>", [_c('router-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('b-button', {
    staticClass: "pnom-btn-red w-100"
  }, [_vm._v(" c.o.d ")])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-6\">", "</div>", [_c('router-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('b-button', {
    staticClass: "pnom-btn-red w-100"
  }, [_vm._v(" qris ")])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12 mt-5\">", "</div>", [_c('router-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('b-button', {
    staticClass: "pnom-btn-red w-100"
  }, [_vm._v("\n                  proses pesanan\n                ")])], 1)], 1)], 2)], 2)])], 2)], 2), _vm._ssrNode(" "), _c('footer-ecommerce')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout/index.vue?vue&type=template&id=abb24d22

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout/index.vue?vue&type=script&lang=js
/* harmony default export */ var checkoutvue_type_script_lang_js = ({
  name: "PageCheckout",
  data() {
    return {
      sendDropshipper: false,
      locationDropshipper: false,
      saveLocationDropshipper: false,
      formData: {
        locationDropshipper: ""
      }
    };
  },
  methods: {
    onChangeDropshipper(checked) {
      this.sendDropshipper = checked;
    },
    editedLocationDropshipper() {
      this.locationDropshipper = true;
      this.saveLocationDropshipper = true;
    },
    savedLocationDropshipper() {
      this.saveLocationDropshipper = false;
      this.locationDropshipper = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/checkout/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js = (checkoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/checkout/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d073990"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(14).default})


/***/ })

};;
//# sourceMappingURL=index.js.map