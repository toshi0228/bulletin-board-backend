import { Router } from "express";
import {
  getBulletinBoards,
  createBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";
import { authMiddleware } from "../middleware";

const router = Router();

router.get("/", getBulletinBoards);
router.post("/create", authMiddleware, createBulletinBoard);

export default router;
