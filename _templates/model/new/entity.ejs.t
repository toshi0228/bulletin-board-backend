---
to: src/entity/<%= h.changeCase.pascal(name)%>.ts
unless_exists: true
---
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { convertJST } from "../helper";

@Entity({ name: "<%= h.changeCase.camelCase(name)%>" })
export class <%= h.changeCase.pascal(name)%> extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

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
