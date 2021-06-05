import { hash, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../../entity/User";

interface IUserType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class UserRepository implements IUserType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  userModel = new User();

  constructor(name, email, password, confirmPassword) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  save() {
    console.log("ユーザーの保存");
  }

  // パスワードのハッシュ化
  passwordHash(password) {
    const saltRounds = 10;
    genSalt(saltRounds, (err: any, salt: string) => {
      hash(password, salt, (err: any, hash: string) => {
        password = hash;
        // this.save();
        this.userModel.save();
      });
    });
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

export default UserRepository;
