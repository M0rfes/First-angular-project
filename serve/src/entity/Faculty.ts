import { isActive } from "./../util/isActive";
import { FacultyRemunerationMap } from "./FacultyRemunerationMap";
import { Department } from "./Department";
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  BeforeInsert,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class Faculty extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  name: string;
  @ManyToOne(type => Department, department => department.faculties)
  department: Department;
  @OneToMany(
    type => FacultyRemunerationMap,
    remunerationpay => remunerationpay.faculty
  )
  remunerationpay: FacultyRemunerationMap[];
  @Column("varchar", { default: "true" })
  isActive: isActive;
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
