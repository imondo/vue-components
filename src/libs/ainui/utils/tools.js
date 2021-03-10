export function getStyle(el, prop) {
  return parseInt(window.getComputedStyle(el, null)[prop]);
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
