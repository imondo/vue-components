import { createVNode, render } from 'vue';
import MessageConstructor from './index.vue';

let instance;

const Message = (options = {}) => {
  const container = document.createElement('div');

  let _opt = {
    message: typeof options === 'string' ? options : options.msg
  };

  const useClose = options.onClose

  _opt = {
    ..._opt,
    onClose: () => {
      close(useClose, instance);
    }
  }

  const vm = createVNode(MessageConstructor, _opt);
  
  instance = vm;

  vm.props.onDestroy = () => {
    render(null, container);
  }
  
  render(vm, container);

  document.body.appendChild(container.firstElementChild);

  return {
    close: () => {
      vm.component.proxy.visible = false;
    }
  }
}

function close(useClose, vm) {
  if (useClose) {
    useClose(vm);
  }
}

export default {
  install(app) {
    app.config.globalProperties.$message = Message;
  }
}

