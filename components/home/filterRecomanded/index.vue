<template>
  <div class="pnom-filter-recomanded">
    <div class="pnom-filter-recomanded_title">
      <div class="data-title">
        <div class="devider"></div>
        <label for="">rekomendasi</label>
      </div>
      <div class="another-link">
        <a href="#"> lihat lainnya </a>
      </div>
    </div>

    <div class="pnom-filter-recomanded_content">
      <b-row>
        <b-col
          md="3"
          v-for="(
            itemRecommendation, indexRecommendation
          ) in dataProductRecomended.slice(0, 4)"
          :key="indexRecommendation + itemRecommendation.uuid"
        >
          <a href="#" class="section_content">
            <img
              class="images-recomanded"
              :src="itemRecommendation.imageCover"
              alt="category-1"
            />
            <div class="section_content_title">
              {{ $substring(itemRecommendation.name, 80) }}
            </div>
            <div class="section_content_rupiah">
              {{ itemRecommendation.price }}
            </div>
            <div class="section_content_rating">
              <div class="star-rating">
                <span
                  v-for="star in [itemRecommendation.stars]"
                  :key="star"
                  class="star"
                >
                  ★
                </span>
              </div>
              <div class="total">1.2K Terjual</div>
            </div>
          </a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { crudMethods } from "~/store/helpers";

export default {
  name: "FilterRecomanded",
  data() {
    return {
      dataProductRecomended: [],
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
          url: `/v1.0/homepage/product/recommendation`,
        });
        this.dataProductRecomended = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
  },
};
</script>
