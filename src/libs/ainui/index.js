const AinUI = {};

import Magnifier from './components/Magnifier';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/Checkbox/checkbox-group.vue';
import Image from './components/Image';

AinUI.install = function(Vue) {
  Vue.component(Magnifier.name, Magnifier);
  Vue.component('AniCheckbox', Checkbox);
  Vue.component('AniCheckboxGroup', CheckboxGroup);
  Vue.component('AniImage', Image);
};

export default AinUI;
