import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDataBase";

export const getRecipeDetailsById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;
    if (!token) {
      res.statusCode = 403;
      throw new Error("Send a token via 'authorization' headers.");
    }

    if (!id) {
      res.statusCode = 422;
      throw new Error("Please insert an id.");
    }

    const recipeDetails = await new RecipeDatabase().getRecipeDetails(id);

    if (!recipeDetails) {
      res.statusCode = 404;
      throw new Error("Recipe not found.");
    }

    res.status(200).send(recipeDetails);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
