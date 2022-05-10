import { personagem } from "./types/personagem";

export const validateCharacter = (input: personagem): boolean => {
    if (
      !input.nome ||
      input.forca === undefined ||
      input.defesa === undefined ||
      input.vida === undefined
    ) {
      return false;
    }
  
    if (input.forca <= 0 || input.defesa <= 0 || input.vida <= 0) {
      return false;
    }
  
    return true;
  };