const pairElement = (string1) => {
  let array2 = [];

  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (char === "A") {
      array2.push(["A", "T"]);
    } else if (char === "T") {
      array2.push(["T", "A"]);
    } else if (char === "C") {
      array2.push(["C", "G"]);
    } else if (char === "G") {
      array2.push(["G", "C"]);
    }
  }

  return array2;
};
