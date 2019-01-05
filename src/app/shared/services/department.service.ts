import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Department } from "./../models/department/department";

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  updateDepartment: Subject<Department[]> = new Subject<Department[]>();
  private readonly baseuRls = "http://localhost:3000/departments";
  private readonly baseuRl = "http://localhost:3000/department";
  constructor(private http: HttpClient) {}

  get Departments(): Observable<Department[]> {
    return <Observable<Department[]>>this.http.get(this.baseuRls);
  }

  getDepartment(id: string): Observable<Department[]> {
    console.log(id);
    return <Observable<Department[]>>this.http.get(`${this.baseuRl}/${id}`);
  }

  addDepartment(newDepartment: Department): Observable<Department[]> {
    return <Observable<Department[]>>(
      this.http.post(`${this.baseuRls}`, newDepartment)
    );
  }

  editDepartment(id: string, newDept: Department): Observable<Department[]> {
    return <Observable<Department[]>>(
      this.http.put(`${this.baseuRl}/${id}`, newDept)
    );
  }
  deleteDepartment(id: string): Observable<Department[]> {
    return <Observable<Department[]>>this.http.delete(`${this.baseuRl}/${id}`);
  }
}
