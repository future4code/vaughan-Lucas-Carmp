import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public createRecipe = async (recipe: Recipe) => {
    try {
      await BaseDatabase.connection("cookenu_Recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        created_at: recipe.getDate(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
