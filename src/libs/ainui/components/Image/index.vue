<template>
  <div class="ani-image">
    <img
      :src="src"
      :alt="alt"
      :style="{
        'object-fit': fit
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: String,
    alt: String,
    fit: {
      type: String,
      default: 'fill' // fill / contain / cover / none / scale-down
    }
  }
};
</script>

<style lang="less" scoped>
.ani-image {
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
