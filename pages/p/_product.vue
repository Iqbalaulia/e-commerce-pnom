<template>
  <div class="detail_product">
    <navbar />
    <div class="detail_product_content">
      <div class="row">
        <div class="col-md-5">
          <div class="detail_product_content_thumbnail">
            <img class="thumbnail" :src="imagesProduct" alt="thumbnail" />
          </div>
          <VueSlickCarousel v-bind="settings" class="mt-3 carousel-product">
            <div
              v-for="(itemImages, indexImages) in mockDataCarouselProductDetail"
              :key="indexImages"
              @click="
                changeProductImage(itemImages.imagesClicked)
              "
            >
              <img
                class="w-100"
                :src="itemImages.imagesUrl"
                alt="thumbnail"
              />
            </div>
          </VueSlickCarousel>
        </div>
        <div class="col-md-7">
          <div class="detail_product_content_detail">
            <label for="" class="title_content">
              Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe 2020
              2021 2022 2023 Stiker Motor Keren Variasi
            </label>
            <div class="detail_content">
              <div class="detail_content_star">
                <div class="star-rating">
                  <span
                    v-for="star in [1, 2, 3, 4, 5]"
                    :key="star"
                    class="star"
                  >
                    ★
                  </span>
                </div>
                <div class="total">378 Penilaian</div>
              </div>
              <div class="detail_content_price">
                <div class="current_price">Rp 40.500</div>
                <div class="discount_price">
                  <div class="cross_price">Rp 73.000</div>
                  <div class="nominal_discount">40% OFF</div>
                </div>
              </div>
              <div class="detail_content_motif">
                <label for="" class="title">Motif</label>
                <div>
                  <b-form-group>
                    <div class="row motif_content">
                      <div
                        class="col-md-2 motif-wrapper"
                        v-for="(item, index) in mockDataNotif"
                        :key="index"
                      >
                        <b-form-radio
                          class="pnom-radio-custom"
                          name="some-radios"
                          :value="item.value"
                          v-model="selectedMotif"
                          >{{ item.name }}
                        </b-form-radio>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
              <div class="detail_content_component">
                <label for="" class="title">bahan</label>
                <div>
                  <b-form-group>
                    <div class="row bahan_content">
                      <div
                        class="col-md-2 motif-wrapper"
                        v-for="(item, indexBahan) in mockDataBahan"
                        :key="indexBahan"
                      >
                        <b-form-radio
                          class="pnom-radio-custom"
                          name="bahan"
                          :value="item.value"
                          v-model="selectedBahan"
                          >{{ item.name }}
                        </b-form-radio>
                      </div>
                    </div>
                  </b-form-group>
                </div>
              </div>
              <div class="detail_content_quantity">
                <label for="" class="title">kuantitas</label>
                <div class="btn_quantity">
                  <b-button class="btn_count-min">-</b-button>
                  <b-form-input class="input_quantity" />
                  <b-button class="btn_count-plus">+</b-button>
                </div>
              </div>
              <div class="detail_content_cart">
                <b-button
                  variant="outline-primary"
                  class="w-25 pnom-btn-primary"
                >
                  <i class="fas fa-cart-plus"></i>
                  Keranjang
                </b-button>
                <b-button class="ml-3 w-25 pnom-btn-primary" variant="primary"
                  >Beli Langsung</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="description_product">
            <label for="">Deskripsi Produk</label>
            <p class="description_product_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              ex dignissimos rerum sunt reiciendis numquam facere necessitatibus
              veniam accusantium beatae iure, totam eveniet nisi molestias
              similique blanditiis sapiente adipisci. Ipsa!
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="detail_product_content_rating">
            <label for="">rating produk</label>
            <div class="detail_content_star">
              <div class="star-rating">
                <span v-for="star in [1, 2, 3, 4, 5]" :key="star" class="star">
                  ★
                </span>
              </div>
              <div class="total">4.0/5.0</div>
            </div>
            <div
              class="detail_content_star_list"
              v-for="(itemRating, indexRating) in mockDataRatingProductDetail"
              :key="indexRating"
            >
              <div class="star-rating">
                <b-form-rating
                  v-model="itemRating.rating"
                  color="yellow"
                  class="mb-2"
                ></b-form-rating>
              </div>
              <b-progress
                :value="itemRating.progress.value"
                max="500"
                variant="warning"
              ></b-progress>
              <div class="total">
                {{ itemRating.total }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <customer-review-component />
        </div>
      </div>
      <filter-relate class="p-0 mt-5" />
      <filter-recomanded class="p-0 mt-5" />
    </div>
    <footer-ecommerce />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

import {
  mockDataMotif,
  mockDataBahan,
  mockDataRatingProductDetail,
  mockDataCarouselProductDetail,
} from "~/store/mock/mockData";

import { carouselProduct } from "~/plugins/carousel";

export default {
  name: "DetailProduct",
  data() {
    return {
      imagesProduct: "/_nuxt/assets/images/new-product/new-product-2.png",
      mockDataNotif: mockDataMotif,
      mockDataBahan: mockDataBahan,
      mockDataCarouselProductDetail: mockDataCarouselProductDetail,
      mockDataRatingProductDetail: mockDataRatingProductDetail,
      settings: carouselProduct,
      selectedMotif: null,
      selectedBahan: null,
    };
  },
  components: { VueSlickCarousel },
  methods: {
    changeProductImage(item) {
      this.imagesProduct = item;
    },
  },
};
</script>
