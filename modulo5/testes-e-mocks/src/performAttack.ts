import { personagem } from "./types/personagem";

export const performAttack = (
  atacante: personagem,
  defensor: personagem,
  validator: (input: personagem) => boolean
) => {
  const validAttacker = validator(atacante);
  const validDefensor = validator(defensor);

  if (!validAttacker || !validDefensor) {
    throw new Error("Invalid character");
  }

  if (atacante.forca > defensor.defesa) {
    defensor.vida -= atacante.forca - defensor.defesa;
  }
};
