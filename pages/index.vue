<template>
  <div class="home">
    <navbar />
    <div class="home_banner">
      <VueSlickCarousel v-bind="settings">
        <div>
          <img
            class="images-banner"
            src="~/assets/images/banner/banner-1.png"
            alt="banner-1"
          />
        </div>
        <div>
          <img
            class="images-banner"
            src="~/assets/images/banner/banner.png"
            alt="banner-1"
          />
        </div>
      </VueSlickCarousel>
    </div>
    <filter-category />
    <filter-popular />
    <div class="home_banner">
      <img
        class="images-banner"
        src="~/assets/images/banner/banner.png"
        alt="banner-1"
      />
    </div>
    <filter-new-product />
    <filter-recomanded />
    <div class="home_banner">
      <img
        class="images-banner"
        src="~/assets/images/banner/banner.png"
        alt="banner-1"
      />
    </div>
    <filter-article />
    <footer-ecommerce />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { carouselBanner } from "~/plugins/carousel";

export default {
  name: "IndexPage",
  data() {
    return {
      settings: carouselBanner,
    };
  },
  components: { VueSlickCarousel },
  methods: {},
};
</script>
