import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  BeforeInsert
} from "typeorm";
import * as uuidv4 from "uuid/v4";
@Entity()
export class Remuneration extends BaseEntity {
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
  @PrimaryColumn("uuid")
  id: string;
  @Column("varchar", { length: 255 })
  type: string;
  @Column("int")
  amount: number;
  @Column("date")
  date: Date;
}
