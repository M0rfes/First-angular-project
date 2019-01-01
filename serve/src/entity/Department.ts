import { User } from "./User";
import { Faculty } from "./Faculty";
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert,
  Column,
  OneToMany,
  ManyToOne
} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class Department extends BaseEntity {
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  department: string;
  @OneToMany(type => Faculty, faculties => faculties.department)
  faculties: Faculty[];
  @OneToMany(type => User, users => users.department)
  users: User[];
}
