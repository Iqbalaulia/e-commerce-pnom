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
          v-for="(
            itemRecommendation, indexRecommendation
          ) in dataProductRecomended.slice(0, slice)"
          :key="indexRecommendation + itemRecommendation.uuid"
        >
          <nuxt-link
            :to="`/p/${itemRecommendation.slug}`"
            class="section_content"
          >
            <img
              class="images-recomanded"
              :src="itemRecommendation.imageCover"
              alt="category-1"
            />
            <div class="section_content_title">
              {{ $substring(itemRecommendation.name, 60) }}
            </div>
            <div class="section_content_rupiah">
              {{ itemRecommendation.price }}
            </div>
            <div class="section_content_rating">
              <div class="star-rating">
                <span
                  v-for="star in [itemRecommendation?.stars.toString()]"
                  :key="star"
                  class="star"
                >
                  ★
                </span>
              </div>
              <div class="total">{{ itemRecommendation.sold }} Terjual</div>
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { crudMethods } from "~/store/helpers";

export default {
  name: "FilterRecomanded",
  props: {
    limit: Number,
    slice: Number,
  },
  data() {
    return {
      dataProductRecomended: [],
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
          url: `/v1.0/product/recommendation?pageSize=${this.limit}`,
        });
        this.dataProductRecomended = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
