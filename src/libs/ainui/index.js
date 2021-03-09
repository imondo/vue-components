const AinUI = {};

import Magnifier from './components/Magnifier';

AinUI.install = function(Vue) {
  Vue.component(Magnifier.name, Magnifier);
};

export default AinUI;
