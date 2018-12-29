import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Department } from "../models/department/department";

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  private departments: Department[] = [
    new Department("Computers"),
    new Department("Mechanical"),
    new Department("Electronics"),
    new Department("Civil"),
    new Department("Electronic & Telecommunication"),
    new Department("Biotechnology")
  ];
  updateDepartment: Subject<Department[]> = new Subject<Department[]>();

  constructor() {}

  get Departments(): Department[] {
    return this.departments.slice();
  }

  getDepartment(id: number): Department {
    console.log(id);
    return this.departments[id];
  }

  set addDepartment(newDepartment: Department) {
    this.departments.push(newDepartment);
    this.updateDepartment.next(this.Departments);
  }

  editDepartment(id: number, newDept: Department) {
    this.departments[id] = newDept;
    this.updateDepartment.next(this.Departments);
  }
}
