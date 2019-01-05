import { Faculty } from "./../../../../../serve/src/entity/Faculty";
import { Observable } from "rxjs";
import { FacultyService } from "./../../../shared/services/faculty.service";
import { FacultyData } from "./../../../shared/models/faculty/faculty";
import { NgForm } from "@angular/forms";
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
  departments: Observable<object>;
  id = "";
  editMode = false;
  eidtFacul = "";
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
        this.id = params["id"];
        this.editMode = true;
        this.facService
          .getFaculty(this.id)
          .subscribe(
            (faculties: Faculty[]) => (this.eidtFacul = faculties[0].name)
          );
      }
    });
  }
  unLoadeModel() {
    this.mService.unLoadModel(this.aRoute);
  }
  onSubmit(f: NgForm) {
    const value = f.value;
    const newFaculty = new FacultyData(value.Name, value.Department);
    console.log(newFaculty);
    if (!this.editMode) {
      this.facService
        .addFaculty(newFaculty)
        .subscribe((faculties: Faculty[]) =>
          this.facService.updateFaculties.next(faculties)
        );
    } else {
      this.facService
        .editFaculty(this.id, newFaculty)
        .subscribe((faculties: Faculty[]) =>
          this.facService.updateFaculties.next(faculties)
        );
    }
    this.unLoadeModel();
  }
}
