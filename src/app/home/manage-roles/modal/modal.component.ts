import { Role } from "./../../../shared/models/role/role";
import { ModelService } from "src/app/shared/services/model.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { RoleService } from "src/app/shared/services/role.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.less"]
})
export class ModalComponent implements OnInit {
  id: string;
  roleName: string;
  editMode = false;
  constructor(
    private acRouter: ActivatedRoute,
    private mService: ModelService,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    console.log(this.editMode);
    this.acRouter.params.subscribe((params: Params) => {
      if (params["id"]) {
        this.id = params["id"];
        this.editMode = true;
        this.roleService
          .getRole(this.id)
          .subscribe((role: Role[]) => (this.roleName = role[0].roleName));
      } else {
        this.id = "";
        this.roleName = "";
      }
    });
  }
  unLoadModel() {
    this.mService.unLoadModel(this.acRouter);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRole = new Role(value.role);
    if (this.editMode) {
      this.editMode = false;
      this.roleService
        .editRole(this.id, newRole)
        .subscribe((roles: Role[]) => this.roleService.updateRole.next(roles));
    } else {
      this.roleService
        .addRole(newRole)
        .subscribe((roles: Role[]) => this.roleService.updateRole.next(roles));
    }
    this.unLoadModel();
  }
  onDelete() {
    this.roleService
      .deleteRole(this.id)
      .subscribe(
        (roles: Role[]) => this.roleService.updateRole.next(roles),
        err => console.log(err)
      );
    this.unLoadModel();
  }
}
