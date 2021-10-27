import { Entity, PrimaryColumn, Column, ManyToOne, BaseEntity, JoinColumn } from "typeorm";
import { User } from "./User";
import { BulletinBoard } from "./BulletinBoard";

@Entity({ name: "user-bulletinBoard-liked" })
export class UserBulletinBoardLiked extends BaseEntity {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  bulletinBoard_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => BulletinBoard, (bulletinBoard) => bulletinBoard.id)
  @JoinColumn({ name: "bulletinBoard_id" })
  bulletinBoard: BulletinBoard;

  @Column()
  isLiked: boolean;
}
