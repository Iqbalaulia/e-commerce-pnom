<template>
  <div>
    <b-skeleton-img
      :loading="loading"
      class="p-0"
      height="500px"
      animation="wave"
    ></b-skeleton-img>
  </div>
</template>

<script>
export default {
  name: "SkeletonBanner",
  props: {
    loading: Boolean,
  },
};
</script>
