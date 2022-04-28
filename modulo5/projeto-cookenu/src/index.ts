import { app } from "./app";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//Registers an user
app.post("/signup", signup);

//Login
app.post("/login", login);
