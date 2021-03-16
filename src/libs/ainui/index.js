const AinUI = {};

import Magnifier from './components/Magnifier';
import AniCheckbox from './components/Checkbox';
import AniCheckboxGroup from './components/Checkbox/checkbox-group.vue';
import AniImage from './components/Image';
import WaterfallList from './components/WaterfallList';
import AniMessage from './components/Message/index.js';

const components = [
  Magnifier,
  AniCheckbox,
  AniCheckboxGroup,
  AniImage,
  WaterfallList
]

const plugins = [
  AniMessage
]

AinUI.install = app => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  Magnifier,
  AniCheckbox,
  AniCheckboxGroup,
  AniImage,
  WaterfallList,
  AniMessage
}

export default AinUI;
