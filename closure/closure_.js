function sum(baseNum) {
  const inClosure = baseNum;

  return function (addNum) {
    return inClosure + addNum;
  };
}

const fiveAdd = sum(5);
fiveAdd(10);
const threeAdd = sum(3);
threeAdd(10);