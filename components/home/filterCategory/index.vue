<template>
  <div class="pnom-filter-category">
    <div class="pnom-filter-category_title">
      <div class="devider"></div>
      <label for="">cari berdasarkan kategori</label>
    </div>

    <div class="pnom-filter-category_content">
      <skeleton-list
        v-if="loading"
        :loading="loading"
        :looping="6"
        :md="2"
        width="240px"
        height="230px"
      />
      <b-row v-else>
        <b-col
          v-for="(itemCategory, indexCategory) in dataCategory"
          :key="indexCategory + itemCategory.uuid"
          class="mb-4"
          sm="2"
        >
          <NuxtLink :to="`/c/${itemCategory?.slug}`" class="section_content">
            <img
              class="images-filter"
              :src="itemCategory.imageThumb"
              :alt="`category-${itemCategory.slug}`"
            />
            <div class="title">
              <label :for="itemCategory.name"> {{ itemCategory.name }} </label>
            </div>
          </NuxtLink>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mockDataFilterCategory } from "~/store/mock/mockData";
import { crudMethods } from "~/store/helpers";

export default {
  name: "FilterCategory",
  data() {
    return {
      mockDataFilterCategory: mockDataFilterCategory,
      dataCategory: [],
      loading: true,
    };
  },
  mounted() {
    this.getListCategory();
  },
  methods: {
    ...crudMethods,
    async getListCategory() {
      try {
        this.loading = true;
        let response = await this.getData({
          url: `/v1.0/category`,
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
