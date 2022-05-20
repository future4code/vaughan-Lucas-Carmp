const anagramCalc = (string: string): number => {
  const charsNum: number = string.split("").length;
  let result: number = charsNum;
  if (charsNum === 0 || charsNum === 1) {
    result = 1;
  } else {
    for (let i = 1; i < charsNum; i++) {
      result *= i;
    }
  }

  return result;
};
