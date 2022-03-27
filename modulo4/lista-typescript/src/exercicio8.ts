const dateFormatter = (
  array: string[],
  initial: number,
  final: number
): string => {
  const element = array[initial];
  array.splice(initial, 1);
  array.splice(final, 0, element);
  return array.join("-");
};

const renewChecker = (birth: string, license: string): boolean | string => {
  const birthArr: string[] = birth.split("/");
  const licenseArr: string[] = license.split("/");

  const formattedBirthArray: string = dateFormatter(birthArr, 1, 0);
  const formattedLicenseArray: string = dateFormatter(licenseArr, 1, 0);

  const birthDate: number = new Date(formattedBirthArray).getTime();
  const licenseDate: number = new Date(formattedLicenseArray).getTime();
  const today: number = new Date().getTime();

  const fiveYears: number = 157788000000;
  const tenYears: number = fiveYears * 2;
  const fifteenYears: number = fiveYears * 3;
  const twentyYears: number = fiveYears * 4;
  const fiftyYears: number = fiveYears * 10;

  if (birthDate <= twentyYears && today - fiveYears <= licenseDate) {
    return true;
  } else if (
    birthDate > twentyYears &&
    birthDate <= fiftyYears &&
    today - tenYears <= licenseDate
  ) {
    return true;
  } else if (birthDate > fiftyYears && today - fifteenYears <= licenseDate) {
    return true;
  } else {
    return "Você não deveria ter uma carteira!";
  }
};
