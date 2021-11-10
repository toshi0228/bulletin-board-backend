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
import { Like } from "./like";
import { convertJST } from "../helper";

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

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 作成時間保存する前に日本時間に修正して保存
  @BeforeInsert()
  createDateReplaceJST() {
    this.createdAt = convertJST();
    this.save();
  }

  // 更新時間保存する前に日本時間に修正して保存
  @BeforeInsert()
  updateDateReplaceJST() {
    this.updatedAt = convertJST();
    this.save();
  }
}
