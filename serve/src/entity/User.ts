import { isActive } from "./../util/isActive";
import { Department } from "./Department";
import { Role } from "./Role";
import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity,
  OneToMany,
  ManyToOne
} from "typeorm";
import * as uuidv4 from "uuid/v4";
@Entity()
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  fname: string;
  @Column("varchar", { length: 255 })
  lname: string;
  @Column("varchar", { length: 255 })
  uname: string;
  @Column("varchar", { length: 255 })
  email: string;
  @Column("varchar", { length: 255 })
  password: string;
  @Column("varchar", { length: 10 })
  phone: string;
  @Column("date")
  dob: Date;
  @ManyToOne(type => Role, role => role.users)
  role: Role;
  @ManyToOne(type => Department, department => department.users)
  department: Department;
  @Column("varchar", { default: "true" })
  isActive: isActive;
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
