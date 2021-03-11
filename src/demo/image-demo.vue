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
      'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
      'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg',
      'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg',
      'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg',
      'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg',
      'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg'
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
