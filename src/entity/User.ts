import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
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

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  // パスワードのハッシュ化
  @BeforeInsert()
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

  toJSON() {
    return {
      ...this,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }
}
