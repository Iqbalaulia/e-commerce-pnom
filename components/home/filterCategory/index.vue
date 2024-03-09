<template>
  <div class="pnom-filter-category">
    <div
      class="pnom-filter-category_title"
      data-aos="fade-in"
      data-aos-duration="200"
      data-aos-easing="ease-in-out"
    >
      <div class="devider"></div>
      <label for="">cari berdasarkan kategori</label>
    </div>

    <div class="pnom-filter-category_content">
      <b-row>
        <b-col
          v-for="(itemCategory, indexCategory) in dataCategory"
          :key="indexCategory + itemCategory.uuid"
          :data-aos-duration="indexCategory + 200"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          class="mb-4"
          sm="2"
        >
          <a href="#" class="section_content">
            <img
              class="images-filter"
              :src="itemCategory.imageThumb"
              :alt="`category-${itemCategory.slug}`"
            />
            <div class="title">
              <label :for="itemCategory.name"> {{ itemCategory.name }} </label>
            </div>
          </a>
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
    };
  },
  mounted() {
    this.getListCategory();
  },
  methods: {
    ...crudMethods,
    async getListCategory() {
      try {
        let response = await this.getData({
          url: `/v1.0/homepage/product/category`,
        });
        this.dataCategory = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
  },
};
</script>
