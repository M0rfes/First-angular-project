import { Role } from "./../../../shared/models/role/role";
import { Department } from "./../../../shared/models/department/department";
import { Observable } from "rxjs";
import { DepartmentService } from "src/app/shared/services/department.service";
import { RoleService } from "./../../../shared/services/role.service";
import { ModelService } from "src/app/shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/shared/services/user.service";
import { userData } from "src/app/shared/models/user/user";
import { User } from "serve/src/entity/User";

@Component({
  selector: "app-usermodel",
  templateUrl: "./usermodel.component.html",
  styleUrls: ["./usermodel.component.less"]
})
export class UsermodelComponent implements OnInit {
  roles: Observable<object>;
  departments: Observable<object>;
  editmode = false;
  id = "";
  efName = "";
  elName = "";
  euName = "";
  eEmail = "";
  ePhone = "";
  ePassword = "";
  ecPassword = "";
  eDod: Date;
  eDep: Department;
  eRole: Role;
  constructor(
    private acRouter: ActivatedRoute,
    private mService: ModelService,
    private roleService: RoleService,
    private depService: DepartmentService,
    private uService: UserService
  ) {}

  ngOnInit() {
    this.roles = this.roleService.Roles;
    this.departments = this.depService.Departments;
    this.acRouter.params.subscribe((params: Params) => {
      if (params["id"]) {
        this.editmode = true;
        this.id = params["id"];
        this.uService.getUser(this.id).subscribe((users: User[]) => {
          this.efName = users[0].fname;
          this.elName = users[0].lname;
          this.euName = users[0].uname;
          this.eEmail = users[0].email;
          this.ePhone = users[0].phone;
          this.eDod = users[0].dob;
          this.ePassword = this.ecPassword = users[0].password;
          this.eDep = users[0].department;
          this.eRole = users[0].role;
        });
      }
    });
  }

  unLoadModel() {
    this.mService.unLoadModel(this.acRouter);
  }

  onSubmit(f: NgForm) {
    const {
      FName,
      LName,
      UName,
      Email,
      Phone,
      dob,
      Role,
      Department,
      Password
    } = f.value;
    const newUser: userData = {
      fname: FName,
      lname: LName,
      uname: UName,
      email: Email,
      phone: Phone,
      dob: new Date(dob),
      role: Role,
      department: Department,
      password: Password
    };
    if (!this.editmode) {
      this.uService
        .addUser(newUser)
        .subscribe((users: User[]) => this.uService.updateUser.next(users));
    } else {
      this.uService
        .editUser(this.id, newUser)
        .subscribe((users: User[]) => this.uService.updateUser.next(users));
    }
    this.unLoadModel();
  }
  onDelete() {
    this.uService
      .deleteUser(this.id)
      .subscribe((users: User[]) => this.uService.updateUser.next(users));
    this.unLoadModel();
  }
}
