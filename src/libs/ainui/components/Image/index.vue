<template>
  <div ref="container" class="ani-image">
    <slot v-if="loading" name="loading">
      <div class="ani-loading">
        <img src="./loading.svg" alt="loading" />
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
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import {
  isInViewport,
  getScrollContainer,
  onListener,
  removeListener,
  throttle
} from '../../utils/tools';

export default {
  name: 'Image',
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
    const container = ref(null);

    let _scrollContainer = null;
    let _lazyloadImage = null;

    const loadImage = () => {
      loading.value = true;
      const img = new Image();
      img.onload = () => onLoad();
      img.src = props.src;
    };

    function onLoad() {
      loading.value = false;
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
        _lazyloadImage = throttle(onLazyLoad, 200);
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #ececec;
    img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
