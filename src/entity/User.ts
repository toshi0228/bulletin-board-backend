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

  // @OneToMany(() => BulletinBoard, (bulletinBoard) => bulletinBoard.user)
  @OneToMany(() => BulletinBoard, (bulletinBoard) => bulletinBoard.user_id)
  bulletinBoards?: BulletinBoard[];

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
