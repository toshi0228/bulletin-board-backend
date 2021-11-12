import { Router } from "express";
import { usersRoutes } from "./user";
import { bulletinBoardRoutes } from "./bulletinBoard";

export const router = Router();

router.use("/user", usersRoutes);
router.use("/bulletin-board", bulletinBoardRoutes);

export default router;
