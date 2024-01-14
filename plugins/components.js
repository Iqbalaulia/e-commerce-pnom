import Vue from 'vue';
import Tutorial from '~/components/layout/Tutorial.vue';
import Header from '~/components/header/index.vue';
import FooterLogin from '~/components/footer/FooterLogin.vue';
import Footer from '~/components/footer/Footer.vue';
import Navbar from '~/components/navbar/index.vue';
import FilterCategory from '~/components/home/filterCategory/index.vue';
import FilterPopular from '~/components/home/filterPopular/index.vue';

Vue.component('Tutorial', Tutorial);
Vue.component('header-login', Header);
Vue.component('footer-login', FooterLogin);
Vue.component('footer-ecoomerce', Footer);
Vue.component('navbar', Navbar);

Vue.component('filter-category', FilterCategory)
Vue.component('filter-popular', FilterPopular)