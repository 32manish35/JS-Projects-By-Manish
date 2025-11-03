function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);


  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let lcm = max;
  while (true) {
    let divisibleByAll = true;

    for (let i = 0; i < range.length; i++) {
      if (lcm % range[i] !== 0) {
        divisibleByAll = false;
        break;
      }
    }

    if (divisibleByAll) {
      return lcm;
    }

    lcm++;
  }
}

console.log(smallestCommons([1, 5]));  
console.log(smallestCommons([5, 1]));  
console.log(smallestCommons([2, 10])); 
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18])); 
