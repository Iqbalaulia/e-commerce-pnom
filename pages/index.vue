<template>
  <div class="home">
    <navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="home_banner">
            <skeleton-banner class="mt-5" v-if="loading" :loading="loading" />
            <div v-else>
              <VueSlickCarousel v-bind="settings" v-if="dataBanner.length > 0">
                <div
                  v-for="(itemBanner, indexBanner) in dataBanner"
                  :key="indexBanner + itemBanner.uuid"
                >
                  <img
                    class="images-banner"
                    :src="itemBanner.image"
                    alt="banner-1"
                  />
                </div>
              </VueSlickCarousel>
            </div>
          </div>
          <filter-category />
          <div class="home_popular">
            <filter-popular />
          </div>
          <div class="home_banner">
            <img
              class="images-banner"
              src="~/assets/images/banner/banner.png"
              alt="banner-1"
            />
          </div>
          <div class="home_new_product">
            <filter-new-product :limit="4" :slice="4" />
          </div>
          <div class="home_rekomendasi">
            <filter-recomanded :limit="4" :slice="4" />
          </div>
          <div class="home_banner">
            <img
              class="images-banner"
              src="~/assets/images/banner/banner.png"
              alt="banner-1"
            />
          </div>
          <filter-article />
        </div>
      </div>
    </div>
    <footer-ecommerce />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

import { carouselBanner } from "~/plugins/carousel";

import { crudMethods } from "~/store/helpers";

export default {
  name: "IndexPage",
  data() {
    return {
      settings: carouselBanner,
      dataBanner: [],
      loading: true,
    };
  },
  components: { VueSlickCarousel },
  created() {},
  mounted() {
    this.getListBanner();
  },
  methods: {
    ...crudMethods,
    async getListBanner() {
      try {
        this.loading = true;
        let response = await this.getData({
          url: `/v1.0/banner`,
        });
        this.dataBanner = response?.data?.data;
        this.loading = false;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
  },
};
</script>
