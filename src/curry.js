// Credit to https://medium.com/@kevincennis/currying-in-javascript-c66080543528
export const curry = (fn) => {
  const arity = fn.length;
  return (function resolver() {
    const memory = Array.prototype.slice.call(arguments);
    return function () { // eslint-disable-line func-names
      const local = memory.slice();
      Array.prototype.push.apply(local, arguments);
      const next = local.length >= arity ? fn : resolver;
      return next.apply(null, local);
    };
  }());
};
