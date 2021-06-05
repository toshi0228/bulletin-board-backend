import { hash, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";
import { IUserType } from "./user.type";

class UserRepository {
  User = new User();

  async save(user: IUserType) {
    const newUser = await User.create(user);
    await newUser.save();
  }

  // =============================
  // トークンの取得
  // =============================
  static getToken(user) {
    const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  }
}

export default new UserRepository();
