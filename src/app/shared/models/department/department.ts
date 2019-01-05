import { Faculty } from "serve/src/entity/Faculty";
import { User } from "serve/src/entity/User";
export class Department {
  public id: string;
  public faculties: Faculty[];
  public users: User[];
  constructor(public department: string) {}
}
