(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{405:function(n,e,t){"use strict";t.r(e);var r=[function(){var n=this,e=n._self._c;return e("div",{staticClass:"images_profile"},[e("img",{attrs:{src:t(179),alt:"category-1"}}),n._v(" "),e("div",[e("div",{staticClass:"images_profile_name"},[n._v("iqbalaulia")]),n._v(" "),e("div",{staticClass:"images_profile_username"},[n._v("auliaaulia")])])])}],c={name:"UserAccount",data:function(){return{menu:"akun-saya"}},mounted:function(){this.onChangeMenu("akun-saya")},methods:{onChangeMenu:function(n){this.menu=n,this.$router.push({path:this.$route.path,query:{menu:n}})}}},o=t(15),component=Object(o.a)(c,(function(){var n=this,e=n._self._c;return e("div",{staticClass:"user"},[e("navbar"),n._v(" "),e("div",{staticClass:"user_content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 user_content_sidebar"},[n._m(0),n._v(" "),e("div",{staticClass:"sidebar_menu"},[e("ul",[e("li",{staticClass:"title_menu"},[n._v("Profil Akun")]),n._v(" "),e("li",{staticClass:"sub_menu",class:"akun-saya"===n.$route.query.menu?"sub_menu_active":"",on:{click:function(e){return n.onChangeMenu("akun-saya")}}},[e("i",{staticClass:"fa-regular fa-circle-user"}),n._v("\n              Akun Saya\n            ")]),n._v(" "),e("li",{staticClass:"sub_menu",class:"alamat"===n.$route.query.menu?"sub_menu_active":"",on:{click:function(e){return n.onChangeMenu("alamat")}}},[e("i",{staticClass:"fa-regular fa-address-card"}),n._v(" Alamat\n            ")]),n._v(" "),e("li",{staticClass:"sub_menu",class:"dropshipper"===n.$route.query.menu?"sub_menu_active":"",on:{click:function(e){return n.onChangeMenu("dropshipper")}}},[e("i",{staticClass:"fa-solid fa-truck-fast"}),n._v("\n              Dropshipper\n            ")]),n._v(" "),e("li",{staticClass:"sub_menu",class:"pengaturan-notifikasi"===n.$route.query.menu?"sub_menu_active":"",on:{click:function(e){return n.onChangeMenu("pengaturan-notifikasi")}}},[e("i",{staticClass:"fa-solid fa-gears"}),n._v("\n              Pengaturan Notifikasi\n            ")]),n._v(" "),e("li",{staticClass:"title_menu",class:"pesanan-saya"===n.$route.query.menu?"title_menu_active":"",on:{click:function(e){return n.onChangeMenu("pesanan-saya")}}},[n._v("\n              Pesanan saya\n            ")]),n._v(" "),e("li",{staticClass:"title_menu",class:"wishlist"===n.$route.query.menu?"title_menu_active":"",on:{click:function(e){return n.onChangeMenu("wishlist")}}},[n._v("\n              Wishlist\n            ")])])])]),n._v(" "),e("div",{staticClass:"col-md-9"},["akun-saya"===n.menu?e("my-account-component"):n._e(),n._v(" "),"alamat"===n.menu?e("my-address-component"):n._e(),n._v(" "),"pengaturan-notifikasi"===n.menu?e("my-notification-component"):n._e(),n._v(" "),"dropshipper"===n.menu?e("my-dropshipper-component"):n._e(),n._v(" "),"pesanan-saya"===n.menu?e("my-order-component"):n._e()],1)])]),n._v(" "),e("footer-ecommerce")],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:t(178).default})}}]);