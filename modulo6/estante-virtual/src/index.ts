import { app } from "./controller/app";
import { competitionRouter } from "./router/CompetitionRouter";

app.use("/competitions", competitionRouter);

