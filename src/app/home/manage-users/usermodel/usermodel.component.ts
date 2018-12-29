import { UserService, userData } from "./../../../shared/services/user.service";
import { Department } from "./../../../shared/models/department/department";
import { Role } from "./../../../shared/models/role/role";
import { DepartmentService } from "src/app/shared/services/department.service";
import { RoleService } from "./../../../shared/services/role.service";
import { ModelService } from "src/app/shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-usermodel",
  templateUrl: "./usermodel.component.html",
  styleUrls: ["./usermodel.component.less"]
})
export class UsermodelComponent implements OnInit {
  roles: Role[];
  departments: Department[];
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
      Date,
      Role,
      Department,
      Password
    } = f.value;
    const userdata: userData = {
      FName,
      LName,
      UName,
      Email,
      Phone,
      Date,
      Role,
      Department,
      Password
    };
    const newUser = this.uService.createUser(userdata);
    this.uService.addUser = newUser;
    this.unLoadModel();
  }
}
