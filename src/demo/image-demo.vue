<template>
  <div class="image-wrap">
    <div class="image-list">
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
  </div>
</template>

<script>
export default {};
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
</style>
