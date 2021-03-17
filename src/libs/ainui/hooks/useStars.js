import { ref } from 'vue';

export function useStars(num, callback) {
  let starNum = ref(num);

  const setStarNum = (num) => {
    starNum.value = num;
    callback();
  }

  return [
    starNum,
    setStarNum
  ]
}
