---
to: src/entity/<%= h.changeCase.pascal(name)%>.ts
unless_exists: true
---
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";

@Entity({ name: "<%= h.changeCase.camelCase(name)%>" })
export class <%= h.changeCase.pascal(name)%> extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
