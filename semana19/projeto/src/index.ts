import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { getProfileById } from "./endpoints/getProfileById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe", createRecipe)

app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getProfileById)
