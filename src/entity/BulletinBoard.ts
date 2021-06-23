import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "bulletinBoard" })
export class BulletinBoard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.bulletinBoards)
  @JoinColumn({ name: "userId" })
  user: User;
}
