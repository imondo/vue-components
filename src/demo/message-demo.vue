<template>
  <div>
    <div class="mb-20">
      <button @click="onClick">消息提示</button>
    </div>
    <div class="mb-20">
      <button @click="onCallClick">回调函数</button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    return {
      onClick: () => {
        proxy.$message('hello world');
      },
      onCallClick: () => {
        proxy.$message({
          msg: '这是回调',
          onClose: vm => {
            console.log(vm);
            proxy.$message('回调关闭');
          }
        });
      }
    };
  }
};
</script>

<style lang="less" scoped></style>
