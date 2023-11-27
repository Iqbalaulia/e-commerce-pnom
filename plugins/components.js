import Vue from 'vue';
import Tutorial from '~/components/layout/Tutorial.vue';
import Header from '~/components/header/index.vue';
import FooterLogin from '~/components/footer/FooterLogin.vue';
import Footer from '~/components/footer/Footer.vue';
import Navbar from '~/components/navbar/index.vue';

Vue.component('Tutorial', Tutorial);
Vue.component('header-login', Header);
Vue.component('footer-login', FooterLogin);
Vue.component('footer', Footer);
Vue.component('navbar', Navbar);