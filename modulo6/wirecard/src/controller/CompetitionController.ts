import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { IdGenerator } from "../services/generateId";
import { CompetitionDTO } from "../types/DTO/CompetitionDTO";

export class CompetitionController {
  constructor(
    private competitionBusiness: CompetitionBusiness,
    private idGenerator: IdGenerator
  ) {}

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, date, isFinished } = req.body;
      const id = this.idGenerator.generateId();
      const competitionInput: CompetitionDTO = {
        id: id,
        name: name,
        date: date,
        isFinished: isFinished,
      };

      await this.competitionBusiness.register(competitionInput);

      res.status(201).send("Competition created.")
    } catch (error: any) {
        const {statusCode, message} = error
        res.status(statusCode || 400).send({message})
    }
  };
}
