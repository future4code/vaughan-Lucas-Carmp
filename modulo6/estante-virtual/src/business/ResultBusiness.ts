import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { ResultDatabase } from "../data/ResultDatabase";
import { CustomError } from "../error/CustomError";
import { Competition } from "../model/Competition";
import { Result } from "../model/Result";
import { ResultDTO } from "../types/DTO/ResultDTO";

export class ResultBusiness {
  constructor(
    public resultDatabase: ResultDatabase,
    public competitionDatabase: CompetitionDatabase
  ) {}

  public registerResult = async (result: ResultDTO): Promise<void> => {
    try {
      const { id, competition, athlete, value, unit } = result;

      if (!competition || !athlete || !value || !unit) {
        throw new CustomError(422, "Please fill in all fields");
      }

      if (unit.toLowerCase() !== "s" && unit.toLowerCase() !== "m") {
        throw new CustomError(
          422,
          "Please use 's' for seconds or 'm' for meters."
        );
      }

      const foundCompetition: Competition =
        await this.competitionDatabase.getCompetitionByName(competition);
      if (!foundCompetition) {
        throw new CustomError(404, "Competition not found.");
      }

      const isActive =
        await this.competitionDatabase.getActiveCompetitionsByName(competition);

      if (!isActive) {
        throw new CustomError(422, "This competition isn't active.");
      }

      const newResult = new Result(id, competition, athlete, value, unit);

      await this.resultDatabase.registerResult(newResult);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getDartRanking = async (name: string): Promise<Result[]> => {
    try {
      if (!name) {
        throw new CustomError(422, "Please fill in all fields.");
      }

      const foundCompetition: Competition =
        await this.competitionDatabase.getCompetitionByName(name);
      if (!foundCompetition) {
        throw new CustomError(404, "Competition not found.");
      }

      const ranking = await this.resultDatabase.getDartRankingByCompetitionName(
        name
      );

      return ranking;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getDashRanking = async (name: string): Promise<Result[]> => {
    try {
      if (!name) {
        throw new CustomError(422, "Please fill in all fields.");
      }

      const foundCompetition: Competition =
        await this.competitionDatabase.getCompetitionByName(name);
      if (!foundCompetition) {
        throw new CustomError(404, "Competition not found.");
      }

      const ranking = await this.resultDatabase.getDashRankingByCompetitionName(
        name
      );

      return ranking;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
