<template>
  <div class="category">
    <navbar />
    <div class="category_detail">
      <div class="category_detail_breadcrumbs">
        <NuxtLink to="/">Home</NuxtLink> > <a href="/c">Category</a>
      </div>
      <div class="category_detail_content">
        <label for="" class="title_product">Kategori</label>
        <div class="product">
          <skeleton-list
            v-if="loading"
            :loading="loading"
            :looping="6"
            :md="2"
            width="100%"
            height="220px"
          />
          <div class="row p-3" v-if="dataCategory">
            <nuxt-link
              class="product_box col-md-2_custom pl-2 pr-2"
              v-for="(itemCategoryData, indexProduct) in dataCategory"
              :key="indexProduct"
              :to="`/c/${itemCategoryData.slug}`"
            >
              <div class="images_product">
                <b-img-lazy
                  :src="itemCategoryData.image"
                  :alt="itemCategoryData.name"
                />
              </div>
              <div class="labels_product">
                {{ $substring_40(itemCategoryData.name, 36) }}
              </div>
            </nuxt-link>
          </div>
          <div
            class="d-flex align-items-center justify-content-center"
            v-if="!loading && dataCategory.length <= 0"
          >
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
      loading: true,
    };
  },
  mounted() {
    this.getCategoryData();
  },
  methods: {
    ...crudMethods,
    async getCategoryData() {
      try {
        this.loading = true;
        let params = {
          pageSize: 20,
          pageNum: 1,
        };
        let response = await this.getData({
          url: `/v1.0/category?pageNum=${params.pageNum}&pageSize=${params.pageSize}`,
        });
        this.dataCategory = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
