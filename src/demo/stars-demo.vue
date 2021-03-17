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
import { getCurrentInstance } from 'vue';
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const getStarNum = num => {
      proxy.$message(`你提交了：${num} 分！`);
    };

    return {
      getStarNum
    };
  }
};
</script>

<style lang="less" scoped></style>
