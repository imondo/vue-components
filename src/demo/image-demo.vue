<template>
  <div class="image-wrap">
    <div class="image-list mb-20">
      <div>
        <ani-image
          src="https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg"
          alt="logo"
          style="width: 100px; height: 100px"
        ></ani-image>
        <p>fill</p>
      </div>
      <div>
        <ani-image
          src="https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg"
          alt="logo"
          fit="contain"
          style="width: 100px; height: 100px"
        ></ani-image>
        <p>contain</p>
      </div>
      <div>
        <ani-image
          src="https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg"
          alt="logo"
          fit="cover"
          style="width: 100px; height: 100px"
        ></ani-image>
        <p>cover</p>
      </div>
    </div>
    <div class="mb-20">
      <h3>错误显示</h3>
      <ani-image
        src="https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jp"
        alt="logo"
        style="width: 100px; height: 100px"
      ></ani-image>
    </div>
    <div class="mb-20">
      <h3>图片懒加载</h3>
      <div class="image-lazy">
        <ani-image
          v-for="img in images"
          :key="img"
          :src="img"
          alt="logo"
          lazy
          style="width: 100px; height: 100px"
        ></ani-image>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const images = ref([
      'https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg',
      'https://tenfei01.cfp.cn/creative/vcg/veer/800water/veer-154228735.jpg',
      'https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg',
      'https://tenfei01.cfp.cn/creative/vcg/veer/800water/veer-154228735.jpg',
      'https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg',
      'https://tenfei01.cfp.cn/creative/vcg/veer/800water/veer-154228735.jpg',
      'https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg',
      'https://tenfei01.cfp.cn/creative/vcg/veer/800water/veer-154228735.jpg',
      'https://goss1.cfp.cn/creative/vcg/veer/800/new/VCG41N656530362.jpg',
      'https://tenfei01.cfp.cn/creative/vcg/veer/800water/veer-154228735.jpg'
    ]);
    return {
      images
    };
  }
};
</script>

<style lang="less" scoped>
.image-list {
  display: flex;
  font-style: 14px;
  color: #333;
  text-align: center;
  .ani-image {
    border: 1px solid #333;
    margin-right: 10px;
  }
}
.image-lazy {
  height: 500px;
  overflow: auto;
}
</style>
