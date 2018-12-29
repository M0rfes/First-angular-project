import { Role } from "./../models/role/role";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  updateRole: Subject<Role[]> = new Subject<Role[]>();
  private roles: Role[] = [
    new Role("Admin"),
    new Role("user"),
    new Role("Dev")
  ];
  constructor() {}
  get Roles(): Role[] {
    return this.roles.slice();
  }

  getRole(id: number): Role {
    return this.roles[id];
  }
  set addRole(role: Role) {
    this.roles.push(role);
    this.updateRole.next(this.Roles);
  }
}
