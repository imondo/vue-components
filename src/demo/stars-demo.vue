<template>
  <ani-stars
    :max-num="7"
    :num="2"
    :size="35"
    color="#f1c40f"
    @getStarNum="getStarNum"
  ></ani-stars>
</template>

<script>
export default {
  setup() {
    const getStarNum = num => {
      console.log(num);
    };

    return {
      getStarNum
    };
  }
};
</script>

<style lang="less" scoped></style>
