import { performAttack } from "../src/performAttack";
import { personagem } from "../src/types/personagem";
import { validateCharacter } from "../src/validateCharacter";

describe("Validação das funções de character", () => {
  test("Valida o nome do personagem", () => {
    const result = validateCharacter({
      nome: "",
      forca: 1000,
      defesa: 10000,
      vida: 100000,
    });

    expect(result).toBe(false);
  });
  test("Valida a vida do personagem", () => {
    const result = validateCharacter({
      nome: "Viper",
      forca: 1000,
      defesa: 10000,
      vida: 0,
    });

    expect(result).toBe(false);
  });
  test("Valida a força do personagem", () => {
    const result = validateCharacter({
      nome: "Viper",
      forca: 0,
      defesa: 10000,
      vida: 2345,
    });

    expect(result).toBe(false);
  });
  test("Valida a defesa do personagem", () => {
    const result = validateCharacter({
      nome: "Viper",
      forca: 1000,
      defesa: 0,
      vida: 2356,
    });

    expect(result).toBe(false);
  });
  test("Valida valores numéricos positivos do personagem", () => {
    const result = validateCharacter({
      nome: "Viper",
      forca: 1000,
      defesa: -30,
      vida: 2356,
    });

    expect(result).toBe(false);
  });
  test("Valida personagem", () => {
    const result = validateCharacter({
      nome: "Viper",
      forca: 1000,
      defesa: 300,
      vida: 2356,
    });

    expect(result).toBe(true);
  });

  test("Deve realizar um ataque", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: personagem = {
      nome: "KAY/O",
      forca: 600,
      defesa: 200,
      vida: 1500,
    };

    const defensor: personagem = {
      nome: "Reyna",
      forca: 800,
      defesa: 400,
      vida: 1500,
    };

    performAttack(attacker, defensor, validatorMock);

    expect(defensor.vida).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toReturnTimes(2);
  });

  test("Deve retornar erro de personagen inválido", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: personagem = {
      nome: "KAY/O",
      forca: 600,
      defesa: 200,
      vida: 1500,
    };

    const defensor: personagem = {
      nome: "",
      forca: 800,
      defesa: 400,
      vida: 1500,
    };

    try {
      performAttack(attacker, defensor, validatorMock);
    } catch (error: any) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(2);
      expect(validatorMock).toReturnTimes(2);
    }
  });
});
