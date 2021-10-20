import { Router } from "express";
import {
  getListBulletinBoard,
  createBulletinBoard,
  editBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";
import { authMiddleware } from "../middleware";

const router = Router();

router.get("/", getListBulletinBoard);
router.post("/create", authMiddleware, createBulletinBoard);
router.patch("/edit/:id", authMiddleware, editBulletinBoard);

export default router;
