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

export const pipe = (initialValue, ...fns) =>
  fns.reduce((result, fn) => fn(result), initialValue);

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

export const pick = curry((keys, object) => {
  return keys.reduce((result, key) => {
    if (key in object) { result[key] = object[key]; } // eslint-disable-line no-param-reassign
    return result;
  }, {});
});

export const mapValues = curry((fn, object) =>
  Object.keys(object).reduce((result, key) => {
    result[key] = fn(object[key]); // eslint-disable-line no-param-reassign
    return result;
  }, {}));

export const except = curry((keys, object) => {
  return Object.keys(object).reduce((result, key) => {
    if (!keys.includes(key)) { result[key] = object[key]; } // eslint-disable-line no-param-reassign
    return result;
  }, {});
});

export const joinWhen = (compareFn, string, ...values) =>
  values.filter(compareFn).join(string);

export const leftpad = curry((amount, fill, input) => {
  const string = `${input || fill }`;
  const [number, decimals] = string.split('.');
  if (number.length >= amount) { return string; }
  const prefix = Array.from({ length: amount }).reduce((result) => `${result}${fill}`);
  const prefixedNumber = `${prefix}${number}`.substr(-amount);
  return decimals
    ? `${prefixedNumber}.${decimals}`
    : prefixedNumber;
});

export const values = (object) => Object.keys(object).map((key) => object[key]);
