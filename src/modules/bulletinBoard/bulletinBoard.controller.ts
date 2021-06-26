import { RequestHandler } from "express";
import { bulletinBoardType } from "./bulletinBoard.type";
import BulletinBoardRepository from "./bulletinBoard.repository";
import { decodedToken } from "../../helper";

// ====================================
// データの取得
// ====================================
export const getBulletinBoards: RequestHandler = async (req, res, next) => {
  const result = await BulletinBoardRepository.findAll();
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
  } as bulletinBoardType;

  try {
    const result = await BulletinBoardRepository.save(bulletinBoardData);

    res.status(200).json(result);
  } catch {
    res.status(400).json("失敗です");
  }
};

// export const createUser: RequestHandler = async (req, res, next) => {
//   const userData = req.body as IUserType;

//   // バリデーション
//   const error = createUserValidator(userData);
//   if (error.length) {
//     res.status(422).json({ message: "エラーがあります" });
//     return;
//   }

//   // ユーザーの保存処理
//   await UserRepository.save(userData);

//   // 登録したユーザーの取得
//   const user = await UserRepository.findOne(userData);
//   if (!user) {
//     res.status(422).json({ message: "登録されていないユーザーです" });
//     return;
//   }

//   // トークン取得
//   const token = UserRepository.getToken(user);

//   res.status(201).json({ token: token });
// };
