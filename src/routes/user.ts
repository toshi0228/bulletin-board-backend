import { Router } from "express";
import { getUsers } from "../controller/UserController";

const router = Router();

// const result = new UserController();

router.get("/", getUsers);
// router.get("/", new UserController().all)
//   res.json("ok");

// router.post("/sign_up", new UserController().all);
// router.post("/login", login);

export default router;
