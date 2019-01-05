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
  id: string;
  editMode = false;
  editDepName: string;
  constructor(
    private aRoute: ActivatedRoute,
    private mService: ModelService,
    private depService: DepartmentService
  ) {}
  ngOnInit() {
    this.aRoute.params.subscribe((params: Params) => {
      if (params["id"]) {
        this.id = params["id"];
        this.editMode = true;
        this.depService
          .getDepartment(this.id)
          .subscribe(
            (departments: Department[]) =>
              (this.editDepName = departments[0].department)
          );
      } else {
        this.editDepName = "";
      }
    });
  }

  unLoadModel() {
    this.mService.unLoadModel(this.aRoute);
  }
  onSubmit(f: NgForm) {
    const newDep = new Department(f.value.Department);
    if (!this.editMode) {
      this.depService
        .addDepartment(newDep)
        .subscribe((departments: Department[]) =>
          this.depService.updateDepartment.next(departments)
        );
    } else {
      this.depService
        .editDepartment(this.id, newDep)
        .subscribe((departments: Department[]) =>
          this.depService.updateDepartment.next(departments)
        );
    }
    this.unLoadModel();
  }

  onDelete() {
    this.depService
      .deleteDepartment(this.id)
      .subscribe((deps: Department[]) =>
        this.depService.updateDepartment.next(deps)
      );
    this.unLoadModel();
  }
  ngOnDestroy() {}
}
