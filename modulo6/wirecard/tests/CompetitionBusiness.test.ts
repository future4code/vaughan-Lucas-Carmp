import { CompetitionBusiness } from "../src/business/CompetitionBusiness";
import { CompetitionDatabase } from "../src/data/CompetitionDatabase";
import { CustomError } from "../src/error/CustomError";
import { CompetitionDTO } from "../src/types/DTO/CompetitionDTO";
import { CompetitionDatabaseMock } from "./mocks/CompetitionDatabaseMock";
import { competitionMock } from "./mocks/CompetitionMock";

const competitionBusinessMock = new CompetitionBusiness(
  new CompetitionDatabaseMock() as any
);
describe("Register competition tests", () => {
  test("Should return an error if 'name' field isn't filled.", async () => {
    expect.assertions;
    try {
      const inputMock: CompetitionDTO = {
        id: "mocked_id",
        name: "",
        date: "2002/02/02",
        isFinished: true,
      };

      await competitionBusinessMock.register(inputMock);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual("Please fill in all fields.");
        expect(error.statusCode).toEqual(422);
      }
    }
  });

  test("Should return an error if 'date' field isn't filled.", async () => {
    expect.assertions;
    try {
      const inputMock: CompetitionDTO = {
        id: "mocked_id",
        name: "mocked_name",
        date: "",
        isFinished: true,
      };

      await competitionBusinessMock.register(inputMock);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual("Please fill in all fields.");
        expect(error.statusCode).toEqual(422);
      }
    }
  });

  test("Should register a competition.", async () => {
    expect.assertions;
    try {
      const inputMock: CompetitionDTO = {
        id: "mocked_id",
        name: "mocked_name",
        date: "2002/02/02",
        isFinished: true,
      };
      await competitionBusinessMock.register(inputMock);

      expect(competitionBusinessMock.register).toBeCalled();
    } catch (error) {
      console.log(error);
    }
  });
});
