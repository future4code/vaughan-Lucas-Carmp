import { Request, Response } from "express";
import { createUser } from "../functions/createUser";
import { generateToken } from "../services/generateToken";
import { idGen } from "../services/idGenerator";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const id = idGen();

    if (!email) {
      res.statusCode = 412;
      throw new Error("Insira um email.");
    }

    if (!email.includes("@")) {
      res.statusCode = 412;
      throw new Error("Entrada inválida.");
    }

    if (password.length < 6) {
      res.statusCode = 412;
      throw new Error("A senha deve ter pelo menos 6 caracteres.");
    }

    await createUser(id, email, password);

    const token = generateToken({ id });

    res.status(200).send(token);
  } catch (error) {}
};
