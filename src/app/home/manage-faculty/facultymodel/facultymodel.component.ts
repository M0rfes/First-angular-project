import { FacultyService } from "./../../../shared/services/faculty.service";
import { Faculty } from "./../../../shared/models/faculty/faculty";
import { NgForm } from "@angular/forms";
import { Department } from "./../../../shared/models/department/department";
import { DepartmentService } from "src/app/shared/services/department.service";
import { ModelService } from "src/app/shared/services/model.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-facultymodel",
  templateUrl: "./facultymodel.component.html",
  styleUrls: ["./facultymodel.component.less"]
})
export class FacultymodelComponent implements OnInit {
  departments: Department[];
  id: number;
  editMode = false;
  eidtFacul = "";
  editDepID: number = null;
  constructor(
    private aRoute: ActivatedRoute,
    private mService: ModelService,
    private depService: DepartmentService,
    private facService: FacultyService,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.departments = this.depService.Departments;
    this.acRoute.params.subscribe((params: Params) => {
      if (params["id"]) {
        this.id = +params["id"];
        this.editMode = true;
        this.eidtFacul = this.facService.getFaculty(this.id).FacName;
      }
    });
    console.log(this.editMode, this.eidtFacul);
  }
  unLoadeModel() {
    this.mService.unLoadModel(this.aRoute);
  }
  onSubmit(f: NgForm) {
    const value = f.value;
    const newFaculty = this.facService.createFaculty(
      value.Name,
      value.Department
    );
    if (!this.editMode) {
      this.facService.addFaculty = newFaculty;
    } else {
      this.facService.editFaculty(this.id, newFaculty);
    }
    this.unLoadeModel();
  }
}
