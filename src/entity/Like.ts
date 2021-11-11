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
  userId: number;

  @Column()
  bulletinBoardId: number;

  @ManyToOne(() => User, (user) => user.likes)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => BulletinBoard, (bulletinBoard) => bulletinBoard.likes)
  @JoinColumn({ name: "bulletinBoardId" })
  bulletinBoard: BulletinBoard;
}
