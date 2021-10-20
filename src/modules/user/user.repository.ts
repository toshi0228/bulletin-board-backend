import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";
import { ICreateUserType, IGetUserType, ILoginQueryType } from "./user.type";
import { genSaltSync, hashSync } from "bcrypt";
import * as console from "console";

class UserRepository {
  // =============================
  // ユーザーの保存
  // =============================
  async save(user: ICreateUserType) {
    const newUser = await User.create(user);
    try {
      await this.passwordHashSave(newUser);
    } catch (e) {
      console.log("失敗しました");
      return e;
    }
  }

  // =============================
  // ユーザーの取得 (emailで取得)
  // =============================
  async findOne(user: IGetUserType | ILoginQueryType) {
    const { email } = user;

    const result = await User.findOne({ email });
    return result;
  }

  // =============================
  // ユーザーの取得 (userIdで取得)
  // =============================
  async findUser(userId: number) {
    const result = await User.findOne({ id: userId });
    return { id: userId, name: result.name, email: result.email };
  }

  // =============================
  // パスワードのハッシュ化
  // =============================
  async passwordHashSave(user) {
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(user.password, salt);
    user.password = hash;
    await user.save();
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
