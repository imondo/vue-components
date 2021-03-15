export function getStyle(el, prop, isNumber = true) {
  if (isNumber) {
    return parseInt(window.getComputedStyle(el, null)[prop]);
  }
  return window.getComputedStyle(el, null)[prop];
}

export function hasOwn(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function isPropType(prop, type) {
  const types = {
    string: '[object String]',
    number: '[object Number]',
    boolean: '[object Boolean]',
    object: '[object Object]',
    array: '[object Array]'
  };
  return Object.prototype.toString.call(prop) === types[type];
}

export function isScoll(el) {
  const overflow = getStyle(el, 'overflow', false);
  return overflow.match(/(scroll|auto)/);
}

export function getScrollContainer(el) {
  let parent = el;
  while (parent) {
    if ([window, document].includes(parent)) {
      return window;
    }
    if (isScoll(parent)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
}

export function isInViewport(el, container) {
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if ([window, document, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      left: 0,
      right: window.innerWidth,
      bottom: window.innerHeight
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }
  // 元素顶部 距离 视口左上角 的距离 top <= 窗口高度 （反例：元素在屏幕下方的情况）
  // 元素底部 距离 视口左上角 的距离 bottom > 0 (反例：元素在屏幕上方的情况)
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
}

export function onListener(el, handler, func) {
  const _container = el || window;
  _container.addEventListener(handler, func, false);
}

export function removeListener(el, handler, func) {
  const _container = el || window;
  _container.removeEventListener(handler, func, false);
}

export function debounce(fn, delay = 200) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(this, arguments);
    }, delay);
  };
}

export function throttle(fn, delay = 200) {
  let prv = 0;
  return function() {
    let now = +new Date();
    if (now - prv > delay) {
      fn.apply(this, arguments);
      prv = now;
    }
  };
}
