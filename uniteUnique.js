const uniteUnique = (array1, ...array2) => {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array3.includes(array1[i])) {
      array3.push(array1[i]);
    }
  }
  for (let j = 0; j < array2.length; j++) {
    for (let k = 0; k < array2[j].length; k++) {
      if (!array3.includes(array2[j][k])) {
        array3.push(array2[j][k]);
      }
    }
  }
  return array3;
};
