import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { BulletinBoard } from "./BulletinBoard";
import { convertJST } from "../helper";

@Entity({ name: "like" })
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  bulletinBoard_id: number;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => BulletinBoard, (bulletinBoard) => bulletinBoard.likes)
  @JoinColumn({ name: "bulletinBoard_id" })
  bulletinBoard: BulletinBoard;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 作成時間保存する前に日本時間の修正して保存
  @BeforeInsert()
  createDateReplaceJST() {
    this.createdAt = convertJST();
    this.save();
  }

  // 更新時間保存する前に日本時間の修正して保存
  @BeforeInsert()
  updateDateReplaceJST() {
    this.updatedAt = convertJST();
    this.save();
  }
}