type charElements = {
  letter: string;
  number: number;
};

const romanDatabase: charElements[] = [
  { letter: "M", number: 1000 },
  { letter: "CM", number: 900 },
  { letter: "D", number: 500 },
  { letter: "CD", number: 400 },
  { letter: "C", number: 100 },
  { letter: "XC", number: 90 },
  { letter: "L", number: 50 },
  { letter: "XL", number: 40 },
  { letter: "C", number: 10 },
  { letter: "IX", number: 9 },
  { letter: "V", number: 5 },
  { letter: "IV", number: 4 },
  { letter: "I", number: 1 },
];

const romanConversor = (num: number): string => {


  let romanYear: string = "";

  for (let init = 0; init < romanDatabase.length; init++) {
    while (num - romanDatabase[init].number >= 0) {
      romanYear = romanYear + romanDatabase[init].letter;
      num -= romanDatabase[init].number;
    }
  }

  return romanYear;
};
