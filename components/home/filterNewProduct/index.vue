<template>
  <div class="pnom-filter-new-product">
    <div class="pnom-filter-new-product_title">
      <div class="data-title">
        <div class="devider"></div>
        <label for="">produk terbaru</label>
      </div>
      <div class="another-link" v-if="$route.name !== 'p'">
        <NuxtLink :to="`/p`"> lihat lainnya </NuxtLink>
      </div>
    </div>

    <div class="pnom-filter-new-product_content">
      <skeleton-list
        v-if="loading"
        :loading="loading"
        :looping="4"
        :md="3"
        width="100%"
        height="380px"
      />
      <b-row v-else>
        <b-col
          md="3"
          class="mb-5"
          v-for="(itemProduct, indexProduct) in dataNewProduct.slice(0, slice)"
          :key="indexProduct + itemProduct.uuid"
        >
          <NuxtLink :to="`/p/${itemProduct.slug}`" class="section_content">
            <b-img-lazy
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
  props: {
    limit: Number,
    slice: Number,
  },
  data() {
    return {
      dataNewProduct: [],
      loading: true,
    };
  },
  mounted() {
    this.getListNewProduct();
  },
  methods: {
    ...crudMethods,
    async getListNewProduct() {
      try {
        this.loading = true;

        let response = await this.getData({
          url: `/v1.0/product/latest?pageSize=${this.limit}`,
        });
        this.dataNewProduct = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
