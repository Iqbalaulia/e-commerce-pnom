<template>
  <div class="category">
    <navbar />
    <div class="category_detail">
      <div class="category_detail_breadcrumbs">
        <NuxtLink to="/">Home</NuxtLink> > <a href="">Category</a> >
        <a href="#" class="breadcrumbs_active">{{ $route.params.category }}</a>
      </div>
      <div class="category_detail_content">
        <label for="" class="title_product">{{ $route.params.category }}</label>
        <div class="product">
          <div class="row p-3" v-if="dataCategory && dataCategory.length > 0">
            <div
              class="product_box col-md-2_custom pl-2 pr-2"
              v-for="(itemProduct, indexProduct) in dataCategory"
              :key="indexProduct"
            >
              <div class="images_product">
                <img :src="itemProduct.imageCover" :alt="itemProduct.name" />
              </div>
              <div class="labels_product">
                {{ $substring_40(itemProduct.name, 36) }}
              </div>
              <div class="rupiah_product">
                {{ itemProduct.price }}
              </div>
              <div class="rating_product">
                <div class="star-rating">
                  <span
                    v-for="star in [itemProduct.stars]"
                    :key="star"
                    class="star"
                  >
                    ★
                  </span>
                </div>
                <div class="total">{{ itemProduct.sold }} Terjual</div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center" v-else>
            <empty-state-list />
          </div>
        </div>
      </div>
      <div class="mt-5">
        <filter-recomanded :limit="8" />
      </div>
      <div class="mt-5">
        <filter-new-product :limit="8" />
      </div>
    </div>
    <footer-ecommerce />
  </div>
</template>

<script>
import { crudMethods } from "~/store/helpers";
import EmptyStateList from "../../components/emptyState/EmptyStateList.vue";

export default {
  components: { EmptyStateList },
  name: "Category",
  data() {
    return {
      dataCategory: [],
    };
  },
  mounted() {
    this.getCategoryData();
  },
  methods: {
    ...crudMethods,
    async getCategoryData() {
      try {
        let params = {
          pageSize: 20,
          pageNum: 1,
        };
        let response = await this.getData({
          url: `/v1.0/category/${this.$route.params.category}/product?pageNum=${params.pageNum}&pageSize=${params.pageSize}`,
        });
        this.dataCategory = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
  },
};
</script>
