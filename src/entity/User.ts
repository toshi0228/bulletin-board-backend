import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
} from "typeorm";
import { hash, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  // パスワードのハッシュ化
  passwordHash() {
    const saltRounds = 10;
    genSalt(saltRounds, (err: any, salt: string) => {
      hash(this.password, salt, (err: any, hash: string) => {
        this.password = hash;
        this.save();
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

  // ====================================
  // 新規登録のバリデーション
  // ====================================
  static createUserValidator(name, email, password, confirmPassword) {
    let error = [];

    if (!email) {
      error.push("メールアドレスを入力してください");
    }

    if (!password) {
      error.push("パスワードを入力してください");
    }

    if (password !== confirmPassword) {
      error.push("パスワードと確認用のパスワードが違います");
    }
    return error;
  }

  // ====================================
  // ログインのバリデーション
  // ====================================
  static loginValidator(email, password) {
    let error = [];
    if (!email) {
      error.push("ログインができません");
    }

    if (!password) {
      error.push("ログインができません");
    }
    return error;
  }

  toJSON() {
    return {
      ...this,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }
}
