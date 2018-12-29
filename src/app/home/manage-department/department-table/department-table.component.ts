import { ModelService } from "./../../../shared/services/model.service";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { DepartmentService } from "src/app/shared/services/department.service";
import { Department } from "src/app/shared/models/department/department";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-department-table",
  templateUrl: "./department-table.component.html",
  styleUrls: ["./department-table.component.less"]
})
export class DepartmentTableComponent implements OnInit, OnDestroy {
  departments: Department[];
  sub: Subscription;
  sub2: Subscription;
  constructor(
    private depService: DepartmentService,
    private acRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.departments = this.depService.Departments;
    this.sub = this.depService.updateDepartment.subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onEdit(id: number) {
    this.router.navigate([id], { relativeTo: this.acRoute });
  }
}
