import { getRepository } from "typeorm";
import { RequestHandler } from "express";
import { User } from "../entity/User";

// ====================================
// get
// ====================================
export const getUsers: RequestHandler = async (req, res, next) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  res.json({ users });
};

// export class UserController {
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
