<template>
  <div class="main">
    <h1>Ain UI</h1>
    <p>Vue PC 端组件库封装示例</p>
    <a href="https://github.com/one-pupil/vue-components" target="_blank">
      Github
    </a>
  </div>
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  p {
    padding: 15px 0;
    font-size: 13px;
    color: #333;
  }
  a {
    font-size: 12px;
    color: #999;
  }
}
</style>
