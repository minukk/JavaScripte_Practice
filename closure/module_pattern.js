const Module = () => {
  const title = 'module pattern';

  const printTitle = () => {
    console.log(`제목 ${title}`);
  }

  return {
    getTitle: () => {
      printTitle();

      return title;
    }
  }
}

const title = Module.getTitle();
console.log(title());