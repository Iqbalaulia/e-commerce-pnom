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
          sm="2"
          v-for="(itemCategory, indexCategory) in mockDataFilterCategory"
          :key="indexCategory"
          data-aos="fade-in"
          :data-aos-duration="indexCategory + 200"
          data-aos-easing="ease-in-out"
          class="mb-4"
        >
          <a href="#" class="section_content">
            <img
              class="images-filter"
              :src="itemCategory.imagesUrl"
              alt="category-1"
            />
            <div class="title">
              <label for=""> {{ itemCategory.title }} </label>
            </div>
          </a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mockDataFilterCategory } from "~/store/mock/mockData";

export default {
  name: "FilterCategory",
  data() {
    return {
      mockDataFilterCategory: mockDataFilterCategory,
    };
  },
};
</script>
