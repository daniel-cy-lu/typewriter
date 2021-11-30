
const animation = function (sentence) {
  let x = 0;
  for (const char of sentence) {
    setTimeout(() => {process.stdout.write(char)}, x += 50);
  }
  setTimeout(() => console.log(), x);
};  

animation("hello there from lighthouse labs")