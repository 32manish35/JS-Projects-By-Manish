const addTogether = (num1, num2) => {
  if (typeof num1 !== "number" || (num2 !== undefined && typeof num2 !== "number")) {
    return undefined;
  }

  if (num2 !== undefined) {
    return num1 + num2;
  } else {
    return function(num) {
      if (typeof num !== "number") return undefined;
      return num1 + num;
    };
  }
};
