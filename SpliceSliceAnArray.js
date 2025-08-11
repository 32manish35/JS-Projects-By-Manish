function frankenSplice(arr1, arr2, n) {
  let localArr2 = arr2.slice();
  localArr2.splice(n, 0, ...arr1);
  return localArr2;
}

let a = [1, 2, 3];
let b = [4, 5, 6];
let index = 1;

console.log("Original array a:", a);
console.log("Original array b:", b);

let result = frankenSplice(a, b, index);
