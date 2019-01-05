import { User } from "serve/src/entity/User";
export class Role {
  public id: string;
  public users: User[];
  constructor(public roleName: string) {}
}
