<template>
  <div>
    <p class="mb-20">
      <ani-checkbox v-model="checked" @change="onChange">选项</ani-checkbox>
    </p>
    <p class="mb-20">
      <ani-checkbox-group v-model="checkList">
        <ani-checkbox :label="1">选项一</ani-checkbox>
        <ani-checkbox :label="2">选项二</ani-checkbox>
        <ani-checkbox :label="3">选项三</ani-checkbox>
      </ani-checkbox-group>
    </p>
    <p class="mb-20">
      <ani-checkbox-group v-model="checkList" is-button>
        <ani-checkbox :label="1">选项一</ani-checkbox>
        <ani-checkbox :label="2">选项二</ani-checkbox>
        <ani-checkbox :label="3">选项三</ani-checkbox>
      </ani-checkbox-group>
    </p>
    <p>
      <span>checkList: {{ checkList }}</span>
    </p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const checked = ref(true);
    const checkList = ref([1]);
    watch(checked, val => {
      console.log(`基础用法：${val}`);
    });
    watch(checkList, list => {
      console.log(`checkbox group：${list}`);
    });
    const onChange = e => {
      console.log(`change 事件：${e}`);
    };
    return {
      checked,
      onChange,
      checkList
    };
  }
};
</script>

<style lang="less" scoped></style>
