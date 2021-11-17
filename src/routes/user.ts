import { Router } from "express";
import { createUser, login } from "../modules/user/user.module";

export const usersRoutes = Router();

usersRoutes.post("/sign_up", createUser);
usersRoutes.post("/sign_in", login);
