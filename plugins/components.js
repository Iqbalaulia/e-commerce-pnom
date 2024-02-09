import Vue from "vue";
import Tutorial from "~/components/layout/Tutorial.vue";
import Header from "~/components/header/index.vue";
import FooterLogin from "~/components/footer/FooterLogin.vue";
import Footer from "~/components/footer/Footer.vue";
import Navbar from "~/components/navbar/index.vue";
import FilterCategory from "~/components/home/filterCategory/index.vue";
import FilterPopular from "~/components/home/filterPopular/index.vue";
import FilterNewProduct from "~/components/home/filterNewProduct/index.vue";
import FilterRecomanded from "~/components/home/filterRecomanded/index.vue";
import FilterArticle from "~/components/home/filterArticle/index.vue";
import FilterRelate from "~/components/home/filterRelate/index.vue";

import MyAccountComponent from "~/components/user/myAccount/index.vue";
import MyAddressComponent from "~/components/user/address/index.vue";
import MyNotificationComponent from "~/components/user/notification/index.vue";

import CustomerReviewComponent from "~/components/reviewCustomer/index.vue";

Vue.component("Tutorial", Tutorial);
Vue.component("header-login", Header);
Vue.component("footer-login", FooterLogin);
Vue.component("footer-ecommerce", Footer);
Vue.component("navbar", Navbar);

Vue.component("filter-category", FilterCategory);
Vue.component("filter-popular", FilterPopular);
Vue.component("filter-new-product", FilterNewProduct);
Vue.component("filter-recomanded", FilterRecomanded);
Vue.component("filter-article", FilterArticle);
Vue.component("filter-relate", FilterRelate);

Vue.component("my-account-component", MyAccountComponent);
Vue.component("my-address-component", MyAddressComponent);
Vue.component("my-notification-component", MyNotificationComponent);

Vue.component("customer-review-component", CustomerReviewComponent);
