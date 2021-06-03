import { RequestHandler } from "express";
import { User } from "../entity/User";

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
  const { name, email, password, confirmPassword } = req.body as {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  // バリデーション
  const error = User.createUserValidator(
    name,
    email,
    password,
    confirmPassword
  );

  if (error.length) {
    res.status(422).json({ message: "エラーがあります" });
    return;
  }

  // ユーザーの保存
  const newUser = await User.create({
    name,
    email,
    password,
  });

  await newUser.save();

  // 登録したユーザー取得
  const user = await User.find({ email });
  if (!user.length) {
    res.status(422).json({ message: "登録されていないユーザーです" });
    return;
  }

  // トークン取得
  const token = User.getToken(user);

  res.status(201).json({ token: token });
};

// ====================================
// ログイン処理
// ====================================
export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body as { email: string; password: string };

  const error = User.loginValidator(email, password);
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

// class UserController {
//   private userRepository = getRepository(User);

//   async all(request: Request, response: Response, next: NextFunction) {
//     // console.log({ User });
//     return this.userRepository.find();
//   }

//   async one(request: Request, response: Response, next: NextFunction) {
//     return this.userRepository.findOne(request.params.id);
//   }

//   async save(request: Request, response: Response, next: NextFunction) {
//     return this.userRepository.save(request.body);
//   }

//   async remove(request: Request, response: Response, next: NextFunction) {
//     let userToRemove = await this.userRepository.findOne(request.params.id);
//     await this.userRepository.remove(userToRemove);
//   }
// }

// export default new UserController();
