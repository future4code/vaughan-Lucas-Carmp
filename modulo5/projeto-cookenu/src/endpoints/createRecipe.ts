import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { generateId } from "../services/generateId";

export const createRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    const { title, description } = req.body;
    const id = generateId();
    const date = new Date();

    if (!title || !description) {
      res.statusCode = 422;
      throw new Error("Please fill in fields 'title' and 'description'.");
    }

    if (!token) {
      res.statusCode = 403;
      throw new Error("Send a token via 'authorization' headers.");
    }

    const newRecipe = new Recipe(id, title, description, date);

    await new RecipeDatabase().createRecipe(newRecipe);

    res.status(201).send({ message: "Recipe successfully created." });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
