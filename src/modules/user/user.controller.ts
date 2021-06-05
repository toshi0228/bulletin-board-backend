import { RequestHandler } from "express";
import { User } from "../../entity/User";
import { createUserValidator, loginValidator } from "./user.service";
import UserRepository from "./user.repository";
import { IUserType } from "./user.type";

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

  // // ユーザーの保存
  // const newUser = await User.create({
  //   name,
  //   email,
  //   password,
  // });

  // await newUser.save();

  // // 登録したユーザー取得
  // const user = await User.find({ email });
  // if (!user.length) {
  //   res.status(422).json({ message: "登録されていないユーザーです" });
  //   return;
  // }

  // // トークン取得
  // const token = User.getToken(user);

  // res.status(201).json({ token: token });
  res.status(201).json({ ok: "ok" });
};

// ====================================
// ログイン処理
// ====================================
export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body as { email: string; password: string };

  const error = loginValidator(email, password);
  if (error.length !== 0) {
    res.status(422).json({ message: "エラーがあります" });
  }

  const user = await User.find({ email });
  if (!user.length) {
    res.status(422).json({ message: "登録されていないユーザーです" });
    return;
  }

  if (user) {
    const token = User.getToken(user);
    res.status(201).json({ token });
  } else {
    res.status(422).json("エラーです");
  }
};
