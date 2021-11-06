import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "bulletinBoard" })
export class BulletinBoard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ length: 140 })
  contents: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.bulletinBoards)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToMany(() => User)
  @JoinTable()
  likes: User[];
}
