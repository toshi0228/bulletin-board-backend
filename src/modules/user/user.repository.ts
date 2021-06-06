import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";
import { IUserType, ILoginQueryType } from "./user.type";

class UserRepository {
  User = new User();

  // ユーザーの保存
  async save(user: IUserType) {
    const newUser = await User.create(user);
    await newUser.save();
  }

  // ユーザーの取得
  async findOne(user: IUserType | ILoginQueryType) {
    const { email } = user;

    const result = await User.findOne({ email });
    return result;
  }

  // =============================
  // トークンの取得
  // =============================
  getToken(user) {
    const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return token;
  }
}

export default new UserRepository();
