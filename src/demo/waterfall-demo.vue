<template>
  <div class="waterfall">
    <waterfall-list :list="imageList">
      <template v-slot:default="{ item }">
        <img :src="item" />
      </template>
    </waterfall-list>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      imageList: [
        'https://i.pinimg.com/236x/f4/dc/58/f4dc58f3bddf1c5b5249511820246df8.jpg',
        'https://i.pinimg.com/236x/50/9e/3a/509e3ac9af5c305e83eddc25b748214b.jpg',
        'https://i.pinimg.com/236x/a8/08/b6/a808b697d728434d944a5d99abdbcb13.jpg',
        'https://i.pinimg.com/564x/be/7c/18/be7c18ae62b7837e94fb819dfdf38fa2.jpg',
        'https://i.pinimg.com/564x/f4/dc/58/f4dc58f3bddf1c5b5249511820246df8.jpg',
        'https://i.pinimg.com/236x/61/be/0f/61be0fd258626af4deab36336b9abd94.jpg',
        'https://i.pinimg.com/236x/47/f4/3e/47f43e7f2b1bd7e6596e47cc781c7799.jpg',
        'https://i.pinimg.com/564x/6a/ea/1c/6aea1c0bc96840a03644ed7b460fac9e.jpg',
        'https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg',
        'https://i.pinimg.com/236x/01/84/ca/0184cafdc51049a7d1cc9df88e87db18.jpg',
        'https://i.pinimg.com/236x/82/78/85/8278857ebd0192658d565a968a7df1cc.jpg',
        'https://i.pinimg.com/564x/c6/40/4d/c6404d3c1ed97ca0360e0cb634fef9ac.jpg',
        'https://i.pinimg.com/564x/22/ab/69/22ab69682a7e4b2915e747b711bcc4fc.jpg',
        'https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg',
        'https://i.pinimg.com/236x/51/97/90/5197905f29a3bf796150506e12cb234c.jpg',
        'https://i.pinimg.com/236x/9e/42/22/9e422240981aebcbe435c05c26f4bec3.jpg'
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.waterfall {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>
