import { Router } from "express";
import {
  getListBulletinBoard,
  createBulletinBoard,
  editBulletinBoard,
  getByIdBulletinBoard,
  deleteBulletinBoard,
  likedBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";
import { authMiddleware } from "../middleware";
import {
  createBulletinBoardValidator,
  editBulletinBoardValidator,
} from "../modules/bulletinBoard/bulletinBoard.validator";

const router = Router();

router.get("/", authMiddleware, getListBulletinBoard);
router.get("/:id", authMiddleware, getByIdBulletinBoard);
router.post("/create", authMiddleware, createBulletinBoardValidator, createBulletinBoard);
router.patch("/edit/:id", authMiddleware, editBulletinBoardValidator, editBulletinBoard);
router.delete("/delete/:id", authMiddleware, deleteBulletinBoard);
router.post("/liked/:id", authMiddleware, createBulletinBoardValidator, likedBulletinBoard); // いいね

export default router;
