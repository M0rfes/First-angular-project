import { Department } from "./Department";
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert,
  Column,
  ManyToOne
} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class Faculty extends BaseEntity {
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  name: string;
  @ManyToOne(type => Department, department => department.faculties)
  department: Department;
}
