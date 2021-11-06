import { Router } from "express";
import { createUser, login } from "../modules/user/user.module";

const router = Router();

router.post("/sign_up", createUser);
router.post("/sign_in", login);

export default router;
