import { Router } from "express";
import {
  getBulletinBoards,
  createBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";
import { authMiddleware } from "../middleware";

const router = Router();

router.get("/", authMiddleware, getBulletinBoards);
router.post("/create", createBulletinBoard);

export default router;
