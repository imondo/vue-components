<template>
  <div ref="waterfallWrapper" class="waterfall-list">
    <div class="waterfall-item" v-for="(item, index) in list" :key="index">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
import { useWaterfall } from './useFall';

export default {
  name: 'WaterfallList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    return useWaterfall(props);
  }
};
</script>

<style lang="less" scoped>
.waterfall-list {
  width: 100%;
  position: relative;
  .waterfall-item {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 205px;
    position: absolute;
  }
}
</style>
