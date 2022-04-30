import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getSelfProfile } from "./endpoints/getSelfProfile";
import { getUserDetailsById } from "./endpoints/getUserDetailsById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//Registers an user
app.post("/signup", signup);

//Login
app.post("/login", login);

//Create a recipe
app.post("/recipe", createRecipe);

//Get user's self profile
app.get("/user/profile", getSelfProfile);

//Get user details by id
app.get("/user/:id", getUserDetailsById);
