const mutation = (arr) => {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    const charToFind = secondWord[i];

    if (!firstWord.includes(charToFind)) {
      return false;
    }
    
  }

  return true;
};