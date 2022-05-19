import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { CustomError } from "../error/CustomError";
import { Competition } from "../model/Competition";
import { CompetitionDTO } from "../types/DTO/CompetitionDTO";

export class CompetitionBusiness {
  constructor(private competitionDatabase: CompetitionDatabase) {}

  public register = async (competition: CompetitionDTO): Promise<void> => {
    try {
      const { id, name, date, isFinished } = competition;

      if (!name || !date) {
        throw new CustomError(422, "Please fill in all fields.");
      }

      const newCompetition = new Competition(id, name, date, isFinished);
      await this.competitionDatabase.register(newCompetition);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  };
}
