import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  confirmPassword: string;

  toJSON() {
    return {
      ...this,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }

  //   static findByName(firstName: string, lastName: string) {
  //     return this.createQueryBuilder("user")
  //       .where("user.firstName = :firstName", { firstName })
  //       .andWhere("user.lastName = :lastName", { lastName })
  //       .getMany();
  //   }
}
