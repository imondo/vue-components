const AinUI = {};

import Magnifier from './components/Magnifier';
import AniCheckbox from './components/Checkbox';
import AniCheckboxGroup from './components/Checkbox/checkbox-group.vue';
import AniImage from './components/Image';
import WaterfallList from './components/WaterfallList';
import AniMessage from './components/Message/index.js';
import AniStars from './components/Stars';

const components = [
  Magnifier,
  AniCheckbox,
  AniCheckboxGroup,
  AniImage,
  WaterfallList,
  AniStars
];

const plugins = [AniMessage];

AinUI.install = app => {
  components.forEach(component => {
    app.component(component.name, component);
  });

  plugins.forEach(plugin => {
    app.use(plugin);
  });
};

export {
  Magnifier,
  AniCheckbox,
  AniCheckboxGroup,
  AniImage,
  WaterfallList,
  AniMessage
};

export default AinUI;
