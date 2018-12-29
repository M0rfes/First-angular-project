import { Subject } from "rxjs";
import { Faculty } from "./../models/faculty/faculty";
import { Injectable } from "@angular/core";
import { DepartmentService } from "./department.service";

@Injectable({
  providedIn: "root"
})
export class FacultyService {
  private faculties: Faculty[] = [
    new Faculty("name1", this.depService.getDepartment(0)),
    new Faculty("name2", this.depService.getDepartment(1)),
    new Faculty("name3", this.depService.getDepartment(2)),
    new Faculty("name4", this.depService.getDepartment(3))
  ];
  updateFaculties: Subject<Faculty[]> = new Subject<Faculty[]>();
  constructor(private depService: DepartmentService) {}
  get Faculties(): Faculty[] {
    return this.faculties.slice();
  }
  createFaculty(name: string, depID: number): Faculty {
    return new Faculty(name, this.depService.getDepartment(depID));
  }

  set addFaculty(faculty: Faculty) {
    this.faculties.push(faculty);
    this.updateFaculties.next(this.Faculties);
  }

  getFaculty(id: number): Faculty {
    return this.faculties[id];
  }

  editFaculty(id: number, faculty: Faculty) {
    this.faculties[id] = faculty;
    this.updateFaculties.next(this.Faculties);
  }
}
