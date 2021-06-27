import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";
import { IUserType, ILoginQueryType } from "./user.type";
import { hash, genSalt } from "bcrypt";

class UserRepository {
  // User = new User();

  // =============================
  // ユーザーの保存
  // =============================
  async save(user: IUserType) {
    const newUser = await User.create(user);
    await this.passwordHashSave(newUser);
  }

  // =============================
  // ユーザーの取得 (emailで取得)
  // =============================
  async findOne(user: IUserType | ILoginQueryType) {
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
    genSalt(saltRounds, async (err: any, salt: string) => {
      hash(user.password, salt, (err: any, hash: string) => {
        user.password = hash;
        user.save();
      });
    });
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
