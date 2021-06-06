import { RequestHandler } from "express";
import { User } from "../../entity/User";
import { createUserValidator, loginValidator } from "./user.service";
import UserRepository from "./user.repository";
import { IUserType, ILoginQueryType } from "./user.type";

// ====================================
// get
// ====================================
export const getUsers: RequestHandler = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ users });
};

// ====================================
// 新規登録
// ====================================
export const createUser: RequestHandler = async (req, res, next) => {
  const userData = req.body as IUserType;

  // バリデーション
  const error = createUserValidator(userData);
  if (error.length) {
    res.status(422).json({ message: "エラーがあります" });
    return;
  }

  // ユーザーの保存処理
  await UserRepository.save(userData);

  // 登録したユーザーの取得
  const user = await UserRepository.findOne(userData);
  if (!user) {
    res.status(422).json({ message: "登録されていないユーザーです" });
    return;
  }

  // トークン取得
  const token = UserRepository.getToken(user);

  res.status(201).json({ token: token });
};

// ====================================
// ログイン処理
// ====================================
export const login: RequestHandler = async (req, res, next) => {
  const userData = req.body as ILoginQueryType;

  const error = loginValidator(userData);

  if (error.length !== 0) {
    res.status(422).json({ message: "エラーがあります" });
  }

  const user = await UserRepository.findOne(userData);
  if (!user) {
    res.status(422).json({ message: "登録されていないユーザーです" });
    return;
  }

  if (user) {
    const token = UserRepository.getToken(user);
    res.status(201).json({ token });
  } else {
    res.status(422).json("エラーです");
  }
};
