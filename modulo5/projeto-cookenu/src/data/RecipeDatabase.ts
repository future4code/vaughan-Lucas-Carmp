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

  public getRecipeDetails = async (id: string): Promise<any> => {
    try {
      const details = await BaseDatabase.connection("cookenu_Recipes")
        .where({ id })
        .select("id", "title", "description", "created_at");

      return details[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
