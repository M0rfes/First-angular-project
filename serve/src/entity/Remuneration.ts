import { isActive } from "./../util/isActive";
import { FacultyRemunerationMap } from "./FacultyRemunerationMap";
import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  BeforeInsert,
  OneToMany
} from "typeorm";
import * as uuidv4 from "uuid/v4";
@Entity()
export class Remuneration extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  type: string;
  @Column("int")
  amount: number;
  @Column("date")
  date: Date;
  @OneToMany(
    type => FacultyRemunerationMap,
    facultypay => facultypay.remuneration
  )
  facultypay: FacultyRemunerationMap[];
  @Column("varchar", { default: "true" })
  isActive: isActive;
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
