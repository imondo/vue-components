const AinUI = {};

import Magnifier from './components/Magnifier';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/Checkbox/checkbox-group.vue';
import Image from './components/Image';
import WaterfallList from './components/WaterfallList';

AinUI.install = function(Vue) {
  Vue.component('Magnifier', Magnifier);
  Vue.component('AniCheckbox', Checkbox);
  Vue.component('AniCheckboxGroup', CheckboxGroup);
  Vue.component('AniImage', Image);
  Vue.component('WaterfallList', WaterfallList);
};

export default AinUI;
