function curry(uncurried) {
  const requireLength = uncurried.length;
  const slice = Array.prototype.slice;

  return (function resolver() {
    let storagedArgs = slice.call(arguments);

    return function() {
      let newArgs = storagedArgs.slice();
      Array.prototype.push.apply(newArgs, arguments);
      next = newArgs.length >= requireLength ? uncurried : resolver;

      return next.apply(null, newArgs);
    }
  }());
}

function sum(x, y, z) {
  return x + y + z;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));