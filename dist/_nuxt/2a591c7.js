(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{395:function(t,o,r){t.exports=r.p+"img/icon_promo.c2da3ff.svg"},403:function(t,o,r){"use strict";r.r(o);var e=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"data-title"},[o("div",{staticClass:"devider"}),t._v(" "),o("label",{attrs:{for:""}},[t._v("checkout")])]),t._v(" "),o("div",{staticClass:"devider-bottom"})])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"title_address"},[o("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" "),o("label",{attrs:{for:"alamat pengiriman"}},[t._v(" alamat pengiriman ")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"address_primary_name"},[o("label",{attrs:{for:"Andrew Subiakto"}},[t._v("Andrew Subiakto")]),t._v(" "),o("div",{staticClass:"contact"},[t._v("(+62)851 6223 1908")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"address_dropshipper_content_name"},[o("label",{attrs:{for:"Andrew Subiakto"}},[t._v("Andrew Subiakto")]),t._v(" "),o("div",{staticClass:"contact"},[t._v("(+62)851 6223 1908")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"information_promo"},[o("img",{staticClass:"thumbnail",attrs:{src:r(395),alt:"thumbnail"}}),t._v(" "),o("label",{attrs:{for:""}},[t._v("\n            JANGAN KELEWATAN BELI LEBIH MURAH GUNAKAN KODE PROMO\n          ")])]),t._v(" "),o("div",{staticClass:"total_purchasing"},[o("label",{attrs:{for:""}},[t._v("ringkasan pembelian")]),t._v(" "),o("div",{staticClass:"total_promo"},[o("label",{attrs:{for:""}},[t._v("Total Belanja")])]),t._v(" "),o("div",{staticClass:"total_product"},[o("label",{attrs:{for:""}},[t._v("Total ( 1 Produk)")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.40")])]),t._v(" "),o("div",{staticClass:"total_product"},[o("label",{attrs:{for:""}},[t._v("Total Ongkos Kirim")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.40")])]),t._v(" "),o("div",{staticClass:"total_product"},[o("label",{attrs:{for:""}},[t._v("Asuransi Pengiriman")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.40")])]),t._v(" "),o("div",{staticClass:"total_promo"},[o("label",{attrs:{for:""}},[t._v("Potongan Promo")])]),t._v(" "),o("div",{staticClass:"total_product"},[o("label",{attrs:{for:""}},[t._v("Potongan Produk")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.40")])]),t._v(" "),o("div",{staticClass:"total_product"},[o("label",{attrs:{for:""}},[t._v("Potongan Ongkir")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.40")])]),t._v(" "),o("div",{staticClass:"total_product"},[o("label",{attrs:{for:""}},[t._v("Biaya Pelayanan")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.40")])]),t._v(" "),o("div",{staticClass:"total_price"},[o("label",{attrs:{for:""}},[t._v("Total Harga")]),t._v(" "),o("div",{staticClass:"count"},[t._v("Rp.2")])])])])}],n={name:"PageCheckout",data:function(){return{sendDropshipper:!1,locationDropshipper:!1,saveLocationDropshipper:!1,formData:{locationDropshipper:""}}},methods:{onChangeDropshipper:function(t){this.sendDropshipper=t},editedLocationDropshipper:function(){this.locationDropshipper=!0,this.saveLocationDropshipper=!0},savedLocationDropshipper:function(){this.saveLocationDropshipper=!1,this.locationDropshipper=!1}}},l=r(14),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"checkout"},[o("navbar"),t._v(" "),o("div",{staticClass:"checkout_content"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"address"},[t._m(1),t._v(" "),o("div",{staticClass:"section_dropshipper"},[o("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1"},on:{change:t.onChangeDropshipper},model:{value:t.sendDropshipper,callback:function(o){t.sendDropshipper=o},expression:"sendDropshipper"}},[t._v("\n              Kirim Sebagai Dropshipper\n            ")])],1)])]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"address_primary"},[o("div",{staticClass:"address_primary_badge"},[t._v("utama")]),t._v(" "),t._m(2),t._v(" "),o("div",{staticClass:"address_primary_location"},[t._v("\n            Jl. Arief Rahman Hakim, Ruko No 6, Perumahan Citra Puri Keniten 1,\n            Kab. Ponorogo, Kec. Babadan, Jawa Timur, 63491.\n          ")]),t._v(" "),o("div",{staticClass:"btn_edit"},[o("b-button",{staticClass:"btn_edit"},[o("i",{staticClass:"far fa-edit"})])],1)])])]),t._v(" "),t.sendDropshipper?o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"address_dropshipper"},[o("div",{staticClass:"address_dropshipper_title"},[t._v("alamat penerima")]),t._v(" "),o("div",{staticClass:"address_dropshipper_content"},[t._m(3),t._v(" "),t.locationDropshipper?t._e():o("div",{staticClass:"address_dropshipper_content_location"},[t._v("\n              "+t._s(t.formData.locationDropshipper)+"\n            ")]),t._v(" "),t.saveLocationDropshipper?o("div",{staticClass:"address_dropshipper_content_edit_location"},[o("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.formData.locationDropshipper,callback:function(o){t.$set(t.formData,"locationDropshipper",o)},expression:"formData.locationDropshipper"}})],1):t._e(),t._v(" "),o("div",[t.saveLocationDropshipper?o("b-button",{staticClass:"pnom-btn-white",on:{click:function(o){return t.savedLocationDropshipper()}}},[o("i",{staticClass:"far fa-save"})]):o("b-button",{staticClass:"pnom-btn-white",on:{click:function(o){return t.editedLocationDropshipper()}}},[o("i",{staticClass:"far fa-edit"})])],1)])])])]):t._e(),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"order"},[o("div",{staticClass:"order_content"},[o("label",{attrs:{for:""}},[t._v("Pesanan 1")]),t._v(" "),o("div",{staticClass:"order_data_content"},[o("b-img-lazy",{staticClass:"images-cart",attrs:{src:"https://picsum.photos/1024/400/?image=41",alt:"Responsive image"}}),t._v(" "),o("div",{staticClass:"information_order"},[o("div",{staticClass:"information_order_title"},[t._v("\n                  Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe\n                  2020 2021 2022 2023 Stiker Motor Keren Variasi\n                ")]),t._v(" "),o("div",{staticClass:"information_order_variant"},[t._v("\n                  Variasi : P001, TIPIS\n                ")]),t._v(" "),o("div",{staticClass:"information_order_price"},[t._v("Rp40.500")]),t._v(" "),o("div",{staticClass:"information_order_reserve"},[o("div",{staticClass:"nominal_reserve"},[t._v("1 Pcs")]),t._v(" "),o("div",{staticClass:"btn_edit"},[o("b-button",{staticClass:"btn_edit"},[o("i",{staticClass:"far fa-edit"})])],1)])])],1)])])])]),t._v(" "),o("div",{staticClass:"row mt-5"},[t._m(4),t._v(" "),o("div",{staticClass:"col-md-2"}),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"method_payment"},[o("div",{staticClass:"method_payment_label"},[t._v("metode pembayaran")]),t._v(" "),o("div",{staticClass:"row mt-4"},[o("div",{staticClass:"col-md-6"},[o("router-link",{attrs:{to:"#"}},[o("b-button",{staticClass:"pnom-btn-red w-100"},[t._v(" c.o.d ")])],1)],1),t._v(" "),o("div",{staticClass:"col-md-6"},[o("router-link",{attrs:{to:"#"}},[o("b-button",{staticClass:"pnom-btn-red w-100"},[t._v(" qris ")])],1)],1),t._v(" "),o("div",{staticClass:"col-md-12 mt-5"},[o("router-link",{attrs:{to:"#"}},[o("b-button",{staticClass:"pnom-btn-red w-100"},[t._v("\n                  proses pesanan\n                ")])],1)],1)])])])])]),t._v(" "),o("footer-ecommerce")],1)}),e,!1,null,null,null);o.default=component.exports;installComponents(component,{Navbar:r(179).default})}}]);