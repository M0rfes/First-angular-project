import { DepartmentService } from "./../../../shared/services/department.service";
import { Department } from "./../../../shared/models/department/department";
import { NgForm } from "@angular/forms";
import { ModelService } from "src/app/shared/services/model.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-departmentmodel",
  templateUrl: "./departmentmodel.component.html",
  styleUrls: ["./departmentmodel.component.less"]
})
export class DepartmentmodelComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  editDepName = "";
  constructor(
    private aRoute: ActivatedRoute,
    private mService: ModelService,
    private depService: DepartmentService
  ) {}
  ngOnInit() {
    this.aRoute.params.subscribe((params: Params) => {
      if (params["id"]) {
        this.id = +params["id"];
        this.editMode = true;
        this.editDepName = this.depService.getDepartment(this.id).DeptName;
      }
    });
  }

  unLoadModel() {
    this.mService.unLoadModel(this.aRoute);
  }
  onSubmit(f: NgForm) {
    const newDep = new Department(f.value.Department);
    if (!this.editMode) {
      this.depService.addDepartment = newDep;
    } else {
      this.depService.editDepartment(this.id, newDep);
    }
    this.unLoadModel();
  }
  ngOnDestroy() {}
}
