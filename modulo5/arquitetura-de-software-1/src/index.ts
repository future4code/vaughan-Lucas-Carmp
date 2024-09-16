import { app } from "./controller/app";
import { UserController } from "./controller/UserController";


app.post("/signup", new UserController().signup)
