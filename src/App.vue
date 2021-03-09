<template>
  <div class="wrapper">
    <header>
      <router-link
        class="nav-item"
        active-class="active"
        v-for="item of menu"
        :key="item.path"
        :to="item.path"
      >
        {{ item.title }}
      </router-link>
    </header>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import { menu } from './config';

export default {
  name: 'App',
  data() {
    return {
      menu
    };
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
header {
  height: 60px;
  line-height: 60px;
  text-align: right;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 5px #eee;
  .nav-item {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    padding: 0 15px;
  }
  .active {
    color: #3498db;
    font-weight: bold;
  }
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
