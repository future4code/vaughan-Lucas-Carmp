import { Result } from "../model/Result";
import { BaseDatabase } from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {
  protected TABLE_NAME: string = "result";

  public registerResult = async (result: Result): Promise<void> => {
    try {
      await this.connection(this.TABLE_NAME).insert({
        id: result.getId(),
        competition: result.getCompetition(),
        athlete: result.getAthlete(),
        value: result.getValue(),
        unit: result.getUnit(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getDartRankingByCompetitionName = async (
    name: string
  ): Promise<Result[]> => {
    try {
      const results = await this.connection(this.TABLE_NAME)
        .where("competition", name)
        .orderBy("value", "desc");

      const ranking: Result[] = [];
      let i = 1;
      for (let result of results) {
        result = { ...result, position: i };
        ranking.push(result);
        i++;
      }
      return ranking;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getDashRankingByCompetitionName = async (
    name: string
  ): Promise<Result[]> => {
    try {
      const results = await this.connection(this.TABLE_NAME)
        .where("competition", name)
        .orderBy("value", "asc");

      const ranking: Result[] = [];
      let i = 1;
      for (let result of results) {
        result = { ...result, position: i };
        ranking.push(result);
        i++;
      }
      return ranking;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
