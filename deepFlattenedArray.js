function steamrollArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (Array.isArray(element)) {
      result = result.concat(steamrollArray(element));
    } else {
      result.push(element); 
    }
  }

  return result;
}
