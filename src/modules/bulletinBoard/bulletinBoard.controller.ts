import { RequestHandler } from "express";
import { bulletinBoardType } from "./bulletinBoard.type";
import BulletinBoardRepository from "./bulletinBoard.repository";

export const getBulletinBoards: RequestHandler = (req, res, next) => {
  console.log("リクエストがきた");
  res.status(200).json({ ok: "ok" });
};

// ====================================
// 新規登録
// ====================================
export const createBulletinBoard: RequestHandler = async (req, res, next) => {
  const bulletinBoardData = req.body as bulletinBoardType;
  await BulletinBoardRepository.save(bulletinBoardData);

  res.status(200).json("成功");
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
