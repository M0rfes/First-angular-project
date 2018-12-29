import { Role } from "./../../../shared/models/role/role";
import { ModelService } from "src/app/shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { RoleService } from "src/app/shared/services/role.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.less"]
})
export class ModalComponent implements OnInit {
  constructor(
    private acRouter: ActivatedRoute,
    private mService: ModelService,
    private roleService: RoleService
  ) {}

  ngOnInit() {}
  unLoadModel() {
    this.mService.unLoadModel(this.acRouter);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.roleService.addRole = new Role(value.role);
    this.unLoadModel();
  }
}
