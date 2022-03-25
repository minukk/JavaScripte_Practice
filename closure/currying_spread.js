function curry(fn, ...fixedArgs) {
  return (...newArgs) => fn(...fixedArgs, ...newArgs);
}

function volume(l, h, w) {
  return l * h * w;
}

const hCy = curry(volume, 100);
hCy(2, 5);
hCy(5, 10);