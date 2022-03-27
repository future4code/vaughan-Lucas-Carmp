const validateCPF = (cpf: string): boolean => {
  let init: string[] = cpf.slice(0, -3).replace(/\./g, "").split("");
  const initialVerifierDigit: string = cpf.slice(12, 14);

  const verifier = (): number => {
    return (
      11 -
      (init
        .map((item, index) => {
          return Number(item) * (init.length + 1 - index);
        })
        .reduce((a, b) => a + b) %
        11)
    );
  };

  let verifierDigit1: number = verifier();

  if (verifierDigit1 >= 10) verifierDigit1 = 0;

  init.push(verifierDigit1.toString());

  let verifierDigit2: number = verifier();

  verifierDigit2 >= 10 ? verifierDigit2 = 0 : null;

  const finalVerifier: boolean =
    verifierDigit1.toString() + verifierDigit2.toString() ===
    initialVerifierDigit;

  return finalVerifier;
};
