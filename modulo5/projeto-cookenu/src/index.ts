import { app } from "./app";
import { signup } from "./endpoints/signup";

//Registers an user
app.post("/signup", signup)

