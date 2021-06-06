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

  toJSON() {
    return {
      ...this,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }
}
