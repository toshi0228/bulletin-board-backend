import { Router } from "express";
// import { getUsers, createUser, login } from "../controller/UserController";
import { getUsers, createUser, login } from "../modules/user/user.module";

const router = Router();

router.get("/", getUsers);
router.post("/sign_up", createUser);
router.post("/sign_in", login);

// router.get("/", new UserController().all)
//   res.json("ok");

// router.post("/sign_up", new UserController().all);
// router.post("/login", login);

export default router;
