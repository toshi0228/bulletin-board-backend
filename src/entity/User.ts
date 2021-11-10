import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import { BulletinBoard } from "./BulletinBoard";

@Entity({ name: "user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => BulletinBoard, (bulletinBoard) => bulletinBoard.user)
  bulletinBoards: BulletinBoard[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  // readonly updatedAt?: Date;
  updatedAt: Date;

  // 作成時間保存する前に日本時間の修正して保存
  @BeforeInsert()
  createDateReplaceJST() {
    let date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 9); // JSTに変換
    this.createdAt = date;
    this.save();
  }

  // 更新時間保存する前に日本時間の修正して保存
  @BeforeInsert()
  updateDateReplaceJST() {
    let date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 9); // JSTに変換
    this.updatedAt = date;
    this.save();
  }
}
