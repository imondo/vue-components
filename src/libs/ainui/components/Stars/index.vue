<template>
  <div class="ani-stars">
    <span
      v-for="num in maxNum"
      :key="num"
      :class="[
        'iconfont icon-star',
        num <= starNum ? 'icon-star-on' : 'icon-star-off'
      ]"
      :style="{
        fontSize: size + 'px',
        color: num <= starNum ? color : '',
        '--on-color': color
      }"
      @click="setStarNum(num)"
    >
    </span>
  </div>
</template>

<script>
import { useStars } from '../../hooks';
export default {
  name: 'AniStars',
  props: {
    maxNum: {
      type: Number,
      default: 7
    },
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#3498db'
    }
  },
  setup(props, { emit }) {
    const [starNum, setStarNum] = useStars(props.num, () => {
      emit('getStarNum', starNum.value);
    });

    return {
      starNum,
      setStarNum
    };
  }
};
</script>

<style lang="less" scoped>
.ani-stars {
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_2424977_mgkzs8o3ls.eot?t=1615943555493'); /* IE9 */
    src: url('//at.alicdn.com/t/font_2424977_mgkzs8o3ls.eot?t=1615943555493#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPUAAsAAAAAB+QAAAOHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqDTIMMATYCJAMMCwgABCAFhG0HNRvRBlFULYJkPwrjNicUsZlzdmKr+igeKpAL/39b+EZQP/bbe+++aoMkGuk+XTRBI5EKCWIjFbKX8LffT1NAW2FyviyrCBUq/JD3gfNSmN7N6Sk1ITfhNrAuXxiFNB8GMJkJZCKd9gfHUj/F84DeJaM8EvAFHyi6VjjgDWSCPgfirctcT6BrXVPufL49QFUyugXixXMMqKbksiY1tIVmydgU70ra5bUsAW/+78e/fhAoGpXR9+J5ZsPwi/mmvSasEpxdBMZ4WnCTqDgAkngs1T8ohP4DBV2FX6yPbUqhjOVaUfDpKrdp/sOjCKLJSO6DHSpQ+GK26bGgHcyzZtxc5yYS78DegChm6vuNSl9ahGwB9TMDnZxw1Y4E1FpZNSgK9+7KwmWD2f3sYMe2MtjQX1EuBjRvcYMl7X1TItBAln0hi05hZVWbqGlTGydc1pbdwl6+Z4twQUkxS+MKh0JhFpNc8ZKQUX05s3ZBcXRpqwgEOfNlNbMBQH1zeQUzCBRX9JOzWWGwgP2atioOCC6qAsTsIMAB8oBBt1ayuaQDqlxKjD7Yl81s2cIS2flvnuxO02CkqKIQmGcqY5rHWkSMFRuy90w2/+9EWlgus5n50geLSZWjHMwlU23z+EK9Xl/Sdu8Vmg3+crj1Ej/FPhNxv5w/g560j54rzOFrIE/g6yHmqlmgdoiS2YLQ7HlxbWC4FfBcC70QuQgllKg/Q0NP2FJzi8gD/xqWie52PtCMuKVj/l7jz9VraRkKO2sblKZ/SwDFjZiaohUN/wUFjRGuCAgEgrJVO9GSfnC1jqPlf9/fcK8s8nCh1fp2bZMTfIa/P2FdraZ2iaCt0JrxsxgtS1JlGYqaMt2m68bqqae2ACov8IvSYeqvv3EBYm1o8wxA0bIGVdsGMrEH0NBzCE1tR9C1bzG5Z4YVRHaw54tAGPuGYugDqrEfZGJ/oWHpH5rGgYauu2jM2bMVfvUJkyFko/mBnpXEylJJPUjdkfMIDU6yfNyJWHsu7MnIZUMLionHGKCfTl9EoeIkwjnZjMIwwZQTnyxpuyLpoCPrXfaitpVEUHeGEYMgNmT6gDyWREy51UU99/M7xPEQMnBNRoX8hDDNqx31tHVbIBf8uFXGtVyiPTn6hFCQwhIRNCetSCiUQGl5Kx+xiDa3hzc10DErqbb89vzC6AHSuByMQTVK1Eh5LQYXtSMDAAA=')
        format('woff2'),
      url('//at.alicdn.com/t/font_2424977_mgkzs8o3ls.woff?t=1615943555493')
        format('woff'),
      url('//at.alicdn.com/t/font_2424977_mgkzs8o3ls.ttf?t=1615943555493')
        format('truetype'),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('//at.alicdn.com/t/font_2424977_mgkzs8o3ls.svg?t=1615943555493#iconfont')
        format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-star-off:before {
    content: '\e615';
  }

  .icon-star-on:before {
    content: '\e6ac';
  }

  .icon-star {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: var(--on-color);
      &::before {
        content: '\e6ac';
      }
    }
  }
}
</style>
