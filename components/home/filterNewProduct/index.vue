<template>
  <div class="pnom-filter-new-product">
    <div class="pnom-filter-new-product_title">
      <div class="data-title">
        <div class="devider"></div>
        <label for="">produk terbaru</label>
      </div>
      <div class="another-link">
        <a href="#"> lihat lainnya </a>
      </div>
    </div>

    <div class="pnom-filter-new-product_content">
      <b-row>
        <b-col
          md="3"
          v-for="(itemProduct, indexProduct) in dataNewProduct.slice(0, 4)"
          :key="indexProduct + itemProduct.uuid"
        >
          <NuxtLink :to="`/p/${itemProduct.slug}`" class="section_content">
            <img
              class="images-new-product"
              :src="itemProduct.imageCover"
              alt="category-1"
            />
            <div class="section_content_title">
              {{ $substring(itemProduct.name, 80) }}
            </div>
            <div class="section_content_rupiah">{{ itemProduct.price }}</div>
            <div class="section_content_rating">
              <div class="star-rating">
                <span
                  v-for="star in [itemProduct?.stars.toString()]"
                  :key="star"
                  class="star"
                >
                  ★
                </span>
              </div>
              <div class="total">{{ itemProduct.sold }} Terjual</div>
            </div>
          </NuxtLink>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { crudMethods } from "~/store/helpers";

export default {
  name: "FilterNewProduct",
  data() {
    return {
      dataNewProduct: [],
    };
  },
  mounted() {
    this.getListNewProduct();
  },
  methods: {
    ...crudMethods,
    async getListNewProduct() {
      try {
        let response = await this.getData({
          url: `/v1.0/product/latest`,
        });
        this.dataNewProduct = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
  },
};
</script>
