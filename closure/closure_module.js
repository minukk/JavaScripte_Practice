function counterModule () {
  let _count = 0;

  function count(value) {
    _count = value || _count;
    
    return _count;
  }

  return {
    count,
    inc: function () {
      return count(count() + 1);
    },
    dec: function () {
      return count(count() - 1);
    }
  };
}

const counter1 = counterModule();
const counter2 = counterModule();

console.log(counter1.inc);
console.log(counter1.inc);
console.log(counter2.dec);
console.log(counter2.dec);
