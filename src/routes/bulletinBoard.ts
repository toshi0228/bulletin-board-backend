import { Router } from "express";
import {
  getBulletinBoards,
  createBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";

const router = Router();

router.get("/", getBulletinBoards);
router.post("/create", createBulletinBoard);

export default router;
