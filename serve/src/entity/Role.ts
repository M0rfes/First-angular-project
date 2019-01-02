import { isActive } from "./../util/isActive";
import { User } from "./User";
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Code,
  Column,
  BeforeInsert,
  ManyToOne,
  OneToMany
} from "typeorm";
import * as uuidv4 from "uuid/v4";
@Entity()
export class Role extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  roleName: string;
  @OneToMany(tyep => User, users => users.role)
  users: User[];
  @Column("varchar", { default: "true" })
  isActive: isActive;
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
