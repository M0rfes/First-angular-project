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
  departments;
  sub: Subscription;
  constructor(
    private depService: DepartmentService,
    private acRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.depService.Departments.subscribe(
      (departments: Department[]) => (this.departments = departments)
    );
    this.sub = this.depService.updateDepartment.subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onEdit(id: string) {
    this.router.navigate([id], { relativeTo: this.acRoute });
  }
}
