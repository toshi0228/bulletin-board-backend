import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
} from "typeorm";

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

  @Column()
  confirmPassword: string;

  @BeforeInsert()
  updateDates() {
    this.confirmPassword = "confirm";
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
