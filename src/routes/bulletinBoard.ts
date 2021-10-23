import { Router } from "express";
import {
  getListBulletinBoard,
  createBulletinBoard,
  editBulletinBoard,
  getByIdBulletinBoard,
  deleteBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";
import { authMiddleware } from "../middleware";

const router = Router();

router.get("/", authMiddleware, getListBulletinBoard);
router.get("/:id", authMiddleware, getByIdBulletinBoard);
router.post("/create", authMiddleware, createBulletinBoard);
router.patch("/edit/:id", authMiddleware, editBulletinBoard);
router.delete("/delete/:id", authMiddleware, deleteBulletinBoard);

export default router;
