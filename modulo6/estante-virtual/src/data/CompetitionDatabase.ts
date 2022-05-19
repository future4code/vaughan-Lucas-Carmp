import { CustomError } from "../error/CustomError";
import { Competition } from "../model/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
  protected TABLE_NAME: string = "competition";

  public register = async (competition: Competition): Promise<void> => {
    try {
      await this.connection(this.TABLE_NAME).insert({
        id: competition.getId(),
        name: competition.getName(),
        date: competition.getDate(),
        is_finished: competition.getIsFinished(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
