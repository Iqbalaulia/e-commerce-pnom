<template>
  <div class="pnom-review-customer">
    <div class="pnom-review-customer_header">
        <div class="header_title">
          <label for="">ulasan pembeli</label>
          <p class="showing">menampilkan 10 dari 200 ulasan</p>
        </div>
        <div class="header_filter">
          <label for="">urutkan</label>
          <b-form-select class="custom-select-review">
            <b-form-select-option :value="null">Please select an option</b-form-select-option>
            <b-form-select-option value="a">Option A</b-form-select-option>
            <b-form-select-option value="b" disabled>Option B (disabled)</b-form-select-option>
          </b-form-select>
        </div>
    </div>
    <div class="pnom-review-customer_content" v-for="(item, index) in mockDataReviewersProduct" :key="index">
      <div class="avatar">
        <b-avatar class="avatar-customer" :src="item.imagesProfile"></b-avatar>
      </div>
      <div class="review_customer">
        <div class="name_rating">
          <label for="">{{item.name}}</label>
          <div class="rating">
            <div class="star-rating">
              <b-form-rating :value="item.ratings" color="yellow" class="mb-2"></b-form-rating>
            </div>
          </div>
        </div>
        <div class="reviewer">
          <p>
            {{ item.comments }}
          </p>
        </div>
        <div class="reviewer_images">
          <b-img-lazy  v-for="(itemImages, indexImages) in item.imagesReviews" :key="indexImages" :src="itemImages" fluid alt="Responsive image"></b-img-lazy>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockDataReviewersProduct } from '~/store/mock/mockData';

export default {
  name:'ReviewCustomer',
  data() {
    return {
      mockDataReviewersProduct: mockDataReviewersProduct
    }
  },
}
</script>
