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

export const createRegexBuilder = (regex = '') => {
  const valueOf = (value) => value.isBuilder
    ? value.toValue()
    : value;

  const convertToValue = (fn) => (regexBuilder) =>
    createRegexBuilder(fn(valueOf(regexBuilder)));

  const maybe = convertToValue((newRegex) => `(${newRegex})?`);
  const and = convertToValue((newRegex) => `${regex}${newRegex}`);
  const join = (...array) => createRegexBuilder([regex, ...array].join(''));

  const startOfLine = () => and('^');
  const endOfLine = () => and('$');

  const toValue = () => regex;
  const test = (value) => (new RegExp(toValue())).test(value);

  return {
    join,
    startOfLine,
    endOfLine,
    maybe,
    and,
    toValue,
    test,
    isBuilder: true,
  };
};
