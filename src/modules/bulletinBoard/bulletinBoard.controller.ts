import { RequestHandler } from "express";
import { bulletinBoardCreateType } from "./bulletinBoard.type";
import BulletinBoardRepository from "./bulletinBoard.repository";
import { decodedToken } from "../../helper";
import { validationResult } from "express-validator";

// ====================================
// データの一覧取得
// ====================================
export const getListBulletinBoard: RequestHandler = async (req, res, next) => {
  const result = await BulletinBoardRepository.findAll();
  res.status(200).json(result);
};

// ====================================
// データの取得
// ====================================
export const getByIdBulletinBoard: RequestHandler = async (req, res, next) => {
  const result = await BulletinBoardRepository.findOne({
    id: Number(req.params.id),
  });

  res.status(200).json(result);
};

// ====================================
// 新規登録
// ====================================
export const createBulletinBoard: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json("新規登録に失敗しました");

  // jwtからトークンを取得
  const userId = decodedToken(req.headers.authorization);

  const bulletinBoardData = {
    ...req.body,
    userId: Number(userId),
  } as bulletinBoardCreateType;

  try {
    const result = await BulletinBoardRepository.save(bulletinBoardData);
    res.status(201).json(result);
  } catch (e) {
    if (e.code === "ER_DATA_TOO_LONG") return res.status(400).json("140字までです");
    res.status(400).json("新規登録に失敗しました");
  }
};

// ====================================
// ポストデータの編集
// ====================================
export const editBulletinBoard: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json("編集に失敗しました");

  try {
    const result = await BulletinBoardRepository.update(req.body.id, req.body);
    res.status(200).json({ result });
  } catch (e) {
    if (e.code === "ER_DATA_TOO_LONG") return res.status(400).json("140字までです");
    res.status(400).json("編集に失敗しました");
  }
};

// ====================================
// ポストデータの削除
// ====================================
export const deleteBulletinBoard: RequestHandler = async (req, res, next) => {
  try {
    const result = await BulletinBoardRepository.delete({
      id: Number(req.params.id),
    });
    res.status(200).json(result);
  } catch {
    res.status(400).json("失敗です");
  }
};

// ====================================
// いいね作成
// ====================================

export const createLikeBulletinBoard: RequestHandler = async (req, res, next) => {
  // jwtからトークンを取得
  const userId = decodedToken(req.headers.authorization);

  try {
    const result = await BulletinBoardRepository.createLike({
      bulletinBoardId: Number(req.params.id),
      userId: Number(userId),
    });

    res.status(200).json(result);
  } catch {
    res.status(400).json("失敗です");
  }
};

// ====================================
// いいね削除
// ====================================
export const deleteLikeBulletinBoard: RequestHandler = async (req, res, next) => {
  try {
    const result = await BulletinBoardRepository.deleteLike(req.params.id);
    res.status(200).json(result);
  } catch {
    res.status(400).json("失敗です");
  }
};

// ====================================
// 画像の登録
// ====================================
export const createImageBulletinBoard: RequestHandler = async (req, res, next) => {
  console.log("きた");
  console.log(req.file);
  const file = req.file;
  const description = req.body.description;

  console.log(description);

  try {
    // const result = await BulletinBoardRepository.deleteLike(req.params.id);
    res.status(200).json("ok");
  } catch {
    res.status(400).json("失敗です");
  }
};
