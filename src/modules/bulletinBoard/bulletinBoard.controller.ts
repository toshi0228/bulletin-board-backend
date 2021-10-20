import { RequestHandler } from "express";
import { bulletinBoardCreateType } from "./bulletinBoard.type";
import BulletinBoardRepository from "./bulletinBoard.repository";
import { decodedToken } from "../../helper";

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
  // jwtからトークンを取得
  const userId = decodedToken(req.headers.authorization);

  const bulletinBoardData = {
    ...req.body,
    userId: Number(userId),
  } as bulletinBoardCreateType;

  try {
    const result = await BulletinBoardRepository.save(bulletinBoardData);

    res.status(200).json(result);
  } catch {
    res.status(400).json("失敗です");
  }
};

// ====================================
// ポストデータの編集
// ====================================
export const editBulletinBoard: RequestHandler = async (req, res, next) => {
  const editPostData = req.body;

  try {
    const result = await BulletinBoardRepository.edit(editPostData);
    res.status(200).json({ result });
  } catch {
    res.status(400).json("失敗です");
  }
};
