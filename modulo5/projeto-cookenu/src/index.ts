import { app } from "./app";
import { getSelfProfile } from "./endpoints/getSelfProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//Registers an user
app.post("/signup", signup);

//Login
app.post("/login", login);

//Get user's self profile
app.get("/user/profile", getSelfProfile);
