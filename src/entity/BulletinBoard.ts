import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity, JoinColumn } from "typeorm";
import { User } from "./User";
import { Like } from "./like";

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
}
