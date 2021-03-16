<template>
  <div class="ani-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { computed, nextTick, provide, toRefs } from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants';

export default {
  name: 'AniCheckboxGroup',
  props: {
    modelValue: {
      type: [Array],
      default: () => undefined
    },
    isButton: Boolean
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, ctx) {
    const changeEvent = value => {
      ctx.emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        ctx.emit(CHANGE_EVENT, value);
      });
    };

    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });

    provide('CheckboxGroup', {
      name: 'CheckboxGroup',
      modelValue,
      ...toRefs(props),
      changeEvent
    });
  }
};
</script>

<style lang="less" scoped></style>
