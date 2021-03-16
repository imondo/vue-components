import { onMounted, ref, onBeforeUnmount } from 'vue';
import {
  getStyle,
  isPropType,
  hasOwn,
  onListener,
  removeListener
} from '../../utils/tools';

export function useWaterfall(props) {
  const waterfallWrapper = ref(null);
  const gap = 10; // item 间隙
  onMounted(() => {
    waterfall();

    onListener(window, 'resize', waterfall);
  });

  onBeforeUnmount(() => {
    removeListener(window, 'resize', waterfall);
  });

  // 加载完图片
  const loadImage = item => {
    return new Promise(resolve => {
      const img = new Image();
      img.src =
        isPropType(item, 'object') && hasOwn(item, 'img') ? item.img : item;
      img.onload = img.onerror = () => {
        resolve();
      };
    });
  };

  function waterfall() {
    const fallItem = document.querySelectorAll('.waterfall-item');

    // 确认列数 = 容器 / item
    const pageWidth = getStyle(waterfallWrapper.value, 'width');
    const itemWidth = getStyle(fallItem[0], 'width');

    const columns = parseInt(pageWidth / (itemWidth + gap));
    let arr = []; // 定义数组，存储 item 高度

    props.list.forEach((item, i) => {
      loadImage(item).then(() => {
        if (i < columns) {
          fallItem[i].style.top = 0;
          fallItem[i].style.left = (itemWidth + gap) * i + 'px';
          arr.push(fallItem[i].offsetHeight);
        } else {
          let minHeight = arr[0];
          let index = 0;
          arr.forEach((num, i) => {
            if (minHeight > num) {
              minHeight = num;
              index = i;
            }
          });
          fallItem[i].style.top = arr[index] + gap + 'px';
          fallItem[i].style.left = fallItem[index].offsetLeft + 'px';
          arr[index] = arr[index] + fallItem[i].offsetHeight + gap;
        }
      });
    });
  }
  return {
    waterfallWrapper
  };
}
