<template>
  <label
    class="checkbox-wrap"
    :class="{
      'checkbox-wrap-button': isBtn,
      'is-checked-text': isBtn ? false : isChecked,
      'is-checked': isBtn && isChecked
    }"
  >
    <input
      type="checkbox"
      v-model="model"
      :value="label"
      :checked="isChecked"
      @change="onChange"
    />
    <i v-if="!isBtn" class="check-icon">✓</i>
    <slot></slot>
  </label>
</template>

<script>
import { useCheckbox } from './useCheckbox';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants';
export default {
  name: 'AniCheckbox',
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: () => undefined
    },
    label: {
      type: [Boolean, Number, String]
    }
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props) {
    return useCheckbox(props);
  }
};
</script>

<style lang="less" scoped>
@color: #333;
@activeColor: #409eff;
.checkbox-wrap {
  margin-right: 15px;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  .check-icon {
    margin-right: 5px;
    font-size: 14px;
    font-style: normal;
    display: inline-block;
    width: 14px;
    height: 14px;
    text-align: center;
    line-height: 14px;
    color: #fff;
    border: 1px solid @color;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + .check-icon {
    background-color: @activeColor;
    border-color: @activeColor;
  }
  &.is-checked-text {
    color: @activeColor;
  }
}
.checkbox-wrap-button {
  font-size: 14px;
  padding: 5px 10px;
  margin: 0;
  line-height: 1;
  font-weight: 500;
  white-space: nowrap;
  vertical-align: middle;
  background: #fff;
  border: 1px solid @color;
  border-left: 0;
  color: @color;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  border-radius: 0;
  &:first-child {
    border-left: 1px solid @color;
  }
  &.is-checked {
    color: #fff;
    background-color: @activeColor;
    border-color: @activeColor;
    box-shadow: -1px 0 0 0 #8cc5ff;
  }
}
</style>
