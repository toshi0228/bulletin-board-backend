import { RequestHandler, Request, Response, NextFunction } from "express";
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

  const error = User.validator(name, email, password, confirmPassword);
  if (error.length !== 0) {
    res.status(422).json({ message: "エラーがあります" });
  }

  const newUser = await User.create({
    name,
    email,
    password,
    confirmPassword,
  });

  newUser.save();
  res.status(201).json({ message: "USERを作成しました" });
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
