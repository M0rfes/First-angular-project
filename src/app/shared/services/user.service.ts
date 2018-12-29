import { userData } from "./user.service";
import { Subject } from "rxjs";
import { RoleService } from "./role.service";
import { DepartmentService } from "./department.service";
import { User } from "src/app/shared/models/user/user";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
export interface userData {
  FName: string;
  LName: string;
  UName: string;
  Email: string;
  Phone: number;
  Date: string;
  Role: number;
  Department: number;
  Password: string;
}
@Injectable({
  providedIn: "root"
})
export class UserService {
  updateUser: Subject<User[]> = new Subject<User[]>();
  private users: User[] = [
    new User(
      "Fname",
      "Lname",
      "uname",
      "Email",
      1234567890,
      new Date("1997-12-08"),
      this.roleService.getRole(1),
      this.depService.getDepartment(0),
      "password"
    )
  ];
  constructor(
    private depService: DepartmentService,
    private roleService: RoleService,
  ) {}
  createUser(u: userData): User {
    return new User(
      u.FName,
      u.LName,
      u.UName,
      u.Email,
      u.Phone,
      new Date(u.Date),
      this.roleService.getRole(u.Role),
      this.depService.getDepartment(u.Department),
      u.Password
    );
  }
  get Users(): User[] {
    return this.users.slice();
  }
  getUser(id: number): User {
    return this.users[id];
  }
  set addUser(newUser: User) {
    this.users.push(newUser);
    this.updateUser.next(this.Users);
  }
}
