import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { User } from "./User";
import { Like } from "./Like";
import { convertJST } from "../helper";

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

  @OneToMany(() => Like, (like) => like.bulletinBoard)
  likes: Like[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 作成時間を保存する前に日本時間に修正して保存
  @BeforeInsert()
  createDateReplaceJST() {
    this.createdAt = convertJST();
  }

  // 更新時間を保存する前に日本時間に修正して保存
  @BeforeInsert()
  @BeforeUpdate()
  updateDateReplaceJST() {
    this.updatedAt = convertJST();
  }
}
