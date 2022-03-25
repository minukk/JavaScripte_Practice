function counterFactory() {
  let _count = 0;

  return function () {
    return _count += 1;
  };
}

const counter1 = counterFactory();
const counter2 = counterFactory();

console.log(counter1());
console.log(counter1());
console.log(counter2());