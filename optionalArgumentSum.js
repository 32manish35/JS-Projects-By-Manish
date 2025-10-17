function addTogether() {
  const a = arguments[0];
  const b = arguments[1];

  if (arguments.length === 2) {
    if (typeof a === "number" && typeof b === "number" && Number.isFinite(a) && Number.isFinite(b)) {
      return a + b;
    }
    return undefined;
  }

  if (typeof a === "number" && Number.isFinite(a)) {
    return function(b2) {
      if (typeof b2 === "number" && Number.isFinite(b2)) {
        return a + b2;
      }
      return undefined;
    };
  }

  return undefined;
