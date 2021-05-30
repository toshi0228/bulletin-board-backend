import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
} from "typeorm";
import { hash, genSalt } from "bcrypt";

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
    genSalt(saltRounds, async (err: any, salt: string) => {
      hash(this.password, salt, (err: any, hash: string) => {
        this.password = hash;
        this.save();
      });
    });
  }

  static validator(name, email, password, confirmPassword) {
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

  toJSON() {
    return {
      ...this,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }

  //   static findByName(firstName: string, lastName: string) {
  //     return this.createQueryBuilder("user")
  //       .where("user.firstName = :firstName", { firstName })
  //       .andWhere("user.lastName = :lastName", { lastName })
  //       .getMany();
  //   }
}
