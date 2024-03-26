<template>
  <div>
    <b-row>
      <b-col v-for="(item, index) in looping" :key="index" :md="md">
        <b-skeleton-img
          class="p-0"
          :loading="loading"
          :height="height"
          :width="width"
          animation="wave"
        ></b-skeleton-img>
        <b-skeleton
          class="mt-2"
          animation="wave"
          :loading="loading"
          :width="width"
        ></b-skeleton>
        <b-skeleton
          class="mt-2"
          animation="wave"
          :loading="loading"
          :width="width"
        ></b-skeleton>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SkeletonList",
  props: {
    loading: Boolean,
    width: String,
    height: String,
    looping: Number,
    md: Number,
  },
};
</script>
