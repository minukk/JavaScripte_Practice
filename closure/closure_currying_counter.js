function counterFactoryMaker(increaseValue) {
  return function counterFactory(init) {
    let _count = init;

    return function counter () {
      return _count += increaseValue;
    };
  };
}

const counterFactory = counterFactoryMaker(3);
const counter1 = counterFactory(0);
const counter2 = counterFactory(3);

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());