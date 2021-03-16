<template>
  <div ref="container" class="ani-image">
    <slot v-if="loading" name="loading">
      <div class="ani-loading">
        <img src="./loading.svg" alt="loading" />
      </div>
    </slot>
    <slot v-else-if="hasError" name="error">
      <div class="ani-loading" :class="{ 'err-img': hasError }" :alt="alt">
        <img src="./error.svg" alt="error" />
      </div>
    </slot>
    <img
      v-else
      :src="src"
      :alt="alt"
      :style="{
        'object-fit': fit
      }"
    />
  </div>
</template>

<script>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  getCurrentInstance
} from 'vue';
import {
  isInViewport,
  getScrollContainer,
  onListener,
  removeListener,
  debounce
} from '../../utils/tools';

export default {
  name: 'AniImage',
  props: {
    src: String,
    alt: String,
    fit: {
      type: String,
      default: 'fill' // fill / contain / cover / none / scale-down
    },
    lazy: Boolean
  },
  setup(props) {
    const loading = ref(true);
    const hasError = ref(false);
    const container = ref(null);

    let _scrollContainer = null;
    let _lazyloadImage = null;

    const { emit } = getCurrentInstance();

    const loadImage = () => {
      loading.value = true;
      const img = new Image();
      img.onload = () => onLoad();
      img.onerror = () => onErrorLoad();
      img.src = props.src;
    };

    function onLoad() {
      loading.value = false;
      hasError.value = false;
      emit('load');
    }

    function onErrorLoad() {
      loading.value = false;
      hasError.value = true;
      emit('error');
    }

    function onLazyLoad() {
      if (isInViewport(container.value, _scrollContainer)) {
        loadImage();
        removeLazyListener();
      }
    }

    function addLazyLoad() {
      _scrollContainer = getScrollContainer(container.value);
      if (_scrollContainer) {
        _lazyloadImage = debounce(onLazyLoad, 200);
        onListener(_scrollContainer, 'scroll', _lazyloadImage);
        setTimeout(() => onLazyLoad(), 100);
      }
    }

    function removeLazyListener() {
      removeListener(_scrollContainer, 'scroll', _lazyloadImage);
      _scrollContainer = null;
      _lazyloadImage = null;
    }

    watch(
      () => props.src,
      () => {
        loadImage();
      }
    );

    onMounted(() => {
      if (props.lazy) {
        nextTick(addLazyLoad);
      } else {
        loadImage();
      }
    });

    onBeforeUnmount(() => {
      props.lazy && removeLazyListener();
    });

    return {
      loading,
      hasError,
      container
    };
  }
};
</script>

<style lang="less" scoped>
.ani-image {
  img {
    width: 100%;
    height: 100%;
  }
  .ani-loading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #ececec;
    img {
      width: 25px;
      height: 25px;
    }
    &.err-img::after {
      content: attr(alt);
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      font-size: 12px;
      color: #333;
      text-align: center;
    }
  }
}
</style>
