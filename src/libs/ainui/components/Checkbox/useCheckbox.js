import { computed, getCurrentInstance, inject } from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants';
import { isPropType } from '../../utils/tools';

export const useCheckboxGroup = () => {
  const checkboxGroup = inject('CheckboxGroup', {});
  const isGroup = computed(
    () => checkboxGroup && checkboxGroup.name === 'CheckboxGroup'
  );

  return {
    isGroup,
    checkboxGroup,
    isBtnStyle: checkboxGroup ? checkboxGroup.isButton : false
  };
};

export const useCheckbox = props => {
  const { emit } = getCurrentInstance();

  const { isGroup, checkboxGroup, isBtnStyle } = useCheckboxGroup();

  const store = computed(() =>
    checkboxGroup ? checkboxGroup.modelValue.value : props.modelValue
  );

  const model = computed({
    get() {
      return isGroup.value ? store.value : props.modelValue;
    },
    set(val) {
      if (isGroup.value && Array.isArray(val)) {
        checkboxGroup.changeEvent(val);
      } else {
        emit(UPDATE_MODEL_EVENT, val);
      }
    }
  });

  const isChecked = computed(() => {
    const value = model.value;
    if (isPropType(value, 'boolean')) {
      return value;
    } else if (isPropType(value, 'array')) {
      return value.includes(props.label);
    }
    return null;
  });

  const onChange = e => {
    const target = e.target;
    const value = target.checked ? true : false;
    emit(CHANGE_EVENT, value, e);
  };

  return {
    isBtn: isBtnStyle,
    model,
    isChecked,
    onChange
  };
};
