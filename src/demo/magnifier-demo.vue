<template>
  <div class="wrapper">
    <Magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :width="width"
      :height="height"
      :magWidht="magWidht"
      :manHeight="magHeight"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      imgUrl:
        'https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg',
      link: 'https://imondo.cn',
      blank: true,
      width: 426,
      height: 535,
      magWidht: 100,
      magHeight: 100,
      imgAlt: '城市'
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="less"></style>
