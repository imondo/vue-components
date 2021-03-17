<template>
  <transition
    name="message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div v-show="visible" class="ani-message">
      <div class="ani-message-content">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';
export default {
  name: 'Message',
  props: {
    message: {
      type: [String],
      default: ''
    },
    duration: {
      type: Number,
      default: 3000
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  emits: ['destroy'],
  setup(props) {
    const visible = ref(false);
    let timer = null;
    function startTimer() {
      if (props.duration > 0) {
        timer = setTimeout(() => {
          if (visible.value) {
            close();
          }
        }, props.duration);
      }
    }

    function clearTimer() {
      clearTimeout(timer);
      timer = null;
    }

    function close() {
      visible.value = false;
    }

    onMounted(() => {
      startTimer();
      visible.value = true;
    });

    onBeforeUnmount(() => {
      clearTimer();
    });

    return {
      startTimer,
      clearTimer,
      close,
      visible
    };
  }
};
</script>

<style lang="less" scoped>
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.ani-message {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  top: 16px;
  left: 50%;
  z-index: 1010;
  width: 100%;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  pointer-events: none;
  transform: translateX(-50%);
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  .ani-message-content {
    display: inline-block;
    padding: 10px 16px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    pointer-events: all;
  }
}
</style>
