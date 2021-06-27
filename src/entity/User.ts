import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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
  // readonly createdAt?: Date;
  createdAt: Date;

  @UpdateDateColumn()
  // readonly updatedAt?: Date;
  updatedAt: Date;
}
