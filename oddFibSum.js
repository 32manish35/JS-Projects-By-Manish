const sumFibs = (num) => {
  let a = 1, b = 1;
  let sum = 0;

  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }
    let next = a + b;
    a = b;
    b = next;
  }

  return sum;
};

// Example:
console.log(sumFibs(10)); // Output: 10 (1 + 1 + 3 + 5)
