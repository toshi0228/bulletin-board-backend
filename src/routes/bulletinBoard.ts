import { Router } from "express";
import {
  getListBulletinBoard,
  createBulletinBoard,
  editBulletinBoard,
  getByIdBulletinBoard,
  deleteBulletinBoard,
  createLikeBulletinBoard,
  deleteLikeBulletinBoard,
  createImageBulletinBoard,
} from "../modules/bulletinBoard/bulletinBoard.module";
import { authMiddleware } from "../middleware";
import {
  createBulletinBoardValidator,
  editBulletinBoardValidator,
} from "../modules/bulletinBoard/bulletinBoard.validator";
import * as multer from "multer";

const upload = multer({ dest: "uploads/" }); // multer configuration ファイルが保存されるフォルダー場所

export const bulletinBoardRoutes = Router();

bulletinBoardRoutes.get("/", authMiddleware, getListBulletinBoard);
bulletinBoardRoutes.get("/:id", authMiddleware, getByIdBulletinBoard);
bulletinBoardRoutes.post("/create", authMiddleware, createBulletinBoardValidator, createBulletinBoard);
bulletinBoardRoutes.patch("/edit/:id", authMiddleware, editBulletinBoardValidator, editBulletinBoard);
bulletinBoardRoutes.delete("/delete/:id", authMiddleware, deleteBulletinBoard);
bulletinBoardRoutes.post("/like/:id", authMiddleware, createLikeBulletinBoard); // いいね作成
bulletinBoardRoutes.delete("/like/:id", authMiddleware, deleteLikeBulletinBoard); // いいね削除
bulletinBoardRoutes.post("/image", upload.single("image"), createImageBulletinBoard); // 画像を登録
