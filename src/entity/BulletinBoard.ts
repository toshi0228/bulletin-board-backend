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
  url: string;

  @ManyToOne(() => User, (user) => user.bulletinBoards)
  user: User;
}
