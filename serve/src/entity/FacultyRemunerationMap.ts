import { isActive } from "./../util/isActive";
import { Faculty } from "./Faculty";
import { Remuneration } from "./Remuneration";
import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  BeforeInsert
} from "typeorm";
import * as uuidv4 from "uuid/v4";
@Entity()
export class FacultyRemunerationMap extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;
  @Column("int")
  noStudents: number;
  @Column("date")
  year: Date;
  @ManyToOne(type => Faculty, faculty => faculty.remunerationpay)
  faculty: Faculty;
  @ManyToOne(type => Remuneration, remuneration => remuneration.facultypay)
  remuneration: Remuneration;
  @Column("varchar", { default: "true" })
  isActive: isActive;
  @BeforeInsert()
  insertId() {
    this.id = uuidv4();
  }
}
